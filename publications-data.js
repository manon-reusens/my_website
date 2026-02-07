// ========================================
// PUBLICATIONS DATABASE
// ========================================
// Single source of truth for all publications

const publicationsData = [
    // ==================== DISSERTATION ====================
    {
        id: "phd-2025",
        type: "thesis",
        title: "Beyond Performance: Exploring the Multidimensional Capabilities and Risks of Large Language Models",
        authors: ["Manon Reusens, Bart Baesens, Seppe vanden Broucke, Wouter Verbeke"],
        year: 2025,
        date: "2025-06-25",
        venue: "KU Leuven",
        venueType: "PhD Dissertation",
        description: "Comprehensive research on identifying the capabilities of LLMs across many different case studies. Additionally, we looked into the risks, mainly focusing on social bias in LLMs.",
        tags: ["Language Bias", "Fairness", "Multilingual NLP"],
        links: {
            paper: "https://kuleuven.limo.libis.be/discovery/fulldisplay?docid=lirias4232354"
        },
        emoji: "🎓",
        promotors: 'Bart Baesens, Seppe vanden Broucke, and Wouter Verbeke',
        featured: false
    },

    // ==================== PREPRINTS ====================
    // Add your preprints here following this template:
    /*
    {
        id: "preprint-2026-example",
        type: "preprint",
        title: "Your Preprint Title",
        authors: ["Author 1", "Manon Reusens", "Author 3"],
        year: 2026,
        date: "2026-03-15",
        venue: "arXiv",
        venueType: "Preprint",
        description: "Description of your preprint research...",
        tags: ["Tag1", "Tag2"],
        categories: ["llm", "bias"],
        links: {
            arxiv: "https://arxiv.org/abs/XXXX.XXXXX",
            pdf: "https://arxiv.org/pdf/XXXX.XXXXX.pdf"
        },
        emoji: "📝",
        featured: false
    },
    */

    // ==================== JOURNAL ARTICLES ====================
    {
        id: "jba-2025-anthropomorphization",
        type: "journal",
        title: "LLM Anthropomorphization: Balancing Ethics and Business Value",
        authors: ["Manon Reusens", "Bart Baesens"],
        year: 2025,
        date: "2025-08-01",
        venue: "Journal of Business Analytics",
        venueType: "Journal Article",
        description: "This viewpoint article offers a cross-disciplinary synthesis of insights from Computer Science, Business, Psychology, and Law to develop practical, actionable guidelines for responsible LLM deployment in business contexts.",
        tags: ["Business Ethics", "Anthropomorphization", "Responsible AI"],
        links: {
            paper: "https://www.tandfonline.com/doi/abs/10.1080/2573234X.2025.2551951"
        },
        emoji: "🤖",
        featured: true
    },
    {
        id: "aisociety-2025-museums",
        type: "journal",
        title: "Large Language Models to Make Museum Archive Collections More Accessible",
        authors: ["Manon Reusens", "Amy Adams", "Bart Baesens"],
        year: 2025,
        date: "2025-02-28",
        venue: "AI & Society",
        venueType: "Journal Article",
        description: "This paper demonstrates how LLMs can democratize access to cultural heritage by automating keyword extraction and making museum archives more searchable to broader audiences.",
        tags: ["Cultural Heritage", "Accessibility", "Keyword Extraction"],
        links: {
            paper: "https://link.springer.com/article/10.1007/s00146-025-02227-8"
        },
        emoji: "⚓",
        featured: false
    },
    {
        id: "eswa-2024-textclassification",
        type: "journal",
        title: "Evaluating Text Classification: A Benchmark Study",
        authors: ["Manon Reusens", "Alexander Stevens", "Jonathan Tonglet", "Johannes De Smedt", "Wouter Verbeke", "Seppe Vanden Broucke", "Bart Baesens"],
        year: 2024,
        date: "2024-06-01",
        venue: "Expert Systems with Applications",
        venueType: "Journal Article",
        description: "A comprehensive benchmark study comparing different techniques for text classification across multiple domains and datasets.",
        tags: ["Benchmarking", "Text Classification", "NLP"],
        links: {
            paper: "https://www.sciencedirect.com/science/article/pii/S0957417424011680"
        },
        emoji: "⚖️",
        featured: false
    },
    {
        id: "top-2024-twitter",
        type: "journal",
        title: "Predicting the Demographics of Twitter Users with Programmatic Weak Supervision",
        authors: ["Jonathan Tonglet", "Astrid Jehoul", "Manon Reusens", "Bart Baesens"],
        year: 2024,
        date: "2024-02-01",
        venue: "TOP",
        venueType: "Journal Article",
        description: "This paper introduces a three-step weak supervision approach for predicting demographics of Twitter users.",
        tags: ["Social Media", "Weak Supervision", "Demographics"],
        links: {
            paper: "https://link.springer.com/content/pdf/10.1007/s11750-024-00666-y.pdf"
        },
        emoji: "🐥",
        featured: false
    },
    {
        id: "jba-2023-innovation",
        type: "journal",
        title: "Topic Modelling Applied on Innovation Studies of Flemish Companies",
        authors: ["Annelien Crijns", "Victor Vanhullebusch", "Manon Reusens", "Bart Baesens"],
        year: 2023,
        date: "2023-03-05",
        venue: "Journal of Business Analytics",
        venueType: "Journal Article",
        description: "This paper uses topic modeling to analyze innovation within Flemish companies based on their websites.",
        tags: ["Topic Modeling", "Innovation", "Business Analytics"],
        links: {
            paper: "https://www.tandfonline.com/doi/pdf/10.1080/2573234X.2023.2186274"
        },
        emoji: "📘",
        featured: false
    },

    // ==================== CONFERENCE PAPERS ====================
    {
        id: "ijcnlp-2025-nativedesign",
        type: "conference",
        title: "Native Design Bias: Studying the Impact of English Nativeness on Language Model Performance",
        authors: ["Manon Reusens", "Philipp Borchert", "Jochen De Weerdt", "Bart Baesens"],
        year: 2025,
        date: "2025-10-24",
        venue: "IJCNLP-AACL 2025 (Findings)",
        venueType: "Conference Paper",
        description: "This study focuses on English native design bias, where models designed primarily for English underperform when prompted by non-native English speakers on objective tasks.",
        tags: ["Design Bias", "English Nativeness", "Language variety bias"],
        links: {
            paper: "https://aclanthology.org/2025.findings-ijcnlp.73/"
        },
        emoji: "🌐",
        featured: true
    },
    {
        id: "emnlp-2025-personas",
        type: "conference",
        title: "Are Economists Always More Introverted? Analyzing Consistency in Persona-Assigned LLMs",
        authors: ["Manon Reusens", "Bart Baesens", "David Jurgens"],
        year: 2025,
        date: "2025-08-15",
        venue: "EMNLP 2025 (Findings)",
        venueType: "Conference Paper",
        description: "This study investigates whether persona-assigned LLMs maintain consistent personality traits across different scenarios. Additionally, we analyze whether there are spillover effects for non-assigned persona categories.",
        tags: ["Persona Consistency", "LLM Evaluation", "Bias Analysis"],
        links: {
            paper: "https://aclanthology.org/2025.findings-emnlp.603/"
        },
        emoji: "🧑‍💼",
        featured: true
    },
    {
        id: "ecmlpkdd-2025-realestate",
        type: "conference",
        title: "On the Performance of LLMs for Real Estate Appraisal",
        authors: ["Margot Geerts", "Manon Reusens", "Bart Baesens", "Seppe vanden Broucke", "Jochen De Weerdt"],
        year: 2025,
        date: "2025-06-29",
        venue: "ECML-PKDD 2025",
        venueType: "Conference Paper",
        description: "We systematically evaluate leading LLMs on diverse international housing datasets, comparing zero-shot, few-shot, market report-enhanced, and hybrid prompting techniques for real estate valuation.",
        tags: ["Applied ML", "Real Estate", "Industry Application"],
        links: {
            arxiv: "https://arxiv.org/abs/2506.11812"
        },
        emoji: "🏠",
        featured: false
    },
    {
        id: "emnlp-2023-seer",
        type: "conference",
        title: "SEER: A Knapsack Approach to Exemplar Selection for In-Context HybridQA",
        authors: ["Jonathan Tonglet", "Manon Reusens", "Philipp Borchert", "Bart Baesens"],
        year: 2023,
        date: "2023-10-01",
        venue: "EMNLP 2023",
        venueType: "Conference Paper",
        description: "This paper introduces a novel exemplar selection method named SEER for in-context learning in hybrid question answering systems.",
        tags: ["In-Context Learning", "Hybrid Question Answering", "Knapsack"],
        links: {
            paper: "https://aclanthology.org/2023.emnlp-main.837/"
        },
        emoji: "✅",
        featured: false
    },
    {
        id: "emnlp-2023-crosslingual",
        type: "conference",
        title: "Investigating Bias in Multilingual Language Models: Cross-Lingual Transfer of Debiasing Techniques",
        authors: ["Manon Reusens", "Philipp Borchert", "Margot Mieskes", "Jochen De Weerdt", "Bart Baesens"],
        year: 2023,
        date: "2023-10-01",
        venue: "EMNLP 2023",
        venueType: "Conference Paper",
        description: "This paper investigates the transferability of debiasing techniques across different languages within multilingual models, revealing insights about cross-lingual bias mitigation.",
        tags: ["Cross-Lingual debiasing", "Multilingual", "Social Bias"],
        links: {
            paper: "https://aclanthology.org/2023.emnlp-main.175/"
        },
        emoji: "🌍",
        featured: false
    },
    {
        id: "rcis-2022-outlier",
        type: "conference",
        title: "Benchmarking Conventional Outlier Detection Methods",
        authors: ["Elena Tiukhova", "Manon Reusens", "Bart Baesens", "M. Snoeck"],
        year: 2022,
        date: "2022-05-03",
        venue: "International Conference on Research Challenges in Information Science",
        venueType: "Conference Paper",
        description: "A comprehensive benchmark of various outlier detection methods across different datasets and contexts.",
        tags: ["Outlier Detection", "Benchmarking", "Anomaly Detection"],
        links: {
            paper: "https://link.springer.com/chapter/10.1007/978-3-031-05760-1_35"
        },
        emoji: "💡",
        featured: false
    }
];

// Helper functions
const PublicationsAPI = {
    // Get all publications
    getAll: () => publicationsData,
    
    // Get publications by type
    getByType: (type) => publicationsData.filter(p => p.type === type),
    
    // Get publications by category
    getByCategory: (category) => publicationsData.filter(p => p.categories.includes(category)),
    
    // Get publications by year
    getByYear: (year) => publicationsData.filter(p => p.year === year),
    
    // Get featured publications
    getFeatured: () => publicationsData.filter(p => p.featured),
    
    // Get recent publications (last N)
    getRecent: (count = 5) => {
        return [...publicationsData]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, count);
    },
    
    // Get publications sorted by date
    getSortedByDate: () => {
        return [...publicationsData].sort((a, b) => new Date(b.date) - new Date(a.date));
    }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { publicationsData, PublicationsAPI };
}
