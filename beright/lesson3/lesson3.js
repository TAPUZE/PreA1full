// lesson3.js
// This file contains all data and initialization logic for Lesson 3 (Parts 1-4).
// Lesson 3 Focus: Special letter combinations, with vocabulary used contextually to demonstrate these combinations.

// --- Data for Lesson 3, Part 1 ---
// Focus: sh, ch, th. Vocabulary (shape, three) introduced only as examples of these sounds.
const lesson3Part1StudySteps = [
    {
        title: "חלק 1: צירופי העיצורים sh, ch, th",
        content: `<p class="mb-2 text-lg">ברוכים הבאים לשיעור 3! נכיר צירופי עיצורים נפוצים באנגלית היוצרים צלילים מיוחדים.</p>
                  <p class="mb-2 text-slate-700">בחלק זה נתמקד בשלושה צירופים: <strong>sh</strong>, <strong>ch</strong>, ו-<strong>th</strong>.</p>
                  <p class="text-slate-700">נראה דוגמאות למילים המכילות צירופים אלו, כולל כמה מילים בסיסיות שאולי תכירו.</p>`
    },
    {
        title: "הצירוף 'sh' (צליל שׁ)",
        content: `<div class="p-3 bg-sky-50 rounded-lg border border-sky-200">
                    <h5 class="font-semibold text-sky-800 mb-2">הצירוף <span class="ltr font-bold text-2xl">sh</span> ➔ צליל <strong class="text-sky-700 text-2xl">שׁ</strong></h5>
                    <p class="text-slate-700 mb-2">האותיות <strong>s</strong> ו-<strong>h</strong> יחד יוצרות צליל כמו <strong>שׁ</strong> בעברית (כמו במילה <strong>ש</strong>לום).</p>
                    <p class="text-slate-700 font-medium">דוגמאות:</p>
                    <ul class="list-disc list-inside rtl text-slate-700 space-y-1 ltr my-2">
                        <li><strong>sh</strong>e (היא)</li>
                        <li><strong>sh</strong>ip (אונייה)</li>
                        <li>fi<strong>sh</strong> (דג)</li>
                        <li>Engli<strong>sh</strong> (אנגלית)</li>
                        <li><strong>sh</strong>ape (צורה) - <span class="text-sm text-slate-500 rtl">(מילה זו מדגימה את צליל ה-sh)</span></li>
                    </ul>
                    <div class="study-interactive-check mt-3">
                        <p class="text-sm font-medium text-slate-700">באיזו מילה שומעים 'שׁ' (sh)?</p>
                        <button class="btn btn-secondary btn-sm text-xs mx-1 ltr" onclick="checkStudyStepAnswerDirect('sock', 'ship', 'l3p1_sh_feedback')">sock</button>
                        <button class="btn btn-secondary btn-sm text-xs mx-1 ltr" onclick="checkStudyStepAnswerDirect('ship', 'ship', 'l3p1_sh_feedback')">ship</button>
                        <div id="l3p1_sh_feedback" class="text-sm mt-1"></div>
                    </div>
                  </div>`
    },
    {
        title: "הצירוף 'ch' (צלילי צ׳ או ח)",
        content: `<div class="p-3 bg-lime-50 rounded-lg border border-lime-200">
                    <h5 class="font-semibold text-lime-800 mb-2">הצירוף <span class="ltr font-bold text-2xl">ch</span> ➔ צליל <strong class="text-lime-700 text-xl">צ׳</strong> או <strong class="text-lime-700 text-xl">ח</strong></h5>
                    <p class="text-slate-700 mb-1">1. צליל <strong class="text-lime-700">צ׳</strong> (כמו <strong>צ'</strong>יפס):</p>
                    <ul class="list-disc list-inside rtl text-sm text-slate-600 space-y-1 ltr my-1"><li><strong>ch</strong>air (כיסא)</li><li>tea<strong>ch</strong>er (מורה)</li><li><strong>ch</strong>ocolate (שוקולד)</li></ul>
                    <p class="text-slate-700 mb-1 mt-2">2. צליל <strong class="text-lime-700">ח</strong> (כמו ב<strong>ח</strong>נוכה):</p>
                    <ul class="list-disc list-inside rtl text-sm text-slate-600 space-y-1 ltr my-1"><li><strong>Ch</strong>anukah (חנוכה)</li><li>lo<strong>ch</strong> (אגם בסקוטלנד)</li></ul>
                    <p class="text-slate-700 mt-2 text-sm"><em>(הערה: לפעמים 'ch' נשמע כמו <strong>ק</strong>, למשל ב-'school'. נתמקד כאן בצלילים צ׳ ו-ח׳).</em></p>
                  </div>`
    },
    {
        title: "הצירוף 'th' (צלילי ת׳ או ד׳)",
        content: `<div class="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                    <h5 class="font-semibold text-indigo-800 mb-2">הצירוף <span class="ltr font-bold text-2xl">th</span> ➔ צליל <strong class="text-indigo-700 text-xl">ת׳</strong> (אטום) או <strong class="text-indigo-700 text-xl">ד׳</strong> (קולי)</h5>
                    <p class="text-slate-700 mb-1">כדי להפיק צלילים אלו, הלשון בדרך כלל בין השיניים.</p>
                    <p class="text-slate-700 mb-1">1. צליל <strong class="text-indigo-700">ת׳</strong> אטום (ללא קול בגרון):</p>
                    <ul class="list-disc list-inside rtl text-sm text-slate-600 space-y-1 ltr my-1">
                        <li><strong>th</strong>ree (שלוש) - <span class="text-sm text-slate-500 rtl">(מילה זו מדגימה את צליל ה-th)</span></li>
                        <li>mou<strong>th</strong> (פה)</li><li><strong>th</strong>anks (תודה)</li>
                    </ul>
                    <p class="text-slate-700 mb-1 mt-2">2. צליל <strong class="text-indigo-700">ד׳</strong> קולי (עם רטט בגרון):</p>
                    <ul class="list-disc list-inside rtl text-sm text-slate-600 space-y-1 ltr my-1"><li><strong>th</strong>is (זה)</li><li>mo<strong>th</strong>er (אמא)</li><li><strong>th</strong>ey (הם/הן)</li></ul>
                  </div>`
    },
    {
        title: "סיכום חלק 1",
        content: `<p class="mt-4 text-lg text-green-600 font-semibold">כל הכבוד!</p>
                  <p class="text-slate-700">בחלק זה הכרנו את הצירופים <strong class="ltr">'sh', 'ch', 'th'</strong> וראינו אותם במילים.</p>
                  <p class="text-slate-700 mt-1">בחלק הבא נלמד על "אות e שקטה" (Magic e) ונראה איך היא משפיעה על צלילי התנועות.</p>`
    }
];
const lesson3Part1Data = {
    title: 'שיעור 3, חלק 1: צירופי עיצורים sh, ch, th',
    sections: {
        study: { title: '📖 לימוד: צירופי עיצורים sh, ch, th', steps: lesson3Part1StudySteps },
        test: {
            title: '📝 מבחן: צירופי sh, ch, th',
            questions: [
                { id: "l3p1_tq1", q: "איזה צליל עושה <strong class='ltr'>'sh'</strong> במילה <span class='ltr'>'shape'</span>?", options: ["שׁ", "צ׳", "ס"], correct: "שׁ", type: "mcq" },
                { id: "l3p1_tq2", q: "איזה צליל נפוץ עושה <strong class='ltr'>'ch'</strong> במילה <span class='ltr'>'chair'</span>?", options: ["ח", "ק", "צ׳"], correct: "צ׳", type: "mcq" },
                { id: "l3p1_tq3", q: "במילה <span class='ltr'>three</span>, הצירוף <strong class='ltr'>'th'</strong> נשמע כמו:", options: ["ד׳ קולית", "ת׳ אטומה", "שׁ"], correct: "ת׳ אטומה", type: "mcq" },
                { id: "l3p1_tq4", q: "במילה <span class='ltr'>this</span>, הצירוף <strong class='ltr'>'th'</strong> נשמע כמו:", options: ["ד׳ קולית", "ת׳ אטומה", "שׁ"], correct: "ד׳ קולית", type: "mcq" },
                { id: "l3p1_tq5", q: "השלם את האותיות החסרות במילה <span class='ltr'>Engli__</span> (אנגלית)", correct: "sh", type: "fill_single", placeholder: "sh/ch/th" },
                // Corrected the unescaped quote in the following question:
                { id: "l3p1_tq6", q: "מהי המילה האנגלית ל\"כוכב\"?", options: ["<span class='ltr'>circle</span>", "<span class='ltr'>square</span>", "<span class='ltr'>star</span>"], correct: "<span class='ltr'>star</span>", type: "mcq" }

            ],
            instructions: "ענה על השאלות הבאות."
        },
        practice: {
            title: '💪 תרגול: צירופי sh, ch, th',
            activities: [
                { id: "l3p1_pa1", type: "fill_in_blank", q: "המילה 'אונייה' באנגלית היא <span class='ltr'>__ip</span>. מהן האותיות החסרות?", correct: "sh", placeholder: "sh/ch/th" },
                { id: "l3p1_pa2", q: "במילה <span class='ltr'>Chanukah</span>, הצירוף <strong class='ltr'>'ch'</strong> נשמע כמו:", options: ["צ׳", "ח", "ק"], correct: "ח", type: "mcq" },
                { id: "l3p1_pa3", type: "drag_drop_letters_rule", q: "השלם את המילה <span class='ltr'>fi__</span> (דג) על ידי גרירת האותיות הנכונות:", word_structure: ["f", "i", "_", "_"], draggable_options: ["s", "h", "t"], correct_sequence: ["s", "h"], full_correct_word: "fish" }
            ],
            instructions: "תרגל את מה שלמדת."
        }
    }
};

// --- Data for Lesson 3, Part 2 ---
// Focus: Silent 'e' / Magic 'e'; Vocabulary introduced only if it clearly demonstrates the rule.
const lesson3Part2StudySteps = [ 
    { 
        title: "חלק 2: אות e שקטה (Magic e)", 
        content: `<p class="mb-2 text-lg">בחלק זה נלמד על "Magic e" - האות <strong>e</strong> בסוף מילה שלרוב שקטה, אך משנה את צליל התנועה שלפניה לצליל ארוך (כשם האות).</p>
                  <p class="text-slate-700">נראה איך כלל זה עוזר לנו לקרוא מילים חדשות.</p>` 
    },
    {
        title: "Magic e עם A: a_e ➔ /eɪ/ (כמו בשם האות A)",
        content: `<div class="p-3 bg-rose-50 rounded-lg border border-rose-200">
                    <h5 class="font-semibold text-rose-800 mb-2">הקסם של <span class="ltr font-bold">a_e</span> ➔ צליל <strong class="text-rose-700">אֵיי (long A)</strong></h5>
                    <p class="text-slate-700 mb-2">כשהמילה מסתיימת ב- <span class="ltr"><strong>a</strong>-עיצור-<strong>e</strong></span>, ה-<strong>a</strong> נשמעת כמו שם האות A.</p>
                    <p class="text-slate-700 font-medium">דוגמאות:</p>
                    <ul class="list-disc list-inside rtl text-slate-700 space-y-1 ltr my-2">
                        <li>c<span class="text-rose-700">a</span>k<span class="text-rose-700">e</span> (עוגה)</li>
                        <li>n<span class="text-rose-700">a</span>m<span class="text-rose-700">e</span> (שם)</li>
                        <li>sh<span class="text-rose-700">a</span>p<span class="text-rose-700">e</span> (צורה - מהמילה שלמדנו בחלק 1!)</li>
                        <li>g<span class="text-rose-700">a</span>m<span class="text-rose-700">e</span> (משחק)</li>
                        <li>or<span class="text-rose-700">a</span>ng<span class="text-rose-700">e</span> (כתום - <span class="text-sm text-slate-500 rtl">צבע זה מדגים את הכלל</span>)</li>
                    </ul>
                  </div>`
    },
    {
        title: "Magic e עם I: i_e ➔ /aɪ/ (כמו בשם האות I)",
        content: `<div class="p-3 bg-cyan-50 rounded-lg border border-cyan-200">
                    <h5 class="font-semibold text-cyan-800 mb-2">הקסם של <span class="ltr font-bold">i_e</span> ➔ צליל <strong class="text-cyan-700">אַיי (long I)</strong></h5>
                    <p class="text-slate-700 mb-2">כשהמילה מסתיימת ב- <span class="ltr"><strong>i</strong>-עיצור-<strong>e</strong></span>, ה-<strong>i</strong> נשמעת כמו שם האות I.</p>
                    <p class="text-slate-700 font-medium">דוגמאות:</p>
                    <ul class="list-disc list-inside rtl text-slate-700 space-y-1 ltr my-2">
                        <li>l<span class="text-cyan-700">i</span>k<span class="text-cyan-700">e</span> (כמו, לאהוב)</li>
                        <li>t<span class="text-cyan-700">i</span>m<span class="text-cyan-700">e</span> (זמן)</li>
                        <li>wh<span class="text-cyan-700">i</span>t<span class="text-cyan-700">e</span> (לבן - <span class="text-sm text-slate-500 rtl">צבע זה מדגים את הכלל</span>)</li>
                        <li>n<span class="text-cyan-700">i</span>n<span class="text-cyan-700">e</span> (תשע - <span class="text-sm text-slate-500 rtl">מספר זה מדגים את הכלל</span>)</li>
                        <li>f<span class="text-cyan-700">i</span>v<span class="text-cyan-700">e</span> (חמש - מהמילה שלמדנו בחלק 1!)</li>
                    </ul>
                  </div>`
    },
    {
        title: "Magic e: o_e ➔ /oʊ/ (כמו בשם האות O)",
        content: `<div class="p-3 bg-violet-50 rounded-lg border border-violet-200">
                    <h5 class="font-semibold text-violet-800 mb-2">הקסם של <span class="ltr font-bold">o_e</span> ➔ צליל <strong class="text-violet-700">אוֹ (long O)</strong></h5>
                    <p class="text-slate-700 mb-2">כשהמילה מסתיימת ב- <span class="ltr"><strong>o</strong>-עיצור-<strong>e</strong></span>, ה-<strong>o</strong> נשמעת כמו שם האות O.</p>
                    <p class="text-slate-700 font-medium">דוגמאות:</p>
                    <ul class="list-disc list-inside rtl text-slate-700 space-y-1 ltr my-2">
                        <li>h<span class="text-violet-700">o</span>m<span class="text-violet-700">e</span> (בית)</li>
                        <li>n<span class="text-violet-700">o</span>t<span class="text-violet-700">e</span> (הערה, פתק)</li>
                        <li>r<span class="text-violet-700">o</span>s<span class="text-violet-700">e</span> (ורד, צבע ורוד - <span class="text-sm text-slate-500 rtl">צבע זה מדגים את הכלל</span>)</li>
                    </ul>
                  </div>`
    },
    {
        title: "Magic e: u_e ➔ /juː/ או /uː/ (כמו בשם האות U)",
        content: `<div class="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <h5 class="font-semibold text-blue-800 mb-2">הקסם של <span class="ltr font-bold">u_e</span> ➔ צליל <strong class="text-blue-700">יוּ או אוּ (long U)</strong></h5>
                    <p class="text-slate-700 mb-2">כשהמילה מסתיימת ב- <span class="ltr"><strong>u</strong>-עיצור-<strong>e</strong></span>, ה-<strong>u</strong> נשמעת כמו שם האות U.</p>
                    <p class="text-slate-700 font-medium">דוגמאות:</p>
                    <ul class="list-disc list-inside rtl text-slate-700 space-y-1 ltr my-2">
                        <li>c<span class="text-blue-700">u</span>t<span class="text-blue-700">e</span> (חמוד)</li>
                        <li>J<span class="text-blue-700">u</span>n<span class="text-blue-700">e</span> (יוני - חודש)</li>
                        <li>bl<span class="text-blue-700">u</span><span class="text-blue-700">e</span> (כחול - <span class="text-sm text-slate-500 rtl">צבע זה מדגים את הכלל</span>)</li>
                    </ul>
                  </div>`
    },
    { 
        title: "סיכום חלק 2", 
        content: `<p class="mt-4 text-lg text-green-600 font-semibold">נהדר!</p>
                  <p class="text-slate-700">למדנו על "Magic e" ואיך היא משפיעה על צלילי התנועות <span class="ltr">a, i, o, u</span>.</p>
                  <p class="text-slate-700 mt-1">בחלק הבא נכיר צירופי אותיות נוספים, כולל אותיות כפולות ואותיות שקטות.</p>`
    }
];
const lesson3Part2Data = {
    title: "שיעור 3, חלק 2: אות e שקטה (Magic e)",
    sections: {
        study: { title: "📖 לימוד: Magic e והשפעתה על תנועות", steps: lesson3Part2StudySteps },
        test: { 
            title: "📝 מבחן: Magic e", 
            questions: [
                { id: "l3p2_tq1", q: "איך ה-Magic e משפיעה על האות <span class='ltr'>a</span> במילה <span class='ltr'>name</span>?", options: ["הופכת אותה לקצרה", "הופכת אותה לארוכה (כמו שם האות)", "לא משפיעה"], correct: "הופכת אותה לארוכה (כמו שם האות)", type: "mcq"},
                { id: "l3p2_tq2", q: "איזו מילה מהבאות משתמשת בכלל ה-Magic e עם <span class='ltr'>i_e</span>?", options: ["<span class='ltr'>sit</span>", "<span class='ltr'>fin</span>", "<span class='ltr'>white</span>"], correct: "<span class='ltr'>white</span>", type: "mcq"},
                { id: "l3p2_tq3", q: "השלם את המילה: <span class='ltr'>c_ke</span> (עוגה)", correct: "a", type: "fill_single", placeholder: "הקלד תנועה"}
            ] 
        },
        practice: { 
            title: "💪 תרגול: Magic e", 
            activities: [
                {
                    id: "l3p2_pa1", 
                    type: "drag_drop_letters_rule",
                    q: "השלם את האותיות החסרות במילה <span class='ltr'>(blue)</span> כדי להדגים את כלל ה-Magic e, באמצעות גרירת האותיות למקומות הנכונים שיוצגו:", 
                    word_structure: ["bl", "_", "_"], 
                    draggable_options: ["u", "e", "a", "i", "o"], 
                    correct_sequence: ["u", "e"], 
                    full_correct_word: "blue" 
                },
                {
                    id: "l3p2_pa2",
                    type: "drag_drop_letters_rule",
                    q: "Arrange the letters to form a word with Magic e: <span class='ltr'>_ak_</span>",
                    word_structure: ["_", "a", "k", "_"],
                    draggable_options: ["b", "e", "t", "m"],
                    correct_sequence: ["b", "e"],
                    full_correct_word: "bake"
                }
            ] 
        }
    }
};

// --- Data for Lesson 3, Part 3 ---
// Focus: Double Letters (ee, oo, ll, ss), ph, kn, wr. Vocabulary introduced only if it clearly demonstrates the rule.
const lesson3Part3StudySteps = [ 
    { 
        title: "חלק 3: אותיות כפולות וצירופים עם אותיות שקטות", 
        content: `<p class="mb-2 text-lg">בחלק זה נלמד על צלילים של אותיות כפולות וצירופים שבהם אחת האותיות שקטה.</p>
                  <p class="text-slate-700">נכיר את: <strong>ee</strong>, <strong>oo</strong>, <strong>ll</strong>, <strong>ss</strong>, <strong>ph</strong>, <strong>kn</strong>, <strong>wr</strong>.</p>`
    },
    {
        title: "אותיות תנועה כפולות: 'ee' ו-'oo'",
        content: `<div class="p-3 bg-green-50 rounded-lg border border-green-200 mb-3">
                    <h5 class="font-semibold text-green-800 mb-2">הצירוף <span class="ltr font-bold text-2xl">ee</span> ➔ צליל <strong class="text-green-700 text-xl">אִי (long E)</strong></h5>
                    <p class="text-slate-700 mb-2">הצירוף <strong>ee</strong> בדרך כלל נשמע כמו חיריק ארוך.</p>
                    <ul class="list-disc list-inside rtl text-slate-700 space-y-1 ltr my-2">
                        <li>s<span class="text-green-700">ee</span> (לראות)</li><li>thr<span class="text-green-700">ee</span> (שלוש - מחלק 1!)</li>
                        <li>gr<span class="text-green-700">ee</span>n (ירוק - <span class="text-sm text-slate-500 rtl">צבע זה מדגים את הכלל</span>)</li>
                        <li>tr<span class="text-green-700">ee</span> (עץ)</li>
                    </ul>
                  </div>
                  <div class="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <h5 class="font-semibold text-purple-800 mb-2">הצירוף <span class="ltr font-bold text-2xl">oo</span> ➔ צליל <strong class="text-purple-700 text-xl">אוּ (long U)</strong> או <strong class="text-purple-700 text-xl">אֻ (short U)</strong></h5>
                    <p class="text-slate-700 mb-2">לצירוף <strong>oo</strong> יש שני צלילים נפוצים:</p>
                    <ul class="list-disc list-inside rtl text-slate-700 space-y-1 ltr my-2">
                        <li>צליל <strong>אוּ</strong> ארוך: m<span class="text-purple-700">oo</span>n (ירח), f<span class="text-purple-700">oo</span>d (אוכל)</li>
                        <li>צליל <strong>אֻ</strong> קצר: b<span class="text-purple-700">oo</span>k (ספר), l<span class="text-purple-700">oo</span>k (להסתכל)</li>
                    </ul>
                  </div>`
    },
    {
        title: "אותיות עיצור כפולות: 'll' ו-'ss'",
        content: `<div class="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                     <h5 class="font-semibold text-yellow-800 mb-2">הצירופים <span class="ltr font-bold text-2xl">ll</span> ו-<span class="ltr font-bold text-2xl">ss</span></h5>
                     <p class="text-slate-700 mb-2">כאשר יש אות עיצור כפולה כמו <strong>ll</strong> או <strong>ss</strong>, בדרך כלל שומעים את העיצור פעם אחת.</p>
                     <ul class="list-disc list-inside rtl text-slate-700 space-y-1 ltr my-2">
                        <li>be<span class="text-yellow-700">ll</span> (פעמון)</li><li>we<span class="text-yellow-700">ll</span> (באר, היטב)</li>
                        <li>gla<span class="text-yellow-700">ss</span> (כוס, זכוכית)</li><li>mi<span class="text-yellow-700">ss</span> (להתגעגע, לפספס)</li>
                        <li>ye<span class="text-yellow-700">ll</span>ow (צהוב - <span class="text-sm text-slate-500 rtl">צבע זה מדגים את הכלל</span>)</li>
                     </ul>
                   </div>`
    },
    {
        title: "צירופים עם אותיות שקטות: ph, kn, wr",
        content: `<div class="p-3 bg-gray-100 rounded-lg border border-gray-300">
                    <h5 class="font-semibold text-gray-800 mb-2">צירופים עם אותיות שקטות</h5>
                    <ul class="list-disc list-inside rtl text-slate-700 space-y-2 my-2">
                        <li><span class="ltr font-bold text-teal-700">ph</span> ➔ נשמע כמו <strong>פ</strong> (למשל: <span class="ltr"><strong>ph</strong>one</span> - טלפון)</li>
                        <li><span class="ltr font-bold text-neutral-700">kn</span> ➔ ה-k שקטה, נשמע רק <strong>נ</strong> (למשל: <span class="ltr"><strong>kn</strong>ee</span> - ברך)</li>
                        <li><span class="ltr font-bold text-red-700">wr</span> ➔ ה-w שקטה, נשמע רק <strong>ר</strong> (למשל: <span class="ltr"><strong>wr</strong>ite</span> - לכתוב)</li>
                    </ul>
                  </div>`
    },
    { title: "סיכום חלק 3", content: "<p>מעולה! בחלק הבא נסכם את כל הצירופים שלמדנו בשיעור 3.</p>" }
];
const lesson3Part3Data = {
    title: "שיעור 3, חלק 3: צירופי אותיות כפולות",
    sections: {
        study: { title: "📖 לימוד: אותיות כפולות", steps: lesson3Part3StudySteps },
        test: { 
            title: "📝 מבחן: אותיות כפולות", 
            questions: [
                { id: "l3p3_tq1", q: "איזו מילה מכילה אותיות כפולות?", options: ["<span class='ltr'>apple</span>", "<span class='ltr'>cat</span>", "<span class='ltr'>dog</span>"], correct: "<span class='ltr'>apple</span>", type: "mcq" },
                { id: "l3p3_tq2", q: "השלם את המילה: <span class='ltr'>ba__</span> (כדור)", correct: "ll", type: "fill_single", placeholder: "הקלד אותיות" }
            ]
        },
        practice: { 
            title: "💪 תרגול: אותיות כפולות", 
            activities: [
                { id: "l3p3_pa1", type: "drag_drop_letters_rule", q: "השלם את המילה <span class='ltr'>ba__</span> (כדור) על ידי גרירת האותיות הנכונות:", word_structure: ["b", "a", "_", "_"], draggable_options: ["l", "m", "n"], correct_sequence: ["l", "l"], full_correct_word: "ball" }
            ]
        }
    }
};

// --- Data for Lesson 3, Part 4 ---
// Focus: Combination & Review of all Lesson 3 rules; Vocabulary used should be from examples in Parts 1-3.
const lesson3Part4StudySteps = [ 
    { 
        title: "חלק 4: סיכום שיעור 3 ותרגול משולב", 
        content: `<p class="mb-2 text-lg">בחלק זה נסכם את כל צירופי האותיות והכללים שלמדנו בשיעור 3.</p>
                  <h6 class="font-semibold text-blue-700 mt-3 mb-1">תזכורת צירופים וכללים:</h6>
                  <ul class="list-disc list-inside rtl text-slate-600 space-y-1 text-sm">
                      <li><strong class="ltr text-base">sh</strong> ➔ <strong class="text-sky-700">שׁ</strong> (e.g., shape, fish)</li>
                      <li><strong class="ltr text-base">ch</strong> ➔ <strong class="text-lime-700">צ׳</strong> (e.g., chair) או <strong class="text-lime-700">ח</strong> (e.g., Chanukah)</li>
                      <li><strong class="ltr text-base">th</strong> ➔ <strong class="text-indigo-700">ת׳</strong> אטומה (e.g., three) או <strong class="text-indigo-700">ד׳</strong> קולית (e.g., this)</li>
                      <li><strong>Magic e</strong>: <span class="ltr">a_e</span> (e.g., cake, shape), <span class="ltr">i_e</span> (e.g., white, five), <span class="ltr">o_e</span> (e.g., rose, home), <span class="ltr">u_e</span> (e.g., blue, June)</li>
                      <li><strong class="ltr text-base">ee</strong> ➔ <strong class="text-green-700">אִי</strong> ארוך (e.g., green, see)</li>
                      <li><strong class="ltr text-base">oo</strong> ➔ <strong class="text-purple-700">אוּ</strong> (e.g., moon) או <strong class="text-purple-700">אֻ</strong> (e.g., book)</li>
                      <li><strong class="ltr text-base">ll, ss</strong> ➔ עיצור יחיד (e.g., bell, yellow, miss)</li>
                      <li><strong class="ltr text-base">ph</strong> ➔ <strong class="text-teal-700">פ</strong> (e.g., phone)</li>
                      <li><strong class="ltr text-base">kn</strong> ➔ <strong class="text-gray-700">נ</strong> (ה-k שקטה, e.g., knee)</li>
                      <li><strong class="ltr text-base">wr</strong> ➔ <strong class="text-gray-700">ר</strong> (ה-w שקטה, e.g., write)</li>
                  </ul>
                  <p class="text-slate-700 mt-2">נתרגל קריאת מילים ומשפטים קצרים המשלבים את כל אלו ואת המילים לדוגמה שלמדנו.</p>`
    },
    {
        title: "תרגול קריאה משולב",
        content: `<p class="text-slate-700 mb-2">קראו את המשפטים הבאים בקול. שימו לב לצירופים ולמילים שלמדנו:</p>
                  <ul class="list-decimal list-inside rtl text-slate-700 space-y-2 text-lg">
                      <li><span class="ltr">The <span class="text-sky-600">sh</span>ape of the <span class="text-indigo-700">th</span>ree is a <span class="text-emerald-600">star</span>.</span></li>
                      <li><span class="ltr">My tea<span class="text-lime-600">ch</span>er has a <span class="text-cyan-600">white</span> <span class="text-teal-600">ph</span>one.</span></li>
                      <li><span class="ltr"><span class="text-indigo-600">Th</span>is gr<span class="text-green-700">ee</span>n b<span class="text-purple-600">oo</span>k is for <span class="text-gray-700">kn</span>owledge.</span></li>
                      <li><span class="ltr">I <span class="text-red-700">wr</span>ite with a <span class="text-yellow-600">yellow</span> pen on the <span class="text-rose-600">note</span>.</span></li>
                  </ul>`
    },
    { title: "סיום שיעור 3", content: "<p class='mt-4 text-xl text-green-600 font-semibold'>כל הכבוד! סיימתם את שיעור 3!</p><p class='text-slate-700'>למדתם על צירופי אותיות חשובים וראיתם איך הם באים לידי ביטוי במילים. המשיכו לתרגל!</p>" }
];
const lesson3Part4Data = {
    title: 'שיעור 3, חלק 4: סיכום ותרגול משולב של צירופי אותיות',
    sections: {
        study: { title: '📖 לימוד: סיכום שיעור 3 ותרגול קריאה', steps: lesson3Part4StudySteps },
        test: { 
            title: '📝 מבחן מסכם: שיעור 3 - צירופי אותיות', 
            questions: [
                { id: "l3p4_tq1", q: "איזה צירוף יוצר צליל <strong class='ltr'>/f/</strong> במילה <span class='ltr'>elephant</span>?", options: ["th", "sh", "ph"], correct: "ph", type: "mcq"},
                { id: "l3p4_tq2", q: "במילה <span class='ltr'>write</span>, איזו אות שקטה?", options: ["w", "r", "e"], correct: "w", type: "mcq"},
                { id: "l3p4_tq3", q: "הצבע <span class='ltr'>green</span> משתמש באיזה צירוף תנועות?", options: ["oo", "ea", "ee"], correct: "ee", type: "mcq"}
            ] 
        },
        practice: { 
            title: '💪 תרגול מסכם: שיעור 3 - צירופי אותיות', 
            activities: [
                {id: "l3p4_pa1", type: "fill_in_blank", q: "A <span class='ltr'>___</span> (ברך) has a silent k.", correct: "knee", placeholder: "הקלד מילה"},
                {id: "l3p4_pa2", q: "איזו מילה מהבאות מכילה 'Magic e'?", options: ["<span class='ltr'>book</span>", "<span class='ltr'>shape</span>", "<span class='ltr'>fish</span>"], correct: "<span class='ltr'>shape</span>", type: "mcq"}
            ] 
        }
    }
};

// --- Master list of all part titles for Lesson 3 and other known lessons ---
const allLessonPartsMasterData_L3 = {
    // Lesson 3 Parts
    "L3P1": { title: lesson3Part1Data.title },
    "L3P2": { title: lesson3Part2Data.title },
    "L3P3": { title: lesson3Part3Data.title },
    "L3P4": { title: lesson3Part4Data.title },

    // Lesson 2 Parts (example for global context)
    "L2P1": { title: "שיעור 2, חלק 1: הכרת 5 צלילי התנועות הבסיסיים" },
    "L2P2": { title: "שיעור 2, חלק 2: חיזוק צלילי התנועות וקריאת מילים מוכרות" },
    "L2P3": { title: "שיעור 2, חלק 3: הבחנה בין צלילי תנועות וקריאה ממוקדת" },
    "L2P4": { title: "שיעור 2, חלק 4: סיכום ותרגול קריאה (משפטים קצרים)" },

    // Lesson 4 Parts (example for global context)
    "L4P1": { title: 'חלק 1: יסודות - "To Be" בהווה (אני, אתה, הוא/היא/זה)' },
    "L4P2": { title: 'חלק 2: רבים ושלילה (We, They, Not)' },
    "L4P3": { title: 'חלק 3: שאלות (Are you? Where is he?)' },
    "L4P4": { title: 'חלק 4: "To Be" בעבר (Was, Were)' }
};

// --- Main Initialization Function for Lesson 3 Parts ---
function loadLesson3Part(partIdentifier) {
    let partDataToLoad;
    let uniquePartId;

    switch (partIdentifier) {
        case 1: case "L3P1":
            partDataToLoad = lesson3Part1Data;
            uniquePartId = "L3P1";
            break;
        case 2: case "L3P2":
            partDataToLoad = lesson3Part2Data;
            uniquePartId = "L3P2";
            break;
        case 3: case "L3P3":
            partDataToLoad = lesson3Part3Data;
            uniquePartId = "L3P3";
            break;
        case 4: case "L3P4":
            partDataToLoad = lesson3Part4Data;
            uniquePartId = "L3P4";
            break;
        default:
            console.error(`Unknown part identifier for Lesson 3: ${partIdentifier}`);
            const contentArea = document.getElementById('content-area');
            if (contentArea) {
                contentArea.innerHTML = `<p>שגיאה: חלק שיעור לא ידוע (${partIdentifier}).</p>`;
            }
            return;
    }

    if (typeof initializeCurrentPage === 'function') {
        console.log(`Initializing Lesson 3, Part identified as: ${uniquePartId}`);
        initializeCurrentPage('part', uniquePartId, partDataToLoad, allLessonPartsMasterData_L3);
    } else {
        console.error("Main script (initializeCurrentPage function) not found. Ensure script.js is loaded before lesson3.js.");
        const contentArea = document.getElementById('content-area');
        if (contentArea) {
            contentArea.innerHTML = "<p>שגיאה קריטית בטעינת השיעור. פונקציית אתחול ראשית חסרה.</p>";
        }
    }
}
