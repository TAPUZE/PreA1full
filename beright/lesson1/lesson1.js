// Lesson 1 specific logic
const part1StudySteps = [
    {
        title: "חלק 1: הכרת אותיות A-G",
        content: `<div class="bg-white p-4 rounded-lg shadow-sm">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">מבוא לאלפבית האנגלי</h2>
                    <p class="text-gray-700 mb-4">האלפבית האנגלי מורכב מ-26 אותיות. לכל אות יש צורה גדולה (uppercase) וצורה קטנה (lowercase). בחלק זה נלמד את 7 האותיות הראשונות: A עד G.</p>
                    <ul class="list-disc pl-6">
                        <li><strong>A</strong> - Ey (אֵי)</li>
                        <li><strong>B</strong> - Bee (בִּי)</li>
                        <li><strong>C</strong> - See (סִי)</li>
                        <li><strong>D</strong> - Dee (דִי)</li>
                        <li><strong>E</strong> - Ee (אִי)</li>
                        <li><strong>F</strong> - Ef (אֵף)</li>
                        <li><strong>G</strong> - Gee (גִ'י)</li>
                    </ul>
                </div>`
    }
    // Additional steps can be added here
];

const part2StudySteps = [
    {
        title: "חלק 2: הכרת אותיות H-N",
        content: `<div class="bg-white p-4 rounded-lg shadow-sm">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">הכרת אותיות H-N</h2>
                    <ul class="list-disc pl-6">
                        <li><strong>H</strong> - Ey-ch (אֵי-צ')</li>
                        <li><strong>I</strong> - Eye (אַי)</li>
                        <li><strong>J</strong> - Jay (גֵ'י)</li>
                        <li><strong>K</strong> - Kay (קֵי)</li>
                        <li><strong>L</strong> - El (אֵל)</li>
                        <li><strong>M</strong> - Em (אֵם)</li>
                        <li><strong>N</strong> - En (אֵן)</li>
                    </ul>
                </div>`
    }
];

const part3StudySteps = [
    {
        title: "חלק 3: הכרת אותיות O-T",
        content: `<div class="bg-white p-4 rounded-lg shadow-sm">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">הכרת אותיות O-T</h2>
                    <ul class="list-disc pl-6">
                        <li><strong>O</strong> - Oh (אוֹ)</li>
                        <li><strong>P</strong> - Pee (פִּי)</li>
                        <li><strong>Q</strong> - Cue (קְיוּ)</li>
                        <li><strong>R</strong> - Ar (אַר)</li>
                        <li><strong>S</strong> - Es (אֵס)</li>
                        <li><strong>T</strong> - Tee (טִי)</li>
                    </ul>
                </div>`
    }
];

const part4StudySteps = [
    {
        title: "חלק 4: הכרת אותיות U-Z",
        content: `<div class="bg-white p-4 rounded-lg shadow-sm">
                    <h2 class="text-2xl font-bold text-gray-800 mb-4">הכרת אותיות U-Z</h2>
                    <ul class="list-disc pl-6">
                        <li><strong>U</strong> - You (יוּ)</li>
                        <li><strong>V</strong> - Vee (וִי)</li>
                        <li><strong>W</strong> - Double-you (דַבְּלְיוּ)</li>
                        <li><strong>X</strong> - Ex (אֵקְס)</li>
                        <li><strong>Y</strong> - Why (ווַאי)</li>
                        <li><strong>Z</strong> - Zee (זִי)</li>
                    </ul>
                </div>`
    }
];

const part1Data = {
    title: 'חלק 1: הכרת אותיות A-G',
    sections: {
        study: {
            title: '📖 לימוד: אותיות האלפבית',
            steps: part1StudySteps
        },
        test: {
            title: '📝 מבחן: אותיות האלפבית',
            questions: [
                { id: "l1p1_tq1", q: "מהי הצורה הקטנה של האות A?", options: ["a", "b", "c"], correct: "a", type: "mcq" }
                // Additional questions can be added here
            ]
        },
        practice: {
            title: '💪 תרגול: אותיות האלפבית',
            activities: [
                { id: "l1p1_pa1", type: "fill_in_blank", q: "השלם את המשפט: A ___ B.", correct: "C", placeholder: "C/D/E" }
                // Additional activities can be added here
            ]
        }
    }
};

// Initialize Lesson 1, Part 1
const allPartsMasterData = {
    1: part1Data,
    2: { title: 'חלק 2: אותיות H-N', sections: { study: { steps: part2StudySteps } } },
    3: { title: 'חלק 3: אותיות O-T', sections: { study: { steps: part3StudySteps } } },
    4: { title: 'חלק 4: אותיות U-Z', sections: { study: { steps: part4StudySteps } } }
};

document.addEventListener('DOMContentLoaded', function() {
    initializeCurrentPage('part', 1, part1Data, allPartsMasterData);
});
