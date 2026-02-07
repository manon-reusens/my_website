// ========================================
// TALKS DATABASE
// ========================================
// Single source of truth for all talks and presentations

const talksData = [
    {
        id: "talk-2026-02-orbel",
        date: "2026-02-06",
        title: "Consistency in Persona-Assigned LLMs",
        type: "Conference Presentation",
        duration: '20 minutes',
        event: "ORBEL 40",
        image: "images/persona.png",
        location: "Leuven, Belgium",
        description: "I presented my work at the ORBEL 40 conference in Leuven on Consistency in Persona assigned LLMs",
        links: {
            event: "https://feb.kuleuven.be/orbel40"
        }
    },
    {
        id: "talk-2026-01-biomina",
        date: "2026-01-30",
        title: "Consistency Analysis in Persona-Assigned LLMs",
        type: "Invited Talk",
        duration: '30 minutes',
        event: "Biomina Lunch Talks",
        image: "images/persona.png",
        location: "Antwerp, Belgium",
        description: "Invited by Biomina to present research on consistency in persona-assigned LLMs. Discussed how large language models maintain consistent personality traits when assigned specific personas, but how some of this consistency is linked to stereotypes and model default values.",
        links: {
            event: "https://www.biomina.be/events/biomina-lunch-talk-2026-01",
            abstract: "https://feb.kuleuven.be/orbel40/orbel40-conference-book.pdf"
        }
    },
    {
        id: "talk-2025-10-dataminded",
        date: "2025-10-24",
        title: "Bias in Large Language Models",
        type: "Keynote",
        duration: '1 hour',
        event: "Dataminded Team Weekend",
        image: "images/bias_in_large_language_models.png",
        location: "Bernkastel-Kues, Germany",
        description: "Keynote presentation on social bias in large language models for industry practitioners. Covered detection methods, mitigation strategies, and practical implications for deploying fair AI systems in business contexts.",
        links: {}
    },
    {
        id: "talk-2025-06-ssh",
        date: "2025-06-12",
        title: "Language Bias in AI: Ensuring Fairness Across Global English Speakers",
        type: "Research Pitch",
        event: "Social Sciences and Humanities Research Day",
        location: "Leuven, Belgium",
        description: "Pitched research on language bias in AI at the interdisciplinary Social Sciences and Humanities Research Day, highlighting how AI systems treat different varieties of English unfairly.",
        links: {
            paper: "https://arxiv.org/pdf/2406.17385"
        }
    },
    {
        id: "talk-2025-05-cultural",
        date: "2025-05-20",
        title: "LLMs for Keywording & Entity Recognition",
        type: "Invited Talk",
        duration: '30 minutes',
        event: "AI in Cultural Heritage Group",
        image: "images/royal_navy.png",
        location: "Online",
        description: "Presented research on using Large Language Models to make museum archive collections more accessible through automated keyword extraction and entity recognition.",
        links: {
            paper: "https://link.springer.com/article/10.1007/s00146-025-02227-8"
        }
    },
    {
        id: "talk-2025-01-orbel",
        date: "2025-01-31",
        title: "Native Design Bias in Large Language Models",
        type: "Conference Presentation",
        event: "ORBEL",
        location: "Maastricht, Netherlands",
        description: "Presented research on native design bias in Large Language Models at the Belgian Operations Research Society conference.",
        links: {
            abstract: "https://www.maastrichtuniversity.nl/file/booklet-abstractpdf"
        }
    },
    {
        id: "talk-2024-05-springfest",
        date: "2024-05-16",
        title: "GenAI: Introduction and Academic Perspective",
        type: "Invited Talk",
        duration: '20 minutes',
        event: "Spring Fest, KU Leuven",
        location: "Leuven, Belgium",
        description: "Presented the academic perspective on Generative AI at the alumni day for postgraduate studies in Big Data and Analytics, focusing on debiasing techniques in multilingual language models.",
        links: {
            event: "https://puc.kuleuven.be/nl/opleiding/spring_fest_genai_for_business_by_the_postgraduate_studies_in_big_data_and_analytics-ykzo8gyer6lr3j5v/"
        }
    },
    {
        id: "talk-2024-03-vsa",
        date: "2024-03-21",
        title: "Research Collaboration Between VSA and KU Leuven",
        type: "Research Collaboration",
        event: "Statistics Flanders Network Day",
        location: "Brussels, Belgium",
        description: "Presented results from multi-year research collaboration between Statistics Flanders and KU Leuven, combining work from several thesis groups. Talk delivered in Dutch.",
        links: {
            event: "ttps://www.vlaanderen.be/statistiek-vlaanderen/dag-van-het-netwerk-statistiek-vlaanderen-op-21-maart-2024",
            slides: "https://assets.vlaanderen.be/image/upload/v1711377009/Manon_Reusens_Onderzoekssamenwerking_tussen_VSA_en_KU_Leuven_qmybti.pdf"
        }
    },
    {
        id: "talk-2023-12-emnlp",
        date: "2023-12-09",
        title: "Investigating Bias in Multilingual Language Models: Cross-Lingual Transfer of Debiasing Techniques",
        type: "Conference Presentation",
        event: "EMNLP 2023",
        location: "Singapore",
        description: "Oral presentation of research investigating the transferability of debiasing techniques across different languages within multilingual language models.",
        links: {}
    },
    {
        id: "talk-2023-07-ifors",
        date: "2023-07-11",
        title: "Benchmarking Methods on Different Text Classification Tasks",
        type: "Conference Presentation",
        event: "IFORS",
        location: "Santiago, Chile",
        description: "Presented comprehensive benchmark study evaluating different text classification techniques across multiple domains and datasets.",
        links: {
            abstract: "https://www.ifors.org/wp-content/uploads/2023/11/IFORS-Proceedings-2023.pdf"
        }
    },
    {
        id: "talk-2022-05-vsa",
        date: "2022-05-24",
        title: "Benchmarking Dutch Sentiment Models for Use in Twitter Sentiment Annotation",
        type: "Seminar Talk",
        event: "Statistics Flanders Seminar",
        location: "Leuven, Belgium",
        description: "Presented research on benchmarking Dutch sentiment analysis models for application to Twitter data at the Statistics Flanders Seminar.",
        links: {
            event: "https://www.vlaanderen.be/statistiek-vlaanderen",
            slides: "https://assets.vlaanderen.be/image/upload/v1653472530/presentatie_stat_vl_Manon_lmva9n.pdf"
        }
    },
    {
        id: "custom-topics",
        type: "Invited Talk",               // you could also use "Keynote" or "Custom"
        title: "Other Topics Available on Request",
        event: "Tailored keynote for your audience",
        location: "On-site or Online",
        date: "2099-12-31",                 // pushed far in future so it sorts last or first as you prefer
        image: "images/open_topic.png", 
        description: "Don’t see exactly what you need? I can tailor keynotes to your industry and audience.",
        moreInfo: "I offer custom sessions on Responsible AI, LLM alignment, evaluation, safety & governance, prompt engineering practices, and hands-on workshops for technical and non-technical teams. Tell me your goals and constraints; I’ll propose a talk that fits.",
        duration: "30–60 minutes (customizable)",
        keywords: ["Responsible AI", "LLMs", "Bias mitigation", "Governance", "Workshops"],
        links: {
          // usually no slides/video; keep empty or add a link to a contact page if you have one
        },
        hiddenFromNews: true
      }
];

// Optional defaults you can reuse (keep empty if you prefer no defaults)
const DEFAULT_EXCLUDED_TALKS = []; // e.g., ['custom-topics']

function _normalizeTalksOpts(opts = {}) {
  return {
    excludeIds: new Set([
      ...(opts.excludeIds || []),
      ...(opts.useDefaultExclusions ? DEFAULT_EXCLUDED_TALKS : [])
    ].map(String)),
    excludeTypes: new Set((opts.excludeTypes || []).map(String)),
    includeHidden: !!opts.includeHidden,                 // if you add t.hiddenFromTalks later
    excludePredicate: typeof opts.excludePredicate === 'function' ? opts.excludePredicate : null
  };
}

function _filterTalks(arr, opts = {}) {
  const o = _normalizeTalksOpts(opts);
  return arr.filter(t => {
    if (!o.includeHidden && t.hiddenFromTalks) return false;      // optional flag
    if (o.excludeIds.has(String(t.id))) return false;             // by id
    if (o.excludeTypes.size && o.excludeTypes.has(t.type)) return false; // by type
    if (o.excludePredicate && o.excludePredicate(t) === true) return false;
    return true;
  });
}

// Helper functions
const TalksAPI = {
    // Get all talks (with optional exclusions)
    getAll: (opts) => _filterTalks([...talksData], opts),
  
    // Get talks by type
    getByType: (type, opts) => _filterTalks(
      talksData.filter(t => t.type === type),
      opts
    ),
  
    // Get talks by year (YYYY)
    getByYear: (year, opts) => _filterTalks(
      talksData.filter(t => t.date && t.date.startsWith(year)),
      opts
    ),
  
    // Get recent talks (last N)
    getRecent: (count = 5, opts) => _filterTalks([...talksData], opts)
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, count),
  
    // Get talks sorted by date (desc)
    getSortedByDate: (opts) => _filterTalks([...talksData], opts)
      .sort((a, b) => new Date(b.date) - new Date(a.date)),
  
    // Keynotes (you can include Invited Talks as well if you want)
    getKeynotes: (opts) => _filterTalks(
      talksData.filter(t => t.type === "Keynote"),
      opts
    ),
  
    // Optionally add a helper that includes invited talks too
    getKeynotesAndInvited: (opts) => _filterTalks(
      talksData.filter(t => t.type === "Keynote" || t.type === "Invited Talk"),
      opts
    ),
  
    // Group by year
    groupByYear: (opts) => {
      const grouped = {};
      _filterTalks([...talksData], opts).forEach(talk => {
        const year = (talk.date || '').substring(0, 4);
        if (!year) return;
        if (!grouped[year]) grouped[year] = [];
        grouped[year].push(talk);
      });
      return grouped;
    }
  };

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { talksData, TalksAPI };
}
