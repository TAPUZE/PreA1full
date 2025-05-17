// Lesson 4 specific logic
const part1StudySteps = [
    {
        title: "ברוכים הבאים לחלק 1!",
        content: `<p class="mb-2 text-lg">נתחיל עם הפועל החשוב <strong>\"to be\"</strong> (להיות) בזמן הווה.</p>
                  <p class="mb-3 text-slate-700">באנגלית, אנחנו <strong>תמיד</strong> צריכים להשתמש בפועל הזה כדי לתאר מישהו או משהו.</p>`
    }
    // Additional steps can be added here
];

const part1Data = {
    title: 'חלק 1: יסודות - "To Be" בהווה',
    sections: {
        study: {
            title: '📖 לימוד: יסודות הפועל "To Be"',
            steps: part1StudySteps
        },
        test: {
            title: '📝 מבחן: יסודות הפועל "To Be"',
            questions: [
                { id: "l4p1_tq1", q: "מהי הצורה הנכונה של הפועל \"to be\" עם \"I\"?", options: ["is", "am", "are"], correct: "am", type: "mcq" }
                // Additional questions can be added here
            ]
        },
        practice: {
            title: '💪 תרגול: יסודות הפועל "To Be"',
            activities: [
                { id: "l4p1_pa1", type: "fill_in_blank", q: "השלם את המשפט: I ___ a student.", correct: "am", placeholder: "am/is/are" }
                // Additional activities can be added here
            ]
        }
    }
};

// Initialize Lesson 4, Part 1
const allPartsMasterData = {
    1: { title: 'חלק 1: יסודות - "To Be" בהווה' },
    2: { title: 'חלק 2: רבים ושלילה' },
    3: { title: 'חלק 3: שאלות' },
    4: part1Data
};

document.addEventListener('DOMContentLoaded', function() {
    initializeCurrentPage('part', 4, part1Data, allPartsMasterData);
});
