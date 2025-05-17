// --- Application State ---
let currentPartData; // Data for the current lesson part
let currentPartNumber; // Identifier for the current lesson part (can be number or string like "L2P1")

let currentSectionKey = 'study'; // Default section to show
let currentStudyStep = 0; // Current step in the study section
const sectionKeysInOrder = ['study', 'test', 'practice']; // Order of sections
let userTestData = {}; // Stores user's answers for the current test
let testMistakes = []; // Holds mistakes for the current test attempt
let partProgressData = {}; // Holds all progress data, loaded from localStorage

let currentSectionStartTime = null; // Timestamp for tracking time spent in a section
let draggedVerb = null; // Holds the verb being dragged in test mistake practice
let draggedLetterForActivity = null; // Holds the letter being dragged for general practice activities


// --- localStorage Keys ---
const PART_PROGRESS_DATA_KEY = 'beRightAppPartProgressData'; 
const ALL_PARTS_TITLES_KEY = 'beRightAppPartTitles'; 

// --- Helper Functions ---
function getElementByIdSafe(id) {
    return document.getElementById(id);
}

function querySelectorSafe(selector) {
    return document.querySelector(selector);
}

// --- Initialization and Data Handling ---
function loadProgressData() {
    const userName = localStorage.getItem('userName');
    if (!userName) {
        console.error('No user is logged in. Cannot load progress. Prompting for name.');
        initializeUserName(); 
        return; 
    }

    const userPath = `path_${userName}`;
    const pathDataString = localStorage.getItem(userPath);
    if (pathDataString) {
        try {
            const pathData = JSON.parse(pathDataString);
            partProgressData = pathData.progress || {};
        } catch (e) {
            console.error('Error parsing progress data for user:', userName, e);
            partProgressData = {};
        }
    } else {
        console.log('No progress data found for user:', userName, '. Initializing empty progress.');
        partProgressData = {};
    }
}

function saveProgressData() {
    const userName = localStorage.getItem('userName');
    if (!userName) {
        console.error('No user is logged in. Cannot save progress.');
        return;
    }

    const userPath = `path_${userName}`;
    let pathData = {};
    try {
        const existingPathDataString = localStorage.getItem(userPath);
        if (existingPathDataString) {
            pathData = JSON.parse(existingPathDataString);
        }
    } catch (e) {
        console.error('Error parsing existing path data before saving. Overwriting with new progress structure.', e);
        pathData = {};
    }
    
    pathData.progress = partProgressData; 
    try {
        localStorage.setItem(userPath, JSON.stringify(pathData));
    } catch (e) {
        console.error('Error saving progress data to localStorage:', e);
    }
}

function initializePartProgressEntry(partNum, title) {
    if (!partProgressData[partNum]) {
        partProgressData[partNum] = {
            timeSpentInMs: 0,
            sectionsAttempted: { study: false, test: false, practice: false },
            testScore: null,
            mistakesDetail: [], 
            firstInteractionTimestamp: new Date().getTime(),
            title: title || `חלק ${partNum}` 
        };
        saveProgressData();
    } else if (title && partProgressData[partNum].title !== title) {
        partProgressData[partNum].title = title; 
        saveProgressData();
    }
}

function storeAllPartTitles(allPartsDataObj) {
    try {
        const titles = {};
        for (const partKey in allPartsDataObj) {
            if (allPartsDataObj.hasOwnProperty(partKey) && allPartsDataObj[partKey] && allPartsDataObj[partKey].title) {
                titles[partKey] = allPartsDataObj[partKey].title;
            }
        }
        localStorage.setItem(ALL_PARTS_TITLES_KEY, JSON.stringify(titles));
    } catch (e) {
        console.error("Error storing all part titles to localStorage:", e);
    }
}


// --- Time Tracking ---
function formatTime(milliseconds) {
    if (milliseconds < 0) milliseconds = 0;
    let totalSeconds = Math.floor(milliseconds / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    if (hours > 0) {
        return `${hours} שעות, ${minutes} דקות, ${seconds} שניות`;
    } else if (minutes > 0) {
        return `${minutes} דקות, ${seconds} שניות`;
    } else {
        return `${seconds} שניות`;
    }
}

function formatTimeMinutes(milliseconds) {
    if (milliseconds < 0) milliseconds = 0;
    let totalSeconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(totalSeconds / 60);
    return `${minutes} דקות`;
}

function recordSectionTime() {
    if (currentSectionStartTime && currentPartNumber && partProgressData[currentPartNumber] && currentSectionKey !== 'progress_summary') {
        const endTime = new Date().getTime();
        const duration = endTime - currentSectionStartTime;
        partProgressData[currentPartNumber].timeSpentInMs += duration;
        saveProgressData();
        currentSectionStartTime = null; 
    }
}

// --- UI Rendering and Interaction ---
let partTitleEl, contentAreaEl, tabs, prevBtn, nextBtn, progressBarEl, partSelectorLinksContainer;
let studyPrevBtn, studyNextBtn, studyStepIndicatorEl;

function initializePageElements() {
    partTitleEl = getElementByIdSafe('part-title');
    contentAreaEl = getElementByIdSafe('content-area');
    tabs = {
        study: getElementByIdSafe('tab-study'),
        test: getElementByIdSafe('tab-test'),
        practice: getElementByIdSafe('tab-practice'),
        progress_summary: getElementByIdSafe('tab-progress') 
    };
    prevBtn = getElementByIdSafe('prev-btn');
    nextBtn = getElementByIdSafe('next-btn');
    progressBarEl = getElementByIdSafe('progress-bar');
    partSelectorLinksContainer = getElementByIdSafe('part-selector-links');

    if (tabs.study) tabs.study.addEventListener('click', () => showSection('study'));
    if (tabs.test) tabs.test.addEventListener('click', () => showSection('test'));
    if (tabs.practice) tabs.practice.addEventListener('click', () => showSection('practice'));
    if (tabs.progress_summary) { 
        tabs.progress_summary.addEventListener('click', (e) => {
            e.preventDefault(); 
            recordSectionTime(); 
            const lessonIdentifier = currentPartData?.lessonId || new URLSearchParams(window.location.search).get('lesson') || '';
            window.location.href = `../progress.html${lessonIdentifier ? '?lesson=' + lessonIdentifier : ''}`;
        });
    }

    if (prevBtn) prevBtn.addEventListener('click', () => navigateSection(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => navigateSection(1));

    if (partSelectorLinksContainer && currentPartNumber) {
        const allLinks = partSelectorLinksContainer.querySelectorAll('a.btn-part-selector-link');
        allLinks.forEach(link => link.classList.remove('active')); 

        let activeLink;
        activeLink = partSelectorLinksContainer.querySelector(`a[href="part${currentPartNumber}.html"]`);
        
        if (!activeLink && typeof currentPartNumber === 'string') {
            const match = currentPartNumber.match(/P(\d+)$/i); 
            if (match && match[1]) {
                const numericPart = match[1];
                activeLink = partSelectorLinksContainer.querySelector(`a[href="part${numericPart}.html"]`);
            } else {
                const numericPartFromString = currentPartNumber.match(/\d+/);
                if (numericPartFromString && numericPartFromString[0]) {
                     activeLink = partSelectorLinksContainer.querySelector(`a[href="part${numericPartFromString[0]}.html"]`);
                }
            }
        }
        
        if (activeLink) {
            activeLink.classList.add('active');
        } else {
            console.warn(`Could not find active link for currentPartNumber: ${currentPartNumber} in part-selector-links.`);
        }
    }

    const logoutButtonElement = querySelectorSafe('.logout-button-container button') || querySelectorSafe('.logout-button');
    if (logoutButtonElement) { 
        if (!logoutButtonElement.getAttribute('data-listener-set')) {
            logoutButtonElement.addEventListener('click', handleLogout);
            logoutButtonElement.setAttribute('data-listener-set', 'true');
        }
    } else { 
        const newLogoutButton = document.createElement('button');
        newLogoutButton.textContent = 'התנתק'; 
        newLogoutButton.className = 'logout-button'; 
        newLogoutButton.addEventListener('click', handleLogout);

        const headerElement = querySelectorSafe('.round-container header') || querySelectorSafe('header');
        if (headerElement) {
            if (!headerElement.querySelector('.logout-button')) {
                const logoutContainer = document.createElement('div');
                logoutContainer.className = 'logout-button-container absolute top-4 right-4 z-50'; 
                logoutContainer.appendChild(newLogoutButton);
                headerElement.style.position = 'relative'; 
                headerElement.appendChild(logoutContainer);
            }
        } else {
            console.warn('Header element not found for appending logout button.');
        }
    }
}


function showSection(sectionKey) {
    if (!currentPartData || !currentPartData.sections) {
        console.error("currentPartData or its sections are not defined.");
        if (contentAreaEl) contentAreaEl.innerHTML = "<p>שגיאה: תוכן השיעור לא נטען כראוי.</p>";
        return;
    }
    recordSectionTime(); 
    currentSectionKey = sectionKey;

    if (sectionKey === 'progress_summary') {
        console.log("Navigating to progress page via tab click.");
        return;
    }

    const sectionData = currentPartData.sections[sectionKey];
    if (!sectionData) {
        console.error(`Section data for "${sectionKey}" not found in current part (Part ID: ${currentPartNumber}).`);
        if (contentAreaEl) contentAreaEl.innerHTML = `<p>שגיאה: לא נמצא תוכן לחלק "${sectionKey}".</p>`;
        return;
    }

    currentSectionStartTime = new Date().getTime(); 
    if (partProgressData[currentPartNumber]) {
        partProgressData[currentPartNumber].sectionsAttempted[sectionKey] = true;
        saveProgressData();
    } else {
        console.warn(`Progress entry for part ${currentPartNumber} not found. Initializing.`);
        initializePartProgressEntry(currentPartNumber, currentPartData.title);
        if (partProgressData[currentPartNumber]) {
             partProgressData[currentPartNumber].sectionsAttempted[sectionKey] = true;
             saveProgressData();
        } else {
            console.error(`Failed to initialize progress entry for part ${currentPartNumber}.`);
        }
    }

    let htmlContent = `<h3 class="text-xl font-semibold mb-4 text-blue-700">${sectionData.title || 'ללא כותרת'}</h3>`;
    if (sectionData.instructions && sectionKey !== 'study') {
        htmlContent += `<p class="text-sm text-slate-600 mb-4">${sectionData.instructions}</p>`;
    }

    if (sectionKey === 'study') {
        currentStudyStep = 0; 
        htmlContent += `<div id="study-steps-container"></div>`; 
    } else if (sectionKey === 'test') {
        userTestData = {}; 
        testMistakes = [];   
        if (sectionData.questions && Array.isArray(sectionData.questions)) {
            sectionData.questions.forEach((q, index) => {
                htmlContent += `<div class="mb-6 p-4 border border-gray-200 rounded-lg bg-white shadow">`;
                htmlContent += `<p class="mb-2 font-medium">${index + 1}. ${q.q || 'שאלה ללא תוכן'}</p>`;
                if (q.type === "mcq") {
                    if (q.options && Array.isArray(q.options)) {
                        q.options.forEach(opt => {
                            const optionClass = (typeof opt === 'string' && (opt.includes("<span class='ltr'>") || opt.includes(" ltr"))) ? "question-option ltr-option" : "question-option";
                            const escapedOpt = (typeof opt === 'string') ? opt.replace(/"/g, "&quot;") : String(opt).replace(/"/g, "&quot;");
                            htmlContent += `
                                <label class="${optionClass}">
                                    <input type="radio" name="q${q.id}" value="${escapedOpt}" class="sr-only" onchange="handleTestInputChange('${q.id}', this.value)">
                                    <span>${opt}</span>
                                </label>`;
                        });
                    } else {
                        htmlContent += `<p class="text-red-500 text-sm">שגיאה: אפשרויות חסרות לשאלה ${q.id}.</p>`;
                    }
                } else if (q.type === "fill_single") {
                    htmlContent += `<input type="text" id="q${q.id}_fill" class="ltr border border-gray-300 p-2 rounded-md w-full mb-1 focus:ring-blue-500 focus:border-blue-500" placeholder="${q.placeholder || 'הקלד כאן'}">`;
                    if (q.hint) htmlContent += `<p class="text-xs text-gray-500 rtl mt-1">רמז: ${q.hint}</p>`;
                }
                htmlContent += `<div id="feedback-q${q.id}" class="mt-2 text-sm"></div>`;
                htmlContent += `</div>`;
            });
            htmlContent += `<button class="btn btn-primary mt-4 w-full" onclick="checkTestAnswers()">בדוק תשובות</button>`;
        } else {
            htmlContent += `<p>לא נמצאו שאלות למבחן זה.</p>`;
        }
        htmlContent += `<div id="test-summary" class="mt-6"></div>`;
    } else if (sectionKey === 'practice') {
        htmlContent += `<div id="practice-activities-container"></div>`;
    }

    if (contentAreaEl) contentAreaEl.innerHTML = htmlContent;

    if (sectionKey === 'study') {
        renderStudyStep();
    } else if (sectionKey === 'practice') {
        generatePracticeActivities();
    }

    updateTabStyles(sectionKey);
    updateNavigationButtonsVisibility(sectionKey);
    updateProgressBar();
}

function updateTabStyles(activeSectionKey) {
    for (const key in tabs) {
        if (tabs[key]) {
            tabs[key].classList.remove('tab-active');
            tabs[key].classList.add('tab-inactive');
        }
    }
    if (tabs[activeSectionKey]) {
        tabs[activeSectionKey].classList.add('tab-active');
        tabs[activeSectionKey].classList.remove('tab-inactive');
    }
}

function updateNavigationButtonsVisibility(sectionKey) {
    const mainNavButtons = getElementByIdSafe('navigation-buttons');
    const studyNavControls = getElementByIdSafe('study-navigation-controls'); 

    if (sectionKey === 'study') {
        if (mainNavButtons) mainNavButtons.classList.add('hidden');
    } else {
        if (mainNavButtons) mainNavButtons.classList.remove('hidden');
        if (studyNavControls) studyNavControls.classList.add('hidden'); 

        const currentVisibleSectionIndex = sectionKeysInOrder.indexOf(sectionKey);
        if (prevBtn) prevBtn.classList.toggle('hidden', currentVisibleSectionIndex === 0);
        if (nextBtn) {
            nextBtn.textContent = (currentVisibleSectionIndex === sectionKeysInOrder.length - 1) ? 'סיימתי חלק זה 🎉' : 'הבא';
            nextBtn.disabled = false; 
        }
    }
}


function renderStudyStep() {
    const studyStepsContainer = getElementByIdSafe('study-steps-container');
    if (!studyStepsContainer) {
        console.error("Study steps container not found.");
        return;
    }

    const studyData = currentPartData.sections.study;
    if (!studyData || !studyData.steps || studyData.steps.length === 0) {
        studyStepsContainer.innerHTML = (studyData && studyData.content) ? studyData.content : "<p>תוכן הלימוד לחלק זה עדיין בהכנה, או שאין שלבים מוגדרים.</p>";
        const mainNavButtons = getElementByIdSafe('navigation-buttons');
        if (mainNavButtons) mainNavButtons.classList.remove('hidden');
        if (prevBtn) prevBtn.classList.add('hidden'); 
        if (nextBtn) {
            nextBtn.textContent = 'הבא למבחן'; 
            nextBtn.disabled = false;
        }
        const studyNavDiv = getElementByIdSafe('study-navigation-controls');
        if (studyNavDiv) studyNavDiv.classList.add('hidden');
        return;
    }

    const mainNavButtons = getElementByIdSafe('navigation-buttons');
    if (mainNavButtons) mainNavButtons.classList.add('hidden');

    const step = studyData.steps[currentStudyStep];
    if (!step) {
        studyStepsContainer.innerHTML = "<p>שגיאה: שלב לימוד לא תקין.</p>";
        return;
    }
    let stepHtml = `<div class="study-step-card animate-fadeIn"> 
                        <h4 class="text-lg font-semibold text-amber-700 mb-2">${step.title || 'ללא כותרת לשלב'}</h4>
                        ${step.content || '<p>אין תוכן לשלב זה.</p>'}
                    </div>`;
    studyStepsContainer.innerHTML = stepHtml;

    let studyNavControls = getElementByIdSafe('study-navigation-controls');
    if (!studyNavControls) {
        studyStepsContainer.insertAdjacentHTML('afterend', `
            <div class="mt-6 flex justify-between items-center" id="study-navigation-controls">
                <button class="btn btn-secondary" id="study-prev-btn">הקודם</button>
                <span id="study-step-indicator" class="self-center text-slate-600 mx-4"></span>
                <button class="btn btn-primary" id="study-next-btn">הבא</button>
            </div>
        `);
        studyPrevBtn = getElementByIdSafe('study-prev-btn');
        studyNextBtn = getElementByIdSafe('study-next-btn');
        studyStepIndicatorEl = getElementByIdSafe('study-step-indicator');
        if (studyPrevBtn) studyPrevBtn.addEventListener('click', () => navigateStudyStep(-1));
        if (studyNextBtn) studyNextBtn.addEventListener('click', () => navigateStudyStep(1));
    } else {
        studyPrevBtn = getElementByIdSafe('study-prev-btn');
        studyNextBtn = getElementByIdSafe('study-next-btn');
        studyStepIndicatorEl = getElementByIdSafe('study-step-indicator');
        studyNavControls.classList.remove('hidden'); 
    }

    if (studyPrevBtn) studyPrevBtn.disabled = currentStudyStep === 0;
    if (studyNextBtn) {
        studyNextBtn.disabled = false;
        studyNextBtn.textContent = (currentStudyStep === studyData.steps.length - 1) ? 'סיימתי ללמוד 👍' : 'הבא';
    }
    if (studyStepIndicatorEl) studyStepIndicatorEl.textContent = `שלב ${currentStudyStep + 1} מתוך ${studyData.steps.length}`;
}

function navigateStudyStep(direction) {
    const studyData = currentPartData.sections.study;
    if (!studyData || !studyData.steps || studyData.steps.length === 0) {
        console.warn("navigateStudyStep called but no study steps are defined.");
        const testSectionIndex = sectionKeysInOrder.indexOf('test');
        if (testSectionIndex !== -1) showSection(sectionKeysInOrder[testSectionIndex]);
        return;
    }

    const newStudyStep = currentStudyStep + direction;
    if (newStudyStep >= 0 && newStudyStep < studyData.steps.length) {
        currentStudyStep = newStudyStep;
        renderStudyStep();
    } else if (newStudyStep === studyData.steps.length) { 
        const testSectionIndex = sectionKeysInOrder.indexOf('test');
        if (testSectionIndex !== -1) showSection(sectionKeysInOrder[testSectionIndex]);
    }
}

// --- Interactive Element Functions (Study, Test, Practice) ---
function toggleElementVisibility(elementId) {
    const el = getElementByIdSafe(elementId);
    if (el) {
        const isHidden = el.style.display === 'none' || el.classList.contains('hidden');
        if (isHidden) {
            el.style.display = 'block'; 
            el.classList.remove('hidden');
            el.classList.add('feedback-animation'); 
            setTimeout(() => el.classList.remove('feedback-animation'), 300); 
        } else {
            el.style.display = 'none';
            el.classList.add('hidden');
        }
    }
}

function checkStudyStepAnswer(inputId, correctAnswer, feedbackId) {
    const inputEl = getElementByIdSafe(inputId);
    const feedbackEl = getElementByIdSafe(feedbackId);
    if (inputEl && feedbackEl) {
        const userAnswer = inputEl.value.trim();
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            feedbackEl.innerHTML = `<span class="feedback-correct">מעולה! <span class="ltr">${correctAnswer}</span> זה נכון.</span>`;
        } else {
            feedbackEl.innerHTML = `<span class="feedback-incorrect">לא בדיוק. נסה שוב או המשך. התשובה הנכונה: <span class="ltr">${correctAnswer}</span>.</span>`;
        }
        feedbackEl.classList.remove('hidden'); 
        feedbackEl.classList.add('feedback-animation');
        setTimeout(() => feedbackEl.classList.remove('feedback-animation'), 500);
    }
}

function checkStudyStepAnswerDirect(userAnswer, correctAnswer, feedbackId) {
    const feedbackEl = getElementByIdSafe(feedbackId);
    if (feedbackEl) {
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            feedbackEl.innerHTML = `<span class="feedback-correct">בדיוק! <span class="ltr">${correctAnswer}</span>.</span>`;
        } else {
            feedbackEl.innerHTML = `<span class="feedback-incorrect">אופס, התשובה הנכונה היא <span class="ltr">${correctAnswer}</span>.</span>`;
        }
        feedbackEl.classList.remove('hidden'); 
        feedbackEl.classList.add('feedback-animation');
        setTimeout(() => feedbackEl.classList.remove('feedback-animation'), 500);
    }
}

function handleTestInputChange(questionId, selectedValue) {
    const questionGroup = document.querySelectorAll(`input[name="q${questionId}"]`);
    questionGroup.forEach(radio => {
        const label = radio.closest('.question-option'); 
        if (label) {
            if (radio.value === selectedValue) {
                label.classList.add('selected');
            } else {
                label.classList.remove('selected');
            }
        }
    });
    userTestData[questionId] = selectedValue; 
}


function checkTestAnswers() {
    testMistakes = []; 
    let correctAnswersCount = 0;
    const questions = currentPartData.sections.test.questions;

    if (!questions || questions.length === 0) {
        const summaryEl = getElementByIdSafe('test-summary');
        if (summaryEl) summaryEl.innerHTML = "<p>לא קיימות שאלות במבחן זה.</p>";
        return;
    }

    questions.forEach((q) => {
        const feedbackEl = getElementByIdSafe(`feedback-q${q.id}`);
        let userAnswer;
        let isCorrect = false;
        const questionTextClean = q.q ? String(q.q).replace(/<[^>]*>?/gm, '').trim() : "טקסט שאלה לא זמין";

        if (q.type === "mcq") {
            const selectedOption = querySelectorSafe(`input[name="q${q.id}"]:checked`);
            userAnswer = selectedOption ? selectedOption.value : null;
            if (userAnswer !== null && typeof q.correct === 'string' && userAnswer.toLowerCase() === q.correct.toLowerCase()) {
                isCorrect = true;
            }
        } else if (q.type === "fill_single") {
            const inputElement = getElementByIdSafe(`q${q.id}_fill`);
            userAnswer = inputElement ? inputElement.value.trim() : '';
            userTestData[q.id] = userAnswer; 
            if (typeof q.correct === 'string' && userAnswer.toLowerCase() === q.correct.toLowerCase()) {
                isCorrect = true;
            }
        }

        if (feedbackEl) {
            feedbackEl.classList.remove('hidden'); 
            if (isCorrect) {
                feedbackEl.innerHTML = '<span class="feedback-correct">נכון! 👍</span>';
            } else {
                feedbackEl.innerHTML = `<span class="feedback-incorrect">טעות. התשובה הנכונה: ${q.correct || 'לא צוינה'} 👎</span>`;
                testMistakes.push({
                    questionId: q.id,
                    questionText: questionTextClean,
                    userAnswer: userAnswer,
                    correctAnswer: q.correct
                });
            }
            feedbackEl.classList.add('feedback-animation');
            setTimeout(() => feedbackEl.classList.remove('feedback-animation'), 300);
        }
        if (isCorrect) correctAnswersCount++;
    });

    const summaryEl = getElementByIdSafe('test-summary');
    if (summaryEl) {
        summaryEl.classList.remove('hidden'); 
        const score = questions.length > 0 ? (correctAnswersCount / questions.length) * 100 : 0;
        summaryEl.innerHTML = `<p class="font-semibold text-lg mt-4">הציון שלך: ${score.toFixed(0)}% (${correctAnswersCount} מתוך ${questions.length} נכונות)</p>`;

        if (partProgressData[currentPartNumber]) {
            partProgressData[currentPartNumber].testScore = score;
            partProgressData[currentPartNumber].mistakesDetail = [...testMistakes];
            saveProgressData();
        }

        if (testMistakes.length > 0 && score < 100) {
            summaryEl.innerHTML += `<p class="text-orange-600 mt-2">אל דאגה, נתרגל את הטעויות בחלק התרגול!</p>`;
        } else if (score === 100) {
            summaryEl.innerHTML += `<p class="text-green-600 mt-2">כל הכבוד! עברת את המבחן בהצלחה!</p>`;
        }
    }
    const checkAnswersBtn = querySelectorSafe('button[onclick="checkTestAnswers()"]');
    if (checkAnswersBtn) {
        checkAnswersBtn.disabled = true;
        checkAnswersBtn.textContent = 'התשובות נבדקו';
    }
    if (nextBtn) {
        nextBtn.disabled = false;
    }
}

// --- Practice Section Functions ---
function generatePracticeActivities() {
    const container = getElementByIdSafe('practice-activities-container');
    if (!container) return;
    let practiceHtml = '';
    const practiceData = currentPartData.sections.practice;

    const currentPartMistakes = (partProgressData[currentPartNumber] && partProgressData[currentPartNumber].mistakesDetail)
                                  ? partProgressData[currentPartNumber].mistakesDetail
                                  : testMistakes; 

    if (currentPartMistakes && currentPartMistakes.length > 0) {
        practiceHtml += `<h4 class="text-md font-semibold text-orange-700 mb-3">בוא נתמקד בכמה מהטעויות מהמבחן:</h4>`;
        currentPartMistakes.forEach(mistake => {
            const questionObj = currentPartData.sections.test.questions.find(q => q.id === mistake.questionId);
            const questionDisplayPractice = mistake.questionText || (questionObj ? String(questionObj.q).replace(/<[^>]*>?/gm, '').trim() : "שאלה לא זמינה");

            if (questionObj && questionObj.sentenceParts && questionObj.type !== 'mcq_correct_sentence' && Array.isArray(questionObj.sentenceParts) && questionObj.sentenceParts.length === 2) {
                practiceHtml += `
                    <div class="practice-card animate-fadeIn mb-4">
                        <p class="font-medium"><strong>תרגול טעות (גרור ושחרר פועל):</strong></p>
                        <p class="text-md text-slate-700 rtl mt-2 mb-2 ltr">
                            ${questionObj.sentenceParts[0]}
                            <span class="drop-zone verb-drop-zone" id="dropzone-${mistake.questionId}" ondragover="allowDrop(event)" ondrop="dropVerb(event, '${mistake.questionId}', '${questionObj.correct}')">___</span>
                            ${questionObj.sentenceParts[1]}
                        </p>
                        <p class="text-sm text-red-500">התשובה שלך במבחן הייתה: <span class="ltr">${mistake.userAnswer || 'לא נענה'}</span></p>
                        <div class="mt-2 ltr">
                            גרור את הפועל הנכון:
                            <span class="draggable-verb" draggable="true" ondragstart="dragVerb(event, 'am')">am</span>
                            <span class="draggable-verb" draggable="true" ondragstart="dragVerb(event, 'is')">is</span>
                            <span class="draggable-verb" draggable="true" ondragstart="dragVerb(event, 'are')">are</span>
                            ${(currentPartNumber == 4 || String(currentPartNumber).toUpperCase().includes("L4")) ? `<span class="draggable-verb" draggable="true" ondragstart="dragVerb(event, 'was')">was</span> <span class="draggable-verb" draggable="true" ondragstart="dragVerb(event, 'were')">were</span> <span class="draggable-verb" draggable="true" ondragstart="dragVerb(event, 'wasn\\'t')">wasn't</span> <span class="draggable-verb" draggable="true" ondragstart="dragVerb(event, 'weren\\'t')">weren't</span>` : ''}
                            ${(String(currentPartNumber).toUpperCase().includes("L2") || String(currentPartNumber).toUpperCase().includes("L3")) ? `<span class="draggable-verb" draggable="true" ondragstart="dragVerb(event, 'isn\\'t')">isn't</span> <span class="draggable-verb" draggable="true" ondragstart="dragVerb(event, 'aren\\'t')">aren't</span>` : ''}
                        </div>
                        <div id="feedback-practice-mistake-${mistake.questionId}" class="mt-1 text-sm"></div>
                    </div>`;
            } else if (questionObj) { 
                practiceHtml += `
                    <div class="practice-card animate-fadeIn mb-4">
                        <p class="font-medium"><strong>תרגול טעות:</strong> ${questionDisplayPractice}</p>
                        <p class="text-sm text-red-500">התשובה שלך הייתה: <span class="ltr">${mistake.userAnswer || 'לא נענה'}</span></p>
                        <label for="practice-mistake-${mistake.questionId}" class="block mt-2 text-sm font-medium text-slate-700">מהי התשובה הנכונה?</label>
                        <input type="text" id="practice-mistake-${mistake.questionId}" class="ltr border border-gray-300 p-2 rounded-md w-full mt-1 focus:ring-blue-500 focus:border-blue-500" placeholder="${questionObj.correct || ''}">
                        <button class="btn btn-secondary btn-sm text-xs mt-2" onclick="checkPracticeMistake('${mistake.questionId}', '${questionObj.correct}')">בדוק</button>
                        <div id="feedback-practice-mistake-${mistake.questionId}" class="mt-1 text-sm"></div>
                    </div>`;
            }
        });
        if (currentPartMistakes.length > 0) practiceHtml += `<hr class="my-6">`;
    } else if (partProgressData[currentPartNumber] && partProgressData[currentPartNumber].testScore !== null) { 
        practiceHtml += `<p class="mb-3 font-semibold text-green-600">כל הכבוד! לא היו טעויות במבחן. הנה עוד תרגילים לחיזוק:</p>`;
    } else { 
        practiceHtml += `<p class="mb-3 text-slate-600">לאחר שתבצע את המבחן, חלק התרגול יתמקד בטעויות שלך או יציע תרגילים כלליים. הנה כמה תרגילים להתחלה:</p>`;
    }

    if (practiceData && practiceData.activities && Array.isArray(practiceData.activities) && practiceData.activities.length > 0) {
        practiceHtml += `<h4 class="text-md font-semibold text-blue-700 mb-3">תרגילים כלליים:</h4>`;
        practiceData.activities.forEach((act, index) => {
            practiceHtml += `<div class="practice-card animate-fadeIn mb-4" id="pa-container-${act.id}">`;
            // Add speaker button for the question if speakText function is available
            const questionTextForSpeech = (act.q || '').replace(/<[^>]*>?/gm, '').replace(/"/g, "&quot;").replace(/'/g, "\\'");
            const speakerButtonQ = typeof speakText === 'function' ? `<button class="speak-button" onclick="speakText('${questionTextForSpeech}')">🔊</button>` : '';
            practiceHtml += `<p class="font-medium">${index + 1}. ${act.q || 'פעילות ללא שאלה'} ${speakerButtonQ}</p>`;
            
            if (act.type === "sentencebuilder") {
                practiceHtml += `<div class="my-2 ltr" id="word-options-${act.id}">`;
                const words = act.words && Array.isArray(act.words) ? act.words : [];
                const shuffledWords = [...words].sort(() => Math.random() - 0.5);
                shuffledWords.forEach(word => {
                    practiceHtml += `<button class="word-button" onclick="addWordToSentence('${act.id}', '${word}')">${word}</button>`;
                });
                practiceHtml += `</div>`;
                practiceHtml += `<div class="sentence-area" id="sentence-area-${act.id}"></div>`;
                practiceHtml += `<button class="btn btn-secondary btn-sm text-xs mt-2 mr-2" onclick="clearSentence('${act.id}')">נקה</button>`;
                practiceHtml += `<button class="btn btn-primary btn-sm text-xs mt-2" onclick="checkSentenceBuilder('${act.id}', '${act.correctSentence || ''}')">בדוק משפט</button>`;
            } else if (act.type === "fill_in_blank") {
                practiceHtml += `<input type="text" id="fill-blank-${act.id}" class="ltr border border-gray-300 p-2 rounded-md w-full mt-1 focus:ring-blue-500 focus:border-blue-500" placeholder="${act.placeholder || 'הקלד כאן'}">`;
                practiceHtml += `<button class="btn btn-primary btn-sm text-xs mt-2" onclick="checkFillBlank('${act.id}', '${act.correct || ''}')">בדוק</button>`;
            } else if (act.type === "mcq") { 
                 if (act.options && Array.isArray(act.options)) {
                    act.options.forEach(opt => {
                        const optionTextForSpeech = (typeof opt === 'string' ? opt : String(opt)).replace(/<[^>]*>?/gm, '').replace(/"/g, "&quot;").replace(/'/g, "\\'");
                        const speakerButtonOpt = typeof speakText === 'function' ? `<button class="speak-button" onclick="speakText('${optionTextForSpeech}')">🔊</button>` : '';
                        const optionClass = (typeof opt === 'string' && (opt.includes("<span class='ltr'>") || opt.includes(" ltr"))) ? "question-option ltr-option" : "question-option";
                        const escapedOpt = (typeof opt === 'string') ? opt.replace(/"/g, "&quot;") : String(opt).replace(/"/g, "&quot;");
                        practiceHtml += `
                            <label class="${optionClass} practice-mcq-option"> 
                                <input type="radio" name="pa_q${act.id}" value="${escapedOpt}" class="sr-only" onchange="handlePracticeMCQChange('${act.id}', this.value, '${act.correct || ''}')">
                                <span>${opt}</span>
                                ${speakerButtonOpt}
                            </label>`;
                    });
                } else {
                    practiceHtml += `<p class="text-red-500 text-sm">שגיאה: אפשרויות חסרות לפעילות ${act.id}.</p>`;
                }
            } else if (act.type === "drag_drop_letters_rule") { 
                practiceHtml += `<div class="my-2 ltr flex items-center justify-center flex-wrap" id="ddlr-droparea-${act.id}">`;
                if (act.word_structure && Array.isArray(act.word_structure)) {
                    let dropZoneCounter = 0; 
                    act.word_structure.forEach((segment) => {
                        if (segment === "_") { 
                            practiceHtml += `<span class="drop-zone letter-drop-zone" data-activity-id="${act.id}" data-drop-target-idx="${dropZoneCounter}" ondragover="allowDrop(event)" ondrop="dropLetterIntoActivity(event, '${act.id}', ${dropZoneCounter})">_</span>`;
                            dropZoneCounter++;
                        } else {
                            practiceHtml += `<span class="mx-1 text-lg">${segment}</span>`; // Added styling for static parts
                        }
                    });
                }
                practiceHtml += `</div>`;
                practiceHtml += `<div class="my-3 ltr text-center" id="ddlr-options-${act.id}"><strong>גרור מפה:</strong> `;
                if (act.draggable_options && Array.isArray(act.draggable_options)) {
                    // Shuffle draggable options for better practice
                    const shuffledDraggableOptions = [...act.draggable_options].sort(() => Math.random() - 0.5);
                    shuffledDraggableOptions.forEach(letter => {
                        practiceHtml += `<span class="draggable-verb draggable-letter" draggable="true" ondragstart="dragLetterForActivity(event, '${letter}')">${letter}</span>`;
                    });
                }
                practiceHtml += `</div>`;
                practiceHtml += `<button class="btn btn-primary btn-sm text-xs mt-2 w-full md:w-auto" onclick="checkDragDropLettersRule('${act.id}')">בדוק</button>`;
            }
            practiceHtml += `<div id="feedback-pa-${act.id}" class="mt-2 text-sm"></div>`;
            practiceHtml += `</div>`;
        });
    } else if (!currentPartMistakes || currentPartMistakes.length === 0) {
        practiceHtml += `<p>לא נמצאו תרגילי תרגול כלליים לשיעור זה.</p>`;
    }
    container.innerHTML = practiceHtml;
}

// --- Drag and Drop for Practice Activities (Generalizing) ---

function dragLetterForActivity(event, letter) {
    draggedLetterForActivity = letter;
    event.dataTransfer.setData("text/plain", letter);
    event.target.classList.add('dragging'); // Optional: style the dragged item
}

function allowDrop(event) {
    event.preventDefault();
    const dropZone = event.target.closest('.letter-drop-zone');
    if(dropZone){
        // Optional: add a class to highlight drop zone on hover
        // dropZone.classList.add('drag-over'); 
    }
}
// Optional: remove highlight when not dragging over
// document.addEventListener('dragover', function(event) {
//     document.querySelectorAll('.letter-drop-zone.drag-over').forEach(dz => dz.classList.remove('drag-over'));
// });


function dropLetterIntoActivity(event, activityId, targetIndex) {
    event.preventDefault();
    const letter = draggedLetterForActivity || event.dataTransfer.getData("text/plain");
    const dropZone = event.target.closest('.letter-drop-zone');

    if (dropZone && letter) {
        // Check if this drop zone is the one intended by targetIndex
        if (parseInt(dropZone.getAttribute('data-drop-target-idx')) === targetIndex) {
            dropZone.textContent = letter;
            dropZone.setAttribute('data-dropped-letter', letter); 
            dropZone.classList.add('filled'); // Optional: style filled drop zones
            // dropZone.classList.remove('drag-over');
        }

        const feedbackEl = getElementByIdSafe(`feedback-pa-${activityId}`);
        if (feedbackEl) feedbackEl.innerHTML = ''; // Clear previous feedback
    }
    if (document.querySelector('.dragging')) {
        document.querySelector('.dragging').classList.remove('dragging');
    }
    draggedLetterForActivity = null; 
}

function checkDragDropLettersRule(activityId) {
    const activityData = currentPartData.sections.practice.activities.find(act => act.id === activityId);
    const feedbackEl = getElementByIdSafe(`feedback-pa-${activityId}`);
    if (!activityData || !feedbackEl) {
        console.error("Activity data or feedback element not found for checkDragDropLettersRule", activityId);
        return;
    }

    feedbackEl.classList.remove('hidden');
    let userAnswerSequence = [];
    
    for (let i = 0; i < activityData.correct_sequence.length; i++) {
        const zone = querySelectorSafe(`#ddlr-droparea-${activityId} .letter-drop-zone[data-drop-target-idx="${i}"]`);
        if (zone) {
            const letter = (zone.getAttribute('data-dropped-letter') || zone.textContent).trim();
            if (letter && letter !== '_') {
                userAnswerSequence.push(letter);
            } else {
                userAnswerSequence.push(''); // Represents an unfilled slot
            }
        } else {
             userAnswerSequence.push(''); // Should not happen if HTML is generated correctly
             console.warn(`Drop zone with index ${i} not found for activity ${activityId}`);
        }
    }
    
    const userAnswerString = userAnswerSequence.join('').toLowerCase();
    const correctAnswerString = activityData.correct_sequence.join('').toLowerCase();
    const isCorrect = userAnswerString === correctAnswerString;

    if (isCorrect) {
        feedbackEl.innerHTML = `<span class="feedback-correct">נכון! המילה היא <span class="ltr font-semibold">${activityData.full_correct_word || userAnswerString}</span></span>`;
    } else {
        feedbackEl.innerHTML = `<span class="feedback-incorrect">נסה שוב. התשובה הנכונה היא <span class="ltr font-semibold">${activityData.correct_sequence.join('')}</span> כדי ליצור <span class="ltr font-semibold">${activityData.full_correct_word || ''}</span>.</span>`;
    }
    feedbackEl.classList.add('feedback-animation');
    setTimeout(() => feedbackEl.classList.remove('feedback-animation'), 300);
}


// Handler for MCQ in practice
function handlePracticeMCQChange(activityId, selectedValue, correctAnswer) {
    const feedbackEl = getElementByIdSafe(`feedback-pa-${activityId}`);
    const questionGroup = document.querySelectorAll(`input[name="pa_q${activityId}"]`);
    
    if (!feedbackEl) {
        console.error(`Feedback element for practice MCQ ${activityId} not found.`);
        return;
    }
    
    questionGroup.forEach(radio => {
        const label = radio.closest('.practice-mcq-option');
        if (label) {
            label.classList.remove('selected', 'correct', 'incorrect');
            if (radio.value === selectedValue) {
                label.classList.add('selected');
            }
        } else {
            console.warn(`Label for radio button in practice MCQ ${activityId} not found.`);
        }
    });

    feedbackEl.classList.remove('hidden');
    const normalizedSelected = stripHtmlTags(selectedValue).toLowerCase();
    const normalizedCorrect = stripHtmlTags(correctAnswer).toLowerCase();

    console.log(`MCQ Debug - Activity ID: ${activityId}`);
    console.log(`Selected Value: ${selectedValue}`);
    console.log(`Correct Answer: ${correctAnswer}`);
    console.log(`Normalized Selected Value: ${normalizedSelected}`);
    console.log(`Normalized Correct Answer: ${normalizedCorrect}`);

    if (normalizedSelected === normalizedCorrect) {
        feedbackEl.innerHTML = `<span class="feedback-correct">נכון! <span class="ltr">${correctAnswer}</span></span>`;
        const correctLabel = querySelectorSafe(`input[name="pa_q${activityId}"][value="${selectedValue.replace(/"/g, "&quot;")}"]`)?.closest('.practice-mcq-option');
        if (correctLabel) correctLabel.classList.add('correct');
    } else {
        feedbackEl.innerHTML = `<span class="feedback-incorrect">טעות. התשובה הנכונה היא <span class="ltr">${correctAnswer}</span>.</span>`;
        const selectedLabel = querySelectorSafe(`input[name="pa_q${activityId}"][value="${selectedValue.replace(/"/g, "&quot;")}"]`)?.closest('.practice-mcq-option');
        if (selectedLabel) selectedLabel.classList.add('incorrect');
    }
    feedbackEl.classList.add('feedback-animation');
    setTimeout(() => feedbackEl.classList.remove('feedback-animation'), 300);
}


function dragVerb(event, verb) {
    draggedVerb = verb;
    event.dataTransfer.setData("text", verb);
}
// allowDrop is already defined
function dropVerb(event, questionId, correctAnswer) {
    event.preventDefault();
    const dropZone = getElementByIdSafe('dropzone-' + questionId);
    const feedbackEl = getElementByIdSafe('feedback-practice-mistake-' + questionId);
    const droppedVerbText = draggedVerb || event.dataTransfer.getData("text");

    if (dropZone && droppedVerbText) {
        dropZone.textContent = droppedVerbText;
        feedbackEl.classList.remove('hidden');
        if (droppedVerbText.toLowerCase() === correctAnswer.toLowerCase()) {
            feedbackEl.innerHTML = `<span class="feedback-correct">נכון! <span class="ltr">${correctAnswer}</span></span>`;
            dropZone.style.borderColor = '#16a34a'; 
            dropZone.style.color = '#16a34a';
        } else {
            feedbackEl.innerHTML = `<span class="feedback-incorrect">טעות. התשובה הנכונה היא <span class="ltr">${correctAnswer}</span>.</span>`;
            dropZone.style.borderColor = '#dc2626'; 
            dropZone.style.color = '#dc2626';
        }
        feedbackEl.classList.add('feedback-animation');
        setTimeout(() => feedbackEl.classList.remove('feedback-animation'), 300);
    }
    draggedVerb = null;
}

function checkPracticeMistake(questionId, correctAnswer) {
    const inputEl = getElementByIdSafe(`practice-mistake-${questionId}`);
    const feedbackEl = getElementByIdSafe(`feedback-practice-mistake-${questionId}`);
    if (inputEl && feedbackEl) {
        feedbackEl.classList.remove('hidden');
        if (inputEl.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            feedbackEl.innerHTML = `<span class="feedback-correct">נכון! התשובה היא <span class="ltr">${correctAnswer}</span>.</span>`;
        } else {
            feedbackEl.innerHTML = `<span class="feedback-incorrect">טעות. התשובה הנכונה היא <span class="ltr">${correctAnswer}</span>.</span>`;
        }
        feedbackEl.classList.add('feedback-animation');
        setTimeout(() => feedbackEl.classList.remove('feedback-animation'), 300);
    }
}

// Sentence Builder functions
function addWordToSentence(activityId, word) {
    const sentenceArea = getElementByIdSafe(`sentence-area-${activityId}`);
    if (sentenceArea) {
        const currentText = sentenceArea.textContent.trim();
        sentenceArea.textContent = currentText ? `${currentText} ${word}` : word;
    }
}

function clearSentence(activityId) {
    const sentenceArea = getElementByIdSafe(`sentence-area-${activityId}`);
    if (sentenceArea) sentenceArea.textContent = '';
    const feedbackEl = getElementByIdSafe(`feedback-pa-${activityId}`);
    if (feedbackEl) {
        feedbackEl.innerHTML = '';
        feedbackEl.classList.add('hidden'); 
        feedbackEl.classList.remove('feedback-animation');
    }
}

function checkSentenceBuilder(activityId, correctSentence) {
    const sentenceArea = getElementByIdSafe(`sentence-area-${activityId}`);
    const feedbackEl = getElementByIdSafe(`feedback-pa-${activityId}`);
    if (sentenceArea && feedbackEl) {
        feedbackEl.classList.remove('hidden');
        const userAnswer = sentenceArea.textContent.trim().toLowerCase().replace(/\s+/g, ' ');
        const normalizedCorrectSentence = correctSentence.toLowerCase().replace(/\s+/g, ' ');

        if (userAnswer === normalizedCorrectSentence) {
            feedbackEl.innerHTML = `<span class="feedback-correct">נכון! ${correctSentence}</span>`;
        } else {
            feedbackEl.innerHTML = `<span class="feedback-incorrect">טעות, נסה שוב.</span>`;
        }
        feedbackEl.classList.add('feedback-animation');
        setTimeout(() => feedbackEl.classList.remove('feedback-animation'), 300);
    }
}

// Fill-in-the-blank function for general practice
function checkFillBlank(activityId, correctAnswer) {
    const inputEl = getElementByIdSafe(`fill-blank-${activityId}`);
    const feedbackEl = getElementByIdSafe(`feedback-pa-${activityId}`);
    if (inputEl && feedbackEl) {
        feedbackEl.classList.remove('hidden');
        if (inputEl.value.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            feedbackEl.innerHTML = `<span class="feedback-correct">נכון! <span class="ltr">${correctAnswer}</span></span>`;
        } else {
            feedbackEl.innerHTML = `<span class="feedback-incorrect">טעות. התשובה הנכונה היא <span class="ltr">${correctAnswer}</span>.</span>`;
        }
        feedbackEl.classList.add('feedback-animation');
        setTimeout(() => feedbackEl.classList.remove('feedback-animation'), 300);
    }
}

// --- Text-to-Speech Function ---
function speakText(textToSpeak, lang = 'en-US') {
    if ('speechSynthesis' in window) {
        // Clean the text: remove HTML tags and decode HTML entities
        const tempEl = document.createElement('div');
        tempEl.innerHTML = textToSpeak;
        const cleanText = tempEl.textContent || tempEl.innerText || "";
        
        const utterance = new SpeechSynthesisUtterance(cleanText);
        utterance.lang = lang;
        utterance.rate = 0.9; 
        utterance.pitch = 1; 

        // Optional: try to find a specific voice if needed
        // const voices = window.speechSynthesis.getVoices();
        // if (voices.length > 0) {
        //    utterance.voice = voices.find(voice => voice.lang === lang && voice.name.includes('Google US English')) || voices.find(voice => voice.lang === lang);
        // }
        
        window.speechSynthesis.cancel(); // Cancel any ongoing speech
        window.speechSynthesis.speak(utterance);
    } else {
        console.warn('Speech synthesis not supported in this browser.');
        // You could provide a fallback or just do nothing.
        alert('מצטערים, הדפדפן שלך אינו תומך בהקראת טקסט.');
    }
}
window.speakText = speakText; // Make it globally accessible


// --- Main Navigation and Progress Bar ---
function navigateSection(direction) {
    recordSectionTime();
    const currentVisibleSectionIndex = sectionKeysInOrder.indexOf(currentSectionKey);
    const newSectionIndex = currentVisibleSectionIndex + direction;

    if (newSectionIndex >= 0 && newSectionIndex < sectionKeysInOrder.length) {
        showSection(sectionKeysInOrder[newSectionIndex]);
    } else if (newSectionIndex === sectionKeysInOrder.length) { 
        if (contentAreaEl) {
            const partTitle = currentPartData && currentPartData.title ? currentPartData.title : "החלק הנוכחי";
            contentAreaEl.innerHTML = `
                <div class="text-center p-6 bg-green-50 rounded-lg shadow-lg animate-fadeIn">
                    <h3 class="text-3xl font-bold text-green-700 mb-4">🎉 כל הכבוד! סיימת את ${partTitle}! 🎉</h3>
                    <p class="text-slate-700 mb-6 text-lg">את/ה מוכן/מוכנה לעבור לשיעור הבא (אם קיים), לחזור לדף הראשי, או לצפות בסיכום ההתקדמות שלך.</p>
                    <div class="flex justify-center gap-4">
                        <a href="../index.html" class="btn btn-primary">חזרה לדף הראשי</a>
                        <a href="../progress.html" class="btn btn-secondary">צפה בהתקדמות</a>
                    </div>
                    <img src="https://placehold.co/300x200/a7f3d0/14532d?text=Part+Complete%21" alt="Part Complete" class="mx-auto rounded-lg shadow-md mt-8" onerror="this.onerror=null;this.src='https://placehold.co/300x200/e0e0e0/757575?text=Image+Error';">
                </div>`;
        }
        if (nextBtn) {
            nextBtn.textContent = 'החלק הושלם';
            nextBtn.disabled = true;
        }
        if (prevBtn) prevBtn.classList.remove('hidden'); 
        updateProgressBarForEndOfPart();
    }
}

function updateProgressBar() {
    if (progressBarEl) {
        const currentVisibleSectionIndex = sectionKeysInOrder.indexOf(currentSectionKey);
        let progress = 0;
        if (currentVisibleSectionIndex !== -1) { 
             progress = ((currentVisibleSectionIndex + 1) / sectionKeysInOrder.length) * 100;
        } else if (currentSectionKey === 'completed') { 
            progress = 100;
        }
        
        progress = Math.min(100, Math.max(0, progress)); 

        progressBarEl.style.width = `${progress}%`;
        const progressText = `${Math.round(progress)}%`;
        progressBarEl.textContent = progressText;
        progressBarEl.setAttribute('aria-valuenow', Math.round(progress));
        progressBarEl.setAttribute('data-progress-text', progressText);
    }
}

function updateProgressBarForEndOfPart() {
    if (progressBarEl) {
        progressBarEl.style.width = `100%`;
        progressBarEl.textContent = `100%`;
        progressBarEl.setAttribute('aria-valuenow', 100);
        progressBarEl.setAttribute('data-progress-text', `100%`);
        currentSectionKey = 'completed'; 
    }
}

// --- Global functions accessible from HTML (via window object) ---
window.toggleElementVisibility = toggleElementVisibility;
window.checkStudyStepAnswer = checkStudyStepAnswer;
window.checkStudyStepAnswerDirect = checkStudyStepAnswerDirect;
window.handleTestInputChange = handleTestInputChange;
window.checkTestAnswers = checkTestAnswers;
window.addWordToSentence = addWordToSentence;
window.clearSentence = clearSentence;
window.checkSentenceBuilder = checkSentenceBuilder;
window.checkFillBlank = checkFillBlank;
window.dragVerb = dragVerb; 
window.allowDrop = allowDrop; 
window.dropVerb = dropVerb; 
window.checkPracticeMistake = checkPracticeMistake;
window.handleLogout = handleLogout; 
window.handlePracticeMCQChange = handlePracticeMCQChange; 
window.dragLetterForActivity = dragLetterForActivity; 
window.dropLetterIntoActivity = dropLetterIntoActivity; 
window.checkDragDropLettersRule = checkDragDropLettersRule; 


// --- User Authentication and Initialization ---
function handleLogout() {
    localStorage.removeItem('userName');
    window.location.href = "../index.html"; 
}

function initializeUserName() {
    let userName = localStorage.getItem('userName');
    const userDisplayEl = getElementByIdSafe('user-display'); 

    if (!userName) {
        const currentPage = window.location.pathname.split('/').pop();
        if (currentPage !== 'index.html' && !currentPage.includes('menu')) { 
            userName = prompt('אנא הזן את שמך כדי להמשיך:');
            if (userName && userName.trim() !== "") {
                localStorage.setItem('userName', userName.trim());
            } else {
                alert('נדרש שם כדי להמשיך. תועבר לדף הראשי.');
                window.location.href = '../index.html'; 
                return; 
            }
        } else if (userDisplayEl) {
             userDisplayEl.textContent = 'אנא הזן שם משתמש בדף הראשי.';
        }
    }

    if (userDisplayEl && userName) {
        userDisplayEl.textContent = `ברוך הבא, ${userName}!`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (getElementByIdSafe('user-display')) {
        initializeUserName();
    }
});

// --- Page Initialization ---
function initializeCurrentPage(pageType, partId, partData, allMasterTitles) {
    console.log(`Initializing page. Type: ${pageType}, Part ID: ${partId}`);

    currentPartNumber = partId; 
    currentPartData = partData;

    const userName = localStorage.getItem('userName');
    if (!userName && pageType === 'part') { 
        console.warn('User name not found during page initialization. Prompting...');
        initializeUserName(); 
        if (!localStorage.getItem('userName')) {
            console.error("User name still not available. Aborting page initialization.");
            if (getElementByIdSafe('content-area')) {
                getElementByIdSafe('content-area').innerHTML = "<p>שגיאה: נדרש שם משתמש. אנא חזור לדף הראשי והזן שם.</p>";
            }
            return;
        }
    }
    
    loadProgressData(); 

    if (pageType === 'part') {
        if (!currentPartNumber || !currentPartData) {
            console.error("Part ID or Part Data missing for page initialization.");
            if (getElementByIdSafe('content-area')) getElementByIdSafe('content-area').innerHTML = "שגיאה קריטית בטעינת השיעור (נתונים חסרים).";
            return;
        }
        if (!currentPartData.title) {
            console.warn(`Part data for ${currentPartNumber} is missing a title.`);
        }
        
        initializePartProgressEntry(currentPartNumber, currentPartData.title || `חלק ${currentPartNumber}`);
        
        if (allMasterTitles) {
            storeAllPartTitles(allMasterTitles);
        }

        initializePageElements(); 
        
        const titleElement = partTitleEl || getElementByIdSafe('lesson-title'); 
        if (titleElement) {
            titleElement.textContent = currentPartData.title || `חלק ${currentPartNumber}`;
        } else {
            console.warn('Part title display element (part-title or lesson-title) not found.');
        }
        
        showSection('study'); 
    } else if (pageType === 'progress') {
        console.log("Progress page type detected. Its own script should handle display.");
    }

    if (!contentAreaEl) contentAreaEl = getElementByIdSafe('content-area');
    if (!progressBarEl) progressBarEl = getElementByIdSafe('progress-bar');
}

// Utility function to strip HTML tags from a string
function stripHtmlTags(input) {
    if (typeof input !== 'string') return input;
    const div = document.createElement('div');
    div.innerHTML = input;
    return div.textContent || div.innerText || '';
}
