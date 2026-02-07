// ========================================
// TEACHING DATABASE
// ========================================
// Single source of truth for all teaching activities

const teachingData = {
    // Current courses
    current: [
        {
            id: "teach-2025-dbm",
            role: "Lecturer",
            course: "Principles of Database Management",
            institution: "KU Leuven, Faculty of Business and Economics",
            startYear: 2025,
            endYear: null, // null means ongoing
            ects: 6,
            students: "200+",
            level: "Bachelor & Master Level",
            description: "As the Lecturer for Principles of Database Management, I teach foundational database concepts to students in various programs including the Master of Information Management. The course covers conceptual data modeling and database design, SQL, normalization, transaction management, and data warehouses and data lakes. I am fully responsible for teaching the lectures and assessing the students' understanding of database principles at the exam.",
            tags: ["Database Design", "SQL", "Data Modeling", "Information Management"],
            responsibilities: [
                "Deliver comprehensive database curriculum",
                "Develop additional exercises during the course",
                "Assess the students' understanding of database principles at the exam",
                "Provide feedback to the students about their exam performance"
            ]
        }
    ],
    
    // Guest lectures
    guestLectures: [
        {
            id: "guest-2025-ml",
            course: "Machine Learning",
            institution: "UAntwerpen, Department of Business and Economics",
            year: 2025,
            parentCourse: "Informatiesystemen",
            ects: 3,
            level: "Undergraduate",
            description: "Guest lecture on real-world applications of Machine Learning in business contexts, demonstrating how ML techniques solve practical problems and create value for organizations, and highlighting the ethical considerations that need to be made.",
            tags: ["Machine Learning", "Business Applications", "Applied AI"]
        },
        {
            id: "guest-2024-ba",
            course: "Natural Language Processing",
            institution: "KU Leuven, Department of Business and Economics",
            year: 2024,
            parentCourse: "Business Analytics",
            ects: 6,
            level: "Advanced Master & Postgraduate",
            description: "A guest lecture on Natural Language Processing that introduces foundational earlier methods such as TF‑IDF and explains the transformer architecture. The talk also explores issues of bias and fairness in large language models and connects these concepts to the latest developments in current research.",
            tags: ["NLP", "Business Analytics", "Text Mining"]
        },
        {
            id: "guest-2023-ds",
            course: "Natural Language Processing",
            institution: "KU Leuven, Department of Business and Economics",
            year: 2023,
            parentCourse: "Data Science for Business",
            ects: 6,
            level: "Graduate Level",
            description: "A guest lecture on Natural Language Processing that introduces foundational earlier methods such as TF‑IDF and explains the transformer architecture. The talk also explores issues of bias and fairness in large language models and connects these concepts to business applications.",
            tags: ["Data Science", "NLP", "Business Value"]
        }
    ],
    
    // Teaching assistantships
    assistantships: [
        {
            id: "ta-2021-2025",
            role: "Teaching Assistant",
            course: "Principles of Database Management",
            institution: "KU Leuven, Faculty of Business and Economics",
            startYear: 2021,
            endYear: 2025,
            ects: 6,
            students: "200+ students annually",
            evaluation: "Oral Defenses",
            description: "Served as Teaching Assistant for four years, responsible for designing and grading practical assignments, conducting oral defenses, and providing student support. Developed comprehensive assessment materials that test both theoretical understanding and practical database skills.",
            tags: ["Assessment Design", "Student Mentoring", "Oral Evaluation", "Database Systems"],
            responsibilities: [
                "Design and grade practical assignments",
                "Conduct oral defenses with students",
                "Provide personalized student support",
                "Develop assessment materials"
            ]
        }
    ]
};

// Helper functions
const TeachingAPI = {
    // Get all teaching activities
    getAll: () => ({
        current: teachingData.current,
        guestLectures: teachingData.guestLectures,
        assistantships: teachingData.assistantships
    }),
    
    // Get current teaching
    getCurrent: () => teachingData.current,
    
    // Get guest lectures
    getGuestLectures: () => teachingData.guestLectures,
    
    // Get guest lectures by year
    getGuestLecturesByYear: (year) => teachingData.guestLectures.filter(g => g.year === year),
    
    // Get assistantships
    getAssistantships: () => teachingData.assistantships,
    
    // Get all teaching sorted by year
    getAllSortedByYear: () => {
        const all = [
            ...teachingData.current.map(t => ({ ...t, category: 'current', year: t.startYear })),
            ...teachingData.guestLectures.map(t => ({ ...t, category: 'guest' })),
            ...teachingData.assistantships.map(t => ({ ...t, category: 'assistant', year: t.startYear }))
        ];
        return all.sort((a, b) => b.year - a.year);
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { teachingData, TeachingAPI };
}
