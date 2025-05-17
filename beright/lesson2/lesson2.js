// lesson2.js
// This file contains all data and initialization logic for Lesson 2 (Parts 1-4).

// --- Data for Lesson 2, Part 1 ---
const lesson2Part1StudySteps = [
    {
        title: "חלק 1: הכרת 5 צלילי התנועות הבסיסיים",
        content: `<p class="mb-2 text-lg">שלום! בשיעור 1 למדנו את כל אותיות האלפבית. היום, בשיעור 2, נתמקד בחמש אותיות התנועה העיקריות (Vowels): <span class="ltr text-xl font-bold text-red-500">A, E, I, O, U</span>.</p>
                  <p class="mb-2 text-slate-700">לכל אות תנועה יש מספר צלילים אפשריים, אך בחלק זה נתמקד בחמישה צלילים בסיסיים וברורים, ונקביל אותם לתנועות המוכרות לנו מהשפה העברית. הכרת צלילים אלו תעזור לנו להתחיל לזהות אותם במילים ושמות באנגלית.</p>
                  <p class="text-slate-700 font-semibold">אלו חמשת הצלילים הבסיסיים שנלמד בחלק זה:</p>
                  <table class="w-full my-3 border-collapse border border-slate-300 text-slate-700 text-sm md:text-base">
                    <thead>
                      <tr class="bg-sky-100">
                        <th class="border border-slate-300 p-2 rtl">אות תנועה (אנגלית)</th>
                        <th class="border border-slate-300 p-2 rtl">הצליל שנלמד</th>
                        <th class="border border-slate-300 p-2 rtl">מקבילה בעברית</th>
                        <th class="border border-slate-300 p-2 rtl">דוגמה למילה בעברית</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td class="border border-slate-300 p-2 text-center ltr font-bold text-blue-600">A a</td><td class="border border-slate-300 p-2 text-center font-semibold">ah (אַ)</td><td class="border border-slate-300 p-2 text-center">פתח</td><td class="border border-slate-300 p-2 text-center"><strong>אַ</strong>רְנָב</td></tr>
                      <tr><td class="border border-slate-300 p-2 text-center ltr font-bold text-blue-600">E e</td><td class="border border-slate-300 p-2 text-center font-semibold">eh (אֶ)</td><td class="border border-slate-300 p-2 text-center">סגול</td><td class="border border-slate-300 p-2 text-center"><strong>אֶ</strong>בֶן</td></tr>
                      <tr><td class="border border-slate-300 p-2 text-center ltr font-bold text-blue-600">I i</td><td class="border border-slate-300 p-2 text-center font-semibold">ee (אִי)</td><td class="border border-slate-300 p-2 text-center">חיריק</td><td class="border border-slate-300 p-2 text-center"><strong>אִי</strong>ש</td></tr>
                      <tr><td class="border border-slate-300 p-2 text-center ltr font-bold text-blue-600">O o</td><td class="border border-slate-300 p-2 text-center font-semibold">oh (אוֹ)</td><td class="border border-slate-300 p-2 text-center">חולם</td><td class="border border-slate-300 p-2 text-center"><strong>אוֹ</strong>ר</td></tr>
                      <tr><td class="border border-slate-300 p-2 text-center ltr font-bold text-blue-600">U u</td><td class="border border-slate-300 p-2 text-center font-semibold">oo (אוּ)</td><td class="border border-slate-300 p-2 text-center">שורוק</td><td class="border border-slate-300 p-2 text-center"><strong>אוּ</strong>לָם</td></tr>
                    </tbody>
                  </table>
                  <p class="text-slate-700">בשלבים הבאים נראה דוגמאות לכל צליל באמצעות שמות ומילים מוכרות, ונתרגל את זיהוי האות והצליל שלה.</p>`
    },
    {
        title: "סיום לימוד חלק 1 (שיעור 2)",
        content: `<p class="mt-4 text-lg text-green-600 font-semibold">כל הכבוד! סיימת ללמוד על 5 התנועות הבסיסיות.</p>
                  <p class="text-slate-700">כעת, נעבור לחלק 2 לחיזוק ותרגול נוסף, או שתוכל לעבור למבחן.</p>`
    }
];
const lesson2Part1Data = {
    title: 'שיעור 2, חלק 1: הכרת 5 צלילי התנועות הבסיסיים',
    sections: {
        study: { title: '📖 לימוד: 5 צלילי תנועות בסיסיים', steps: lesson2Part1StudySteps },
        test: {
            title: '📝 מבחן: זיהוי 5 צלילי תנועות בסיסיים',
            questions: [
                { id: "l2p1_tq1", q: "איזה צליל עברי דומה לצליל של האות <strong class='ltr'>A</strong> כפי שלמדנו (לדוגמה, במילה <strong class='ltr'>Adam</strong>)?", options: ["חיריק (אִי)", "פתח (אַ)", "חולם (אוֹ)"], correct: "פתח (אַ)", type: "mcq" },
                { id: "l2p1_tq2", q: "הצליל של האות <strong class='ltr'>E</strong> כפי שלמדנו (לדוגמה, במילה <strong class='ltr'>Ben</strong>) דומה לצליל העברי:", options: ["שורוק (אוּ)", "סגול (אֶ)", "פתח (אַ)"], correct: "סגול (אֶ)", type: "mcq" },
                { id: "l2p1_tq3", q: "במילה <strong class='ltr'>D<u>i</u>na</strong>, איזה צליל אנגלי עושה האות <strong class='ltr'>i</strong> (כפי שלמדנו)?", options: ["ah (אַ)", "ee (אִי)", "eh (אֶ)"], correct: "ee (אִי)", type: "mcq" },
                { id: "l2p1_tq4", q: "השלם את אות התנועה החסרה בשם <span class='ltr'>R_n</span> (רון) כך שיישמע צליל <strong class='text-indigo-700'>אוֹ (oh)</strong>:", correct: "o", type: "fill_single", placeholder: "הקלד אות קטנה" },
                { id: "l2p1_tq5", q: "איזו מילה מכילה את הצליל <strong class='text-purple-700'>אוּ (oo)</strong> של U (כמו במילה <span class='ltr'>Ruth</span>)?", options: ["<span class='ltr'>cup</span>", "<span class='ltr'>bus</span>", "<span class='ltr'>flute</span>"], correct: "<span class='ltr'>flute</span>", type: "mcq" }
            ],
            instructions: "ענה על השאלות הבאות בנושא 5 צלילי התנועות הבסיסיים."
        },
        practice: {
            title: '💪 תרגול: 5 צלילי תנועות בסיסיים',
            activities: [
                { id: "l2p1_pa1", type: "fill_in_blank", q: "בשם <span class='ltr'>Sara</span>, האות הראשונה <strong class='ltr'>A</strong> נשמעת כמו התנועה העברית __.", correct: "פתח", placeholder: "פתח/סגול/חיריק וכו'" },
                { id: "l2p1_pa2", q: "בחר את המילה שבה האות <strong class='ltr'>E</strong> נשמעת כמו סגול (אֶ):", options: ["<span class='ltr'>see</span>", "<span class='ltr'>Netta</span>", "<span class='ltr'>name</span>"], correct: "<span class='ltr'>Netta</span>", type: "mcq" },
                { id: "l2p1_pa3", type: "fill_in_blank", q: "השלם את אות התנועה החסרה בשם <span class='ltr'>T_m</span> (תום) כך שיישמע צליל חולם (אוֹ):", correct: "o", placeholder: "a/e/i/o/u" }
            ],
            instructions: "תרגל את זיהוי 5 צלילי התנועות הבסיסיים במילים ושמות."
        }
    }
};

// --- Data for Lesson 2, Part 2 ---
const lesson2Part2StudySteps = [
    {
        title: "חלק 2: חיזוק צלילי התנועות וקריאת מילים מוכרות",
        content: `<p class="mb-2 text-lg">בחלק זה, נחזק את מה שלמדנו בחלק 1 על חמשת צלילי התנועות הבסיסיים. נתבונן בדוגמאות נוספות של שמות ומילים מוכרות ונשים לב כיצד אותה אות תנועה יכולה להופיע במילים שונות אך לשמור על הצליל הבסיסי שלמדנו.</p>
                  <p class="text-slate-700">המטרה היא לפתח זיהוי מהיר של צלילים אלו במילים שתפגשו.</p>`
    },
    {
        title: "עוד דוגמאות לצליל A (פתח - אַ)",
        content: `<div class="p-3 bg-amber-100 rounded-lg border border-amber-300">
                    <h5 class="font-semibold text-amber-800 mb-2">עוד מילים עם <span class="ltr font-bold">A</span> שנשמעת <strong class="text-amber-700">אַ (ah)</strong>:</h5>
                    <ul class="list-disc list-inside rtl text-slate-700 space-y-1">
                        <li>אנה - <span class="ltr font-semibold"><u>A</u>nn<u>a</u></span></li>
                        <li>דנה - <span class="ltr font-semibold">D<u>a</u>n<u>a</u></span></li>
                        <li>גל - <span class="ltr font-semibold">G<u>a</u>l</span></li>
                        <li>מאמא - <span class="ltr font-semibold">m<u>a</u>m<u>a</u></span></li>
                        <li>פאפא - <span class="ltr font-semibold">p<u>a</u>p<u>a</u></span></li>
                        <li>אמנות - <span class="ltr font-semibold"><u>a</u>rt</span></li>
                        <li>כוכב - <span class="ltr font-semibold">st<u>a</u>r</span></li>
                        <li>מפה - <span class="ltr font-semibold">m<u>a</u>p</span></li>
                    </ul>
                    <div class="study-interactive-check mt-3">
                        <p class="text-sm font-medium text-slate-700">באיזו מילה האות <strong class="ltr">A</strong> נשמעת כמו פתח (אַ)?</p>
                        <button class="btn btn-secondary btn-sm text-xs mx-1 ltr" onclick="checkStudyStepAnswerDirect('game', 'star', 'l2p2_sA_feedback')">game</button>
                        <button class="btn btn-secondary btn-sm text-xs mx-1 ltr" onclick="checkStudyStepAnswerDirect('star', 'star', 'l2p2_sA_feedback')">star</button>
                        <div id="l2p2_sA_feedback" class="text-sm mt-1"></div>
                    </div></div>`
    },
    {
        title: "עוד דוגמאות לצליל E (סגול - אֶ)",
        content: `<div class="p-3 bg-sky-100 rounded-lg border border-sky-300">
                    <h5 class="font-semibold text-sky-800 mb-2">עוד מילים עם <span class="ltr font-bold">E</span> שנשמעת <strong class="text-sky-700">אֶ (eh)</strong>:</h5>
                    <ul class="list-disc list-inside rtl text-slate-700 space-y-1">
                        <li>אלה - <span class="ltr font-semibold"><u>E</u>ll<u>a</u></span></li>
                        <li>עשר - <span class="ltr font-semibold">t<u>e</u>n</span></li>
                        <li>מיטה - <span class="ltr font-semibold">b<u>e</u>d</span></li>
                        <li>אמריקה - <span class="ltr font-semibold">Am<u>e</u>rica</span> (ה-e השנייה)</li>
                        <li>טסט - <span class="ltr font-semibold">t<u>e</u>st</span></li>
                        <li>כן - <span class="ltr font-semibold">y<u>e</u>s</span></li>
                    </ul>
                    <div class="study-interactive-check mt-3">
                        <p class="text-sm font-medium text-slate-700">האם במילה <span class="ltr">see</span> האות <strong class="ltr">E</strong> נשמעת כמו סגול (אֶ) שלמדנו?</p>
                        <button class="btn btn-secondary btn-sm text-xs mx-1" onclick="checkStudyStepAnswerDirect('כן', 'לא', 'l2p2_sE_feedback')">כן</button>
                        <button class="btn btn-secondary btn-sm text-xs mx-1" onclick="checkStudyStepAnswerDirect('לא', 'לא', 'l2p2_sE_feedback')">לא</button>
                        <div id="l2p2_sE_feedback" class="text-sm mt-1">במילה see, הצירוף ee נשמע כמו חיריק (אִי).</div>
                    </div></div>`
    },
    {
        title: "עוד דוגמאות לצליל I (חיריק - אִי)",
        content: `<div class="p-3 bg-emerald-100 rounded-lg border border-emerald-300">
                    <h5 class="font-semibold text-emerald-800 mb-2">עוד מילים עם <span class="ltr font-bold">I</span> שנשמעת <strong class="text-emerald-700">אִי (ee)</strong> (או קרוב לכך):</h5>
                    <ul class="list-disc list-inside rtl text-slate-700 space-y-1">
                        <li>מירי - <span class="ltr font-semibold">M<u>i</u>r<u>i</u></span></li>
                        <li>איתי - <span class="ltr font-semibold"><u>I</u>ta<u>i</u></span> (ה-I הראשונה)</li>
                        <li>סיני - <span class="ltr font-semibold">S<u>i</u>na<u>i</u></span> (ה-I הראשונה)</li>
                        <li>הוא - <span class="ltr font-semibold">h<u>e</u></span> (למרות שזו E, הצליל הוא 'ee')</li>
                        <li>אנחנו - <span class="ltr font-semibold">w<u>e</u></span> (למרות שזו E, הצליל הוא 'ee')</li>
                    </ul>
                    <div class="study-interactive-check mt-3">
                        <p class="text-sm font-medium text-slate-700">באיזה שם האות <strong class="ltr">I</strong> נשמעת כמו חיריק (אִי)?</p>
                        <button class="btn btn-secondary btn-sm text-xs mx-1 ltr" onclick="checkStudyStepAnswerDirect('Mike', 'Miri', 'l2p2_sI_feedback')">Mike</button>
                        <button class="btn btn-secondary btn-sm text-xs mx-1 ltr" onclick="checkStudyStepAnswerDirect('Miri', 'Miri', 'l2p2_sI_feedback')">Miri</button>
                        <div id="l2p2_sI_feedback" class="text-sm mt-1"></div>
                    </div></div>`
    },
    {
        title: "עוד דוגמאות לצליל O (חולם - אוֹ)",
        content: `<div class="p-3 bg-indigo-100 rounded-lg border border-indigo-300">
                    <h5 class="font-semibold text-indigo-800 mb-2">עוד מילים עם <span class="ltr font-bold">O</span> שנשמעת <strong class="text-indigo-700">אוֹ (oh)</strong>:</h5>
                    <ul class="list-disc list-inside rtl text-slate-700 space-y-1">
                        <li>רוני - <span class="ltr font-semibold">R<u>o</u>ni</span></li>
                        <li>תומר - <span class="ltr font-semibold">T<u>o</u>mer</span> (ה-O הראשונה)</li>
                        <li>דורון - <span class="ltr font-semibold">D<u>o</u>r<u>o</u>n</span></li>
                        <li>רובוט - <span class="ltr font-semibold">r<u>o</u>b<u>o</u>t</span></li>
                        <li>ישן - <span class="ltr font-semibold"><u>o</u>ld</span></li>
                        <li>זהב - <span class="ltr font-semibold">g<u>o</u>ld</span></li>
                    </ul>
                    <div class="study-interactive-check mt-3">
                        <p class="text-sm font-medium text-slate-700">הקלד את אות התנועה שאתה שומע במילה <span class="ltr">gold</span> (זהב):</p>
                        <input type="text" id="l2p2_sO_check" class="ltr border border-gray-300 p-1 rounded-md my-1 w-16 text-center">
                        <button class="btn btn-secondary btn-sm text-xs" onclick="checkStudyStepAnswer('l2p2_sO_check', 'o', 'l2p2_sO_feedback')">בדוק</button>
                        <div id="l2p2_sO_feedback" class="text-sm mt-1"></div>
                    </div></div>`
    },
    {
        title: "עוד דוגמאות לצליל U (שורוק - אוּ)",
        content: `<div class="p-3 bg-purple-100 rounded-lg border border-purple-300">
                    <h5 class="font-semibold text-purple-800 mb-2">עוד מילים עם <span class="ltr font-bold">U</span> שנשמעת <strong class="text-purple-700">אוּ (oo)</strong> (או צירוף דומה):</h5>
                    <ul class="list-disc list-inside rtl text-slate-700 space-y-1">
                        <li>אודי - <span class="ltr font-semibold"><u>U</u>di</span></li>
                        <li>יוני - <span class="ltr font-semibold">J<u>u</u>ne</span> (ה-u נשמעת 'oo')</li>
                        <li>שפעת - <span class="ltr font-semibold">fl<u>u</u></span></li>
                        <li>אמת - <span class="ltr font-semibold">tr<u>u</u>e</span> (ה-ue נשמע 'oo')</li>
                        <li>דבק - <span class="ltr font-semibold">gl<u>u</u>e</span> (ה-ue נשמע 'oo')</li>
                    </ul>
                    <div class="study-interactive-check mt-3">
                        <p class="text-sm font-medium text-slate-700">האם במילה <span class="ltr">bus</span> האות <strong class="ltr">U</strong> נשמעת כמו שורוק (אוּ) שלמדנו?</p>
                        <button class="btn btn-secondary btn-sm text-xs mx-1" onclick="checkStudyStepAnswerDirect('כן', 'לא', 'l2p2_sU_feedback')">כן</button>
                        <button class="btn btn-secondary btn-sm text-xs mx-1" onclick="checkStudyStepAnswerDirect('לא', 'לא', 'l2p2_sU_feedback')">לא</button>
                        <div id="l2p2_sU_feedback" class="text-sm mt-1">במילה bus, ה-u נשמעת כמו פתח קצר (אַ). נלמד על צלילים נוספים בהמשך.</div>
                    </div></div>`
    },
    {
        title: "תרגול קריאה: מילים ושמות מוכרים (מעורב)",
        content: `<p class="text-slate-700 mb-2">בואו נתרגל קריאה של רשימת מילים ושמות המכילים את חמשת צלילי התנועות שלמדנו. נסו לזהות את צליל התנועה העיקרי בכל מילה:</p>
                  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-center ltr text-lg font-medium">
                    <div class="p-2 bg-amber-100 rounded">Adam</div> <div class="p-2 bg-sky-100 rounded">Ben</div> <div class="p-2 bg-emerald-100 rounded">Dina</div>
                    <div class="p-2 bg-indigo-100 rounded">Ron</div> <div class="p-2 bg-purple-100 rounded">Ruth</div> <div class="p-2 bg-amber-100 rounded">Canada</div>
                    <div class="p-2 bg-sky-100 rounded">pen</div> <div class="p-2 bg-emerald-100 rounded">ski</div> <div class="p-2 bg-indigo-100 rounded">no</div>
                    <div class="p-2 bg-purple-100 rounded">menu</div> <div class="p-2 bg-amber-100 rounded">Tal</div> <div class="p-2 bg-sky-100 rounded">Edna</div>
                    <div class="p-2 bg-emerald-100 rounded">Gali</div> <div class="p-2 bg-indigo-100 rounded">Tom</div> <div class="p-2 bg-purple-100 rounded">Bruno</div>
                    <div class="p-2 bg-amber-100 rounded">star</div> <div class="p-2 bg-sky-100 rounded">ten</div> <div class="p-2 bg-indigo-100 rounded">robot</div>
                    <div class="p-2 bg-purple-100 rounded">blue</div> <div class="p-2 bg-amber-100 rounded">Anna</div> <div class="p-2 bg-sky-100 rounded">Ella</div>
                  </div>
                  <p class="text-sm text-slate-600 mt-3 rtl">בחלק הבא (חלק 3), נתחיל לתרגל קריאת מילים קצרות יותר באופן שיטתי.</p>`
    },
    {
        title: "סיום לימוד חלק 2 (שיעור 2)",
        content: `<p class="mt-4 text-lg text-green-600 font-semibold">מצוין! חיזקנו את ההיכרות עם צלילי התנועות הבסיסיים.</p>
                  <p class="text-slate-700">כעת, נעבור למבחן קצר נוסף או לחלק הבא.</p>`
    }
];
const lesson2Part2Data = {
    title: 'שיעור 2, חלק 2: חיזוק צלילי התנועות וקריאת מילים מוכרות',
    sections: {
        study: { title: '📖 לימוד: עוד דוגמאות ותרגול קריאה', steps: lesson2Part2StudySteps },
        test: {
            title: '📝 מבחן: זיהוי צלילי תנועות במילים נוספות',
            questions: [
                { id: "l2p2_tq1", q: "באיזה שם האות <strong class='ltr'>O</strong> נשמעת כמו חולם (אוֹ)?", options: ["<span class='ltr'>Dan</span>", "<span class='ltr'>Roni</span>", "<span class='ltr'>Netta</span>"], correct: "<span class='ltr'>Roni</span>", type: "mcq" },
                { id: "l2p2_tq2", q: "השלם את אות התנועה במילה <span class='ltr'>Am_rica</span> (אמריקה) כך שיישמע צליל סגול (אֶ) בחלק זה של המילה:", correct: "e", type: "fill_single", placeholder: "a/e/i/o/u" },
                { id: "l2p2_tq3", q: "איזו מילה מכילה את הצליל <strong class='text-amber-700'>אַ (ah)</strong> של A?", options: ["<span class='ltr'>test</span>", "<span class='ltr'>star</span>", "<span class='ltr'>ski</span>"], correct: "<span class='ltr'>star</span>", type: "mcq" },
                { id: "l2p2_tq4", q: "במילה <span class='ltr'>robot</span>, איזה צליל עושה האות <strong class='ltr'>o</strong> השנייה?", options: ["פתח (אַ)", "חולם (אוֹ)", "סגול (אֶ)"], correct: "חולם (אוֹ)", type: "mcq" },
                { id: "l2p2_tq5", q: "בשם <span class='ltr'>Ella</span>, איזה צליל עושה האות <strong class='ltr'>E</strong> הראשונה?", options: ["פתח (אַ)", "סגול (אֶ)", "חיריק (אִי)"], correct: "סגול (אֶ)", type: "mcq" }
            ],
            instructions: "ענה על השאלות הבאות בנושא זיהוי צלילי התנועות במילים."
        },
        practice: {
            title: '💪 תרגול: זיהוי צלילי תנועות במילים נוספות',
            activities: [
                { id: "l2p2_pa1", q: "בחר את השם שבו האות <strong class='ltr'>U</strong> נשמעת כמו שורוק (אוּ):", options: ["<span class='ltr'>Sam</span>", "<span class='ltr'>Bruno</span>", "<span class='ltr'>Tom</span>"], correct: "<span class='ltr'>Bruno</span>", type: "mcq" },
                { id: "l2p2_pa2", type: "fill_in_blank", q: "במילה <span class='ltr'>robot</span>, אות התנועה הראשונה היא __ והשנייה היא __.", correct: "o,o", placeholder: "o,o (הפרד בפסיק)" },
                { id: "l2p2_pa3", q: "איזו אות תנועה נשמעת במילה <span class='ltr'>star</span> (כוכב)?", options: ["A (כמו פתח)", "E (כמו סגול)", "O (כמו חולם)"], correct: "A (כמו פתח)", type: "mcq" }
            ],
            instructions: "תרגל זיהוי צלילי תנועות במילים ושמות נוספים."
        }
    }
};

// --- Data for Lesson 2, Part 3 ---
const lesson2Part3StudySteps = [
    {
        title: "חלק 3: הבחנה בין צלילי תנועות וקריאה ממוקדת",
        content: `<p class="mb-2 text-lg">בחלק זה, נתרגל להבחין בצורה טובה יותר בין חמשת צלילי התנועות הבסיסיים שלמדנו.</p>
                  <p class="text-slate-700">לפעמים מילים באנגלית נראות דומות אך נשמעות שונה בגלל אות התנועה שבתוכן. חשוב לפתח את היכולת לשמוע ולהבדיל בין הצלילים.</p>`
    },
    {
        title: "תרגיל הבחנה: אַ (a) מול אֶ (e)",
        content: `<p class="text-slate-700 mb-2">הקשיבו (או קראו בקול) ונסו להבחין בהבדל בין הצלילים במילים הבאות. שימו לב להבדל בתנועת הפה.</p>
                  <div class="grid grid-cols-2 gap-4 text-center ltr text-xl font-semibold">
                    <div class="p-3 bg-amber-100 rounded"><div><strong class="text-amber-700">ah (אַ)</strong> - פה פתוח</div><div>Dan</div><div>cat</div><div>map</div><div>star</div></div>
                    <div class="p-3 bg-sky-100 rounded"><div><strong class="text-sky-700">eh (אֶ)</strong> - פה מעט פחות פתוח</div><div>Ben</div><div>pen</div><div>bed</div><div>ten</div></div>
                  </div>
                  <div class="study-interactive-check mt-3">
                    <p class="text-sm font-medium text-slate-700">במילה <span class="ltr">hat</span> (כובע), איזה צליל תנועה שומעים?</p>
                    <button class="btn btn-secondary btn-sm text-xs mx-1" onclick="checkStudyStepAnswerDirect('אַ (ah)', 'אַ (ah)', 'l2p3_sAE_feedback')">אַ (ah)</button>
                    <button class="btn btn-secondary btn-sm text-xs mx-1" onclick="checkStudyStepAnswerDirect('אֶ (eh)', 'אַ (ah)', 'l2p3_sAE_feedback')">אֶ (eh)</button>
                    <div id="l2p3_sAE_feedback" class="text-sm mt-1"></div>
                  </div>`
    },
    {
        title: "תרגיל הבחנה: אִי (i) מול אֶ (e)",
        content: `<p class="text-slate-700 mb-2">הקשיבו (או קראו בקול) ונסו להבחין בהבדל:</p>
                  <div class="grid grid-cols-2 gap-4 text-center ltr text-xl font-semibold">
                    <div class="p-3 bg-emerald-100 rounded"><div><strong class="text-emerald-700">ee (אִי)</strong> - שפתיים מחייכות</div><div>Dina</div><div>ski</div><div>see</div><div>Miri</div></div>
                    <div class="p-3 bg-sky-100 rounded"><div><strong class="text-sky-700">eh (אֶ)</strong></div><div>Ben</div><div>pen</div><div>bed</div><div>Netta</div></div>
                  </div>
                  <div class="study-interactive-check mt-3">
                    <p class="text-sm font-medium text-slate-700">במילה <span class="ltr">pen</span> (עט), איזה צליל תנועה שומעים?</p>
                    <button class="btn btn-secondary btn-sm text-xs mx-1" onclick="checkStudyStepAnswerDirect('אִי (ee)', 'אֶ (eh)', 'l2p3_sIE_feedback')">אִי (ee)</button>
                    <button class="btn btn-secondary btn-sm text-xs mx-1" onclick="checkStudyStepAnswerDirect('אֶ (eh)', 'אֶ (eh)', 'l2p3_sIE_feedback')">אֶ (eh)</button>
                    <div id="l2p3_sIE_feedback" class="text-sm mt-1"></div>
                  </div>`
    },
    {
        title: "תרגיל הבחנה: אוֹ (o) מול אוּ (u)",
        content: `<p class="text-slate-700 mb-2">הקשיבו (או קראו בקול) ונסו להבחין בהבדל:</p>
                  <div class="grid grid-cols-2 gap-4 text-center ltr text-xl font-semibold">
                    <div class="p-3 bg-indigo-100 rounded"><div><strong class="text-indigo-700">oh (אוֹ)</strong> - שפתיים מעוגלות</div><div>Ron</div><div>no</div><div>robot</div><div>gold</div></div>
                    <div class="p-3 bg-purple-100 rounded"><div><strong class="text-purple-700">oo (אוּ)</strong> - שפתיים מכווצות קדימה</div><div>Ruth</div><div>menu</div><div>blue</div><div>Bruno</div></div>
                  </div>
                  <div class="study-interactive-check mt-3">
                    <p class="text-sm font-medium text-slate-700">במילה <span class="ltr">blue</span> (כחול), איזה צליל תנועה שומעים?</p>
                    <button class="btn btn-secondary btn-sm text-xs mx-1" onclick="checkStudyStepAnswerDirect('אוֹ (oh)', 'אוּ (oo)', 'l2p3_sOU_feedback')">אוֹ (oh)</button>
                    <button class="btn btn-secondary btn-sm text-xs mx-1" onclick="checkStudyStepAnswerDirect('אוּ (oo)', 'אוּ (oo)', 'l2p3_sOU_feedback')">אוּ (oo)</button>
                    <div id="l2p3_sOU_feedback" class="text-sm mt-1"></div>
                  </div>`
    },
    {
        title: "קריאת מילים ממוקדת לפי צליל תנועה",
        content: `<p class="text-slate-700 mb-2">קראו את המילים הבאות בקול רם. נסו להדגיש את צליל התנועה המרכזי בכל קבוצה:</p>
                  <div class="my-2 p-3 bg-amber-50 border border-amber-200 rounded">
                    <p class="font-semibold text-amber-700">צליל אַ (ah) - כמו פתח:</p>
                    <p class="ltr text-lg">Dan, Tal, Adam, Canada, banana, park, star, map, mama, art</p>
                  </div>
                  <div class="my-2 p-3 bg-sky-50 border border-sky-200 rounded">
                    <p class="font-semibold text-sky-700">צליל אֶ (eh) - כמו סגול:</p>
                    <p class="ltr text-lg">Ben, Edna, pen, red, test, Tel, ten, bed, yes, Ella</p>
                  </div>
                  <div class="my-2 p-3 bg-emerald-50 border border-emerald-200 rounded">
                    <p class="font-semibold text-emerald-700">צליל אִי (ee) - כמו חיריק:</p>
                    <p class="ltr text-lg">Dina, Gali, ski, Shiri, Liran, Miri, Itai, see, he, we</p>
                  </div>
                  <div class="my-2 p-3 bg-indigo-50 border border-indigo-200 rounded">
                    <p class="font-semibold text-indigo-700">צליל אוֹ (oh) - כמו חולם:</p>
                    <p class="ltr text-lg">Ron, Noa, Tom, go, no, robot, old, gold, Roni, Doron</p>
                  </div>
                  <div class="my-2 p-3 bg-purple-50 border border-purple-200 rounded">
                    <p class="font-semibold text-purple-700">צליל אוּ (oo) - כמו שורוק:</p>
                    <p class="ltr text-lg">Ruth, Bruno, Uzi, menu, Peru, blue, June, flu, true, Udi</p>
                  </div>
                  <p class="text-sm text-slate-600 mt-2 rtl">תרגול קריאה בקול עוזר מאוד לזכור את הצלילים!</p>`
    },
    {
        title: "סיכום חלק 3: הבדלה בין צלילי תנועות",
        content: `<p class="text-slate-700">עבודה מצוינת! בחלק זה תרגלנו להבחין בין חמשת צלילי התנועות הבסיסיים.</p>
                  <p class="text-slate-700 mt-1">היכולת לזהות את ההבדלים הדקים בין הצלילים חשובה מאוד לקריאה והבנה נכונה של השפה האנגלית.</p>
                  <p class="text-slate-700 mt-1">בחלק הבא והאחרון של שיעור זה, נעשה סיכום מקיף ונתרגל קריאה של צירופי מילים קצרים.</p>`
    }
];
const lesson2Part3Data = {
    title: 'שיעור 2, חלק 3: הבחנה בין צלילי תנועות וקריאה ממוקדת',
    sections: {
        study: { title: '📖 לימוד: הבדלים בין צלילי תנועות', steps: lesson2Part3StudySteps },
        test: {
            title: '📝 מבחן: הבחנה בין צלילי תנועות',
            questions: [
                { id: "l2p3_tq1", q: "איזו מילה מהבאות מכילה צליל תנועה <strong>שונה</strong> מהשתיים האחרות (בהתאם לצלילים שלמדנו)?", options: ["<span class='ltr'>Dan (אַ)</span>", "<span class='ltr'>Ben (אֶ)</span>", "<span class='ltr'>Tal (אַ)</span>"], correct: "<span class='ltr'>Ben (אֶ)</span>", type: "mcq" },
                { id: "l2p3_tq2", q: "במילה <span class='ltr'>robot</span>, הצליל של ה-<strong class='ltr'>o</strong> הראשונה הוא כמו:", options: ["פתח (אַ)", "חולם (אוֹ)", "שורוק (אוּ)"], correct: "חולם (אוֹ)", type: "mcq" },
                { id: "l2p3_tq3", q: "במילה <span class='ltr'>ski</span>, צליל התנועה <strong class='ltr'>i</strong> הוא כמו:", options: ["סגול (אֶ)", "חיריק (אִי)", "פתח (אַ)"], correct: "חיריק (אִי)", type: "mcq" },
                { id: "l2p3_tq4", q: "השלם את אות התנועה במילה <span class='ltr'>m_p</span> (מפה) כדי שיישמע צליל פתח (אַ):", correct: "a", type: "fill_single", placeholder: "a/e/i/o/u" },
                { id: "l2p3_tq5", q: "הצליל <strong class='text-purple-700'>אוּ (oo)</strong> מתאים לאיזו אות תנועה כפי שלמדנו?", options: ["A", "E", "U"], correct: "U", type: "mcq" }
            ],
            instructions: "ענה על השאלות הבאות בנושא הבחנה בין צלילי התנועות."
        },
        practice: {
            title: '💪 תרגול: הבחנה בין צלילי תנועות',
            activities: [
                { id: "l2p3_pa1", type: "mcq", q: "איזו מילה יוצאת דופן מבחינת צליל התנועה המרכזי (כפי שלמדנו)?", options: ["Ron (אוֹ)", "Noa (אוֹ)", "Ruth (אוּ)"], correct: "Ruth (אוּ)"},
                { id: "l2p3_pa2", type: "fill_in_blank", q: "במילה <span class='ltr'>red</span> (אדום), אות התנועה היא __ והצליל שלה הוא כמו __ בעברית.", correct: "e, סגול", placeholder: "האות, התנועה (למשל: e, סגול)" },
                { id: "l2p3_pa3", q: "לאיזו קבוצת צליל שייכת המילה <span class='ltr'>Adam</span>?", options: ["צליל אֶ (eh) של E", "צליל אַ (ah) של A", "צליל אִי (ee) של I"], correct: "צליל אַ (ah) של A", type: "mcq" }
            ],
            instructions: "תרגל הבחנה בין צלילי התנועות השונים במילים."
        }
    }
};

// --- Data for Lesson 2, Part 4 (Placeholder) ---
const lesson2Part4StudySteps = [
    {
        title: "חלק 4: סיכום ותרגול קריאה (משפטים קצרים)",
        content: `<p class="mb-2 text-lg">בחלק זה נסכם את כל מה שלמדנו על חמשת צלילי התנועות הבסיסיים.</p>
                  <p class="text-slate-700">לאחר מכן, נתרגל קריאה של מילים בתוך משפטים קצרים ופשוטים כדי ליישם את הידע שלנו.</p>
                  <h6 class="font-semibold text-blue-700 mt-3 mb-1">תזכורת: חמשת הצלילים הבסיסיים</h6>
                  <ul class="list-disc list-inside rtl text-slate-600 space-y-1 text-sm">
                      <li><strong class="ltr text-base">A a</strong> ➔ <strong class="text-amber-700">ah (אַ)</strong> (כמו פתח, במילה <strong>אַ</strong>רְנָב, <span class="ltr">map, cat</span>)</li>
                      <li><strong class="ltr text-base">E e</strong> ➔ <strong class="text-sky-700">eh (אֶ)</strong> (כמו סגול, במילה <strong>אֶ</strong>בֶן, <span class="ltr">pen, bed</span>)</li>
                      <li><strong class="ltr text-base">I i</strong> ➔ <strong class="text-emerald-700">ee (אִי)</strong> (כמו חיריק, במילה <strong>אִי</strong>ש, <span class="ltr">ski, Dina</span>)</li>
                      <li><strong class="ltr text-base">O o</strong> ➔ <strong class="text-indigo-700">oh (אוֹ)</strong> (כמו חולם, במילה <strong>אוֹ</strong>ר, <span class="ltr">Ron, no</span>)</li>
                      <li><strong class="ltr text-base">U u</strong> ➔ <strong class="text-purple-700">oo (אוּ)</strong> (כמו שורוק, במילה <strong>אוּ</strong>לָם, <span class="ltr">Ruth, blue</span>)</li>
                  </ul>`
    },
    {
        title: "תרגול קריאת משפטים קצרים",
        content: `<p class="text-slate-700 mb-2">קראו את המשפטים הבאים בקול. שימו לב לצלילי התנועות במילים המודגשות:</p>
                  <ul class="list-decimal list-inside rtl text-slate-700 space-y-2 text-lg">
                      <li><span class="ltr">D<u>a</u>n h<u>a</u>s a r<u>e</u>d c<u>a</u>t.</span> (לדן יש חתול אדום)</li>
                      <li><span class="ltr">R<u>o</u>n s<u>ee</u>s a bl<u>ue</u> b<u>u</u>s.</span> (רון רואה אוטובוס כחול) - שימו לב, bus זה צליל אחר של U.</li>
                      <li><span class="ltr"><u>A</u>nn<u>a</u> <u>i</u>s <u>i</u>n P<u>e</u>r<u>u</u>.</span> (אנה בפרו)</li>
                      <li><span class="ltr">W<u>e</u> g<u>o</u> t<u>o</u> th<u>e</u> m<u>a</u>p.</span> (אנחנו הולכים למפה)</li>
                  </ul>
                  <p class="text-sm text-slate-600 mt-3">שימו לב: יש עוד צלילים לכל אות תנועה! אנחנו מתמקדים כרגע רק בחמשת הבסיסיים.</p>`
    },
    {
        title: "סיום שיעור 2",
        content: `<p class="mt-4 text-xl text-green-600 font-semibold">כל הכבוד! סיימתם את שיעור 2!</p>
                  <p class="text-slate-700">בשיעור זה למדנו ותרגלנו את חמשת צלילי התנועות הבסיסיים באנגלית. זיהוי נכון של צלילים אלו הוא צעד חשוב מאוד בדרך לקריאה שוטפת.</p>
                  <p class="text-slate-700 mt-2">אל תשכחו לתרגל עוד בעזרת המבחן והתרגילים הנוספים. נתראה בשיעור הבא!</p>`
    }
];
const lesson2Part4Data = {
    title: 'שיעור 2, חלק 4: סיכום ותרגול קריאה (משפטים קצרים)',
    sections: {
        study: { title: '📖 לימוד: סיכום וקריאת משפטים', steps: lesson2Part4StudySteps },
        test: {
            title: '📝 מבחן מסכם: צלילי תנועות וקריאה',
            questions: [
                { id: "l2p4_tq1", q: "במשפט <span class='ltr'>'A cat sat on a map'</span>, כמה פעמים מופיע הצליל <strong class='text-amber-700'>אַ (ah)</strong> של A?", options: ["2", "3", "4"], correct: "4", type: "mcq" },
                { id: "l2p4_tq2", q: "איזו מילה מהבאות מכילה את הצליל <strong class='text-sky-700'>אֶ (eh)</strong> של E?", options: ["<span class='ltr'>see</span>", "<span class='ltr'>ten</span>", "<span class='ltr'>Tim</span>"], correct: "<span class='ltr'>ten</span>", type: "mcq" },
                { id: "l2p4_tq3", q: "השלם את המשפט: <span class='ltr'>Dina can ___ (לראות) a star.</span>", correct: "see", type: "fill_single", placeholder: "see / ski / sit" }
            ],
            instructions: "ענה על השאלות המסכמות לשיעור 2."
        },
        practice: {
            title: '💪 תרגול מסכם: צלילי תנועות וקריאה',
            activities: [
                { id: "l2p4_pa1", type: "mcq", q: "באיזו מילה הצליל של <strong class='ltr'>O</strong> הוא כמו במילה <span class='ltr'>go</span>?", options: ["<span class='ltr'>Tom</span>", "<span class='ltr'>hot</span>", "<span class='ltr'>do</span>"], correct: "<span class='ltr'>Tom</span>" },
                { id: "l2p4_pa2", type: "fill_in_blank", q: "קראו את המשפט והשלימו את המילה החסרה עם הצליל הנכון: <span class='ltr'>A ___ (חתול) is on the bed.</span>", correct: "cat", placeholder: "הקלד את המילה" }
            ],
            instructions: "תרגול נוסף לסיכום שיעור 2."
        }
    }
};


// --- Master list of all part titles for Lesson 2 and other known lessons ---
const allLessonPartsMasterData_L2 = {
    // Lesson 2 Parts
    "L2P1": { title: lesson2Part1Data.title },
    "L2P2": { title: lesson2Part2Data.title },
    "L2P3": { title: lesson2Part3Data.title },
    "L2P4": { title: lesson2Part4Data.title },

    // Lesson 4 Parts (example for global context)
    "L4P1": { title: 'חלק 1: יסודות - "To Be" בהווה (אני, אתה, הוא/היא/זה)' },
    "L4P2": { title: 'חלק 2: רבים ושלילה (We, They, Not)' },
    "L4P3": { title: 'חלק 3: שאלות (Are you? Where is he?)' },
    "L4P4": { title: 'חלק 4: "To Be" בעבר (Was, Were)' }
    // Add other lessons and parts here as your application grows
};

// --- Main Initialization Function for Lesson 2 Parts ---
// This function will be called from the individual HTML files of Lesson 2 parts.
function loadLesson2Part(partIdentifier) {
    let partDataToLoad;
    let uniquePartId;

    switch (partIdentifier) {
        case 1: // Corresponds to part1.html
        case "L2P1":
            partDataToLoad = lesson2Part1Data;
            uniquePartId = "L2P1";
            break;
        case 2: // Corresponds to part2.html
        case "L2P2":
            partDataToLoad = lesson2Part2Data;
            uniquePartId = "L2P2";
            break;
        case 3: // Corresponds to part3.html
        case "L2P3":
            partDataToLoad = lesson2Part3Data;
            uniquePartId = "L2P3";
            break;
        case 4: // Corresponds to part4.html
        case "L2P4":
            partDataToLoad = lesson2Part4Data;
            uniquePartId = "L2P4";
            break;
        default:
            console.error(`Unknown part identifier for Lesson 2: ${partIdentifier}`);
            const contentArea = document.getElementById('content-area');
            if (contentArea) {
                contentArea.innerHTML = `<p>שגיאה: חלק שיעור לא ידוע (${partIdentifier}).</p>`;
            }
            return;
    }

    if (typeof initializeCurrentPage === 'function') {
        console.log(`Initializing Lesson 2, Part identified as: ${uniquePartId}`);
        initializeCurrentPage('part', uniquePartId, partDataToLoad, allLessonPartsMasterData_L2);
    } else {
        console.error("Main script (initializeCurrentPage function) not found. Ensure script.js is loaded before lesson2.js.");
        const contentArea = document.getElementById('content-area');
        if (contentArea) {
            contentArea.innerHTML = "<p>שגיאה קריטית בטעינת השיעור. פונקציית אתחול ראשית חסרה.</p>";
        }
    }
}

// How to use this in individual HTML files for Lesson 2 parts (e.g., lesson2/part1.html):
// 1. Include this script: <script src="lesson2.js"></script> (adjust path if needed)
// 2. Call the loader function:
//    For part1.html:
//    <script>
//      document.addEventListener('DOMContentLoaded', function() { loadLesson2Part(1); /* or "L2P1" */ });
//    </script>
//
//    For part2.html:
//    <script>
//      document.addEventListener('DOMContentLoaded', function() { loadLesson2Part(2); /* or "L2P2" */ });
//    </script>
//    And so on for part3.html and part4.html.
