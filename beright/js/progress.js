// Progress tracking and reporting functions

function initializeUserData() {
    const userName = localStorage.getItem('userName');
    if (!userName) {
        console.error('No user name found. Redirecting to login page.');
        window.location.href = '../index.html'; // Corrected path
        return;
    }

    const userData = JSON.parse(localStorage.getItem(userName));
    if (!userData || !userData.path) {
        console.error('User data or path not found. Redirecting to login page.');
        window.location.href = '../index.html'; // Corrected path
        return;
    }

    const userPath = userData.path;
    const pathData = JSON.parse(localStorage.getItem(userPath));
    if (!pathData) {
        console.error('Path data not found. Initializing new path data.');
        localStorage.setItem(userPath, JSON.stringify({ progress: {} }));
        partProgressData = {}; // Initialize empty progress data
    } else {
        partProgressData = pathData.progress || {}; // Load existing progress data
    }
}

// Updated progress tracking to use userName instead of currentUser
function handleReportButtonClick() {
    const userName = localStorage.getItem('userName');
    if (!userName) {
        console.error('No user name found. Please refresh the page and enter your name.');
        return;
    }

    const progressData = JSON.parse(localStorage.getItem('progressData')) || {};
    const reportContainer = document.getElementById('report-container');
    if (reportContainer) {
        reportContainer.innerHTML = ''; // Clear existing content
        for (const [part, data] of Object.entries(progressData)) {
            const progressItem = document.createElement('div');
            progressItem.textContent = `Part ${part}: Time Spent - ${data.timeSpentInMs} ms`;
            reportContainer.appendChild(progressItem);
        }
    } else {
        console.error('Report container not found in the DOM.');
    }
}

function trackProgress(lesson, part, data) {
    const progressData = JSON.parse(localStorage.getItem('progressData')) || {};
    if (!progressData[lesson]) {
        progressData[lesson] = {};
    }
    progressData[lesson][part] = data;
    localStorage.setItem('progressData', JSON.stringify(progressData));
}

function generateProgressReport() {
    const progressData = JSON.parse(localStorage.getItem('progressData')) || {};
    const reportContainer = document.getElementById('report-container');
    if (reportContainer) {
        reportContainer.innerHTML = ''; // Clear existing content
        for (const [lesson, parts] of Object.entries(progressData)) {
            const lessonHeader = document.createElement('h2');
            lessonHeader.textContent = `Lesson ${lesson}`;
            reportContainer.appendChild(lessonHeader);

            for (const [part, data] of Object.entries(parts)) {
                const partDetails = document.createElement('div');
                partDetails.textContent = `Part ${part}: ${JSON.stringify(data)}`;
                reportContainer.appendChild(partDetails);
            }
        }
    } else {
        console.error('Report container not found in the DOM.');
    }
}

// Expose functions globally
window.initializeUserData = initializeUserData;
window.handleReportButtonClick = handleReportButtonClick;
window.trackProgress = trackProgress;
window.generateProgressReport = generateProgressReport;
