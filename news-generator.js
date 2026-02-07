// ========================================
// NEWS GENERATOR
// ========================================
// Automatically generates news from publications and talks

const NewsGenerator = {
    // Generate news from all sources
    generateAll: () => {
      const news = [];
  
      // --- Publications -> news
      if (typeof publicationsData !== 'undefined') {
        publicationsData.forEach(pub => {
          if (pub.type === 'preprint') return; // Skip preprints for news
  
          news.push({
            id: `pub-${pub.id || pub.title}`, // optional: add id if you have one
            date: NewsGenerator.formatDate(pub.date),
            title: `${pub.venueType} ${pub.type === 'thesis' ? 'Defense' : 'Acceptance'}: ${pub.venue}`,
            description: `"${pub.title}" ${pub.type === 'thesis' ? 'successfully defended' : 'accepted'}${pub.venue.includes('Findings') ? ' at ' + pub.venue : ' in ' + pub.venue}.`,
            type: "publication",
            link: pub.links?.paper || pub.links?.arxiv || "",
            sortDate: pub.date
          });
        });
      }
  
      // --- Talks -> news (Keynotes + Invited Talks only)
      if (typeof talksData !== 'undefined') {
        talksData.forEach(talk => {
          if (talk.type === 'Keynote' || talk.type === 'Invited Talk' || talk.type === 'Conference Presentation') {
            news.push({
              id: `talk-${talk.id}`, // stable id based on the talk id
              date: NewsGenerator.formatDate(talk.date),
              title: `${talk.type}: ${talk.event}`,
              description: (talk.description || '').substring(0, 200) + (talk.description && talk.description.length > 200 ? '...' : ''),
              type: "talk",
              // Prefer a link to your talk detail page so we can extract talkId from URL
              link: `talk.html?id=${encodeURIComponent(talk.id)}`,
              sortDate: talk.date,
  
              // 🔑 propagate fields so filters can work downstream
              talkId: talk.id,
              hiddenFromNews: !!talk.hiddenFromNews
            });
          }
        });
      }
  
      // Sort by date (most recent first)
      news.sort((a, b) => new Date(b.sortDate) - new Date(a.sortDate));
  
      return news;
    },
   
    // Format date for display
    formatDate: (dateString) => {
        const date = new Date(dateString);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                       'July', 'August', 'September', 'October', 'November', 'December'];
        return `${months[date.getMonth()]} ${date.getFullYear()}`;
    },
    
    // Get recent news (last N items)
    // Get recent news (last N items) with exclusions
  getRecent: (limit = 4, opts = {}) => {
    const excludeTalkIds = new Set((opts.excludeTalkIds || []).map(String));
    const excludeIds = new Set((opts.excludeIds || []).map(String));
    const excludePredicate = typeof opts.excludePredicate === 'function' ? opts.excludePredicate : null;

    // Helper: try to extract talkId from the link if not provided
    const extractTalkId = (n) => {
      if (n.talkId) return String(n.talkId);
      if (typeof n.link === 'string') {
        const m = n.link.match(/talk\.html\?id=([^&#]+)/i);
        if (m && m[1]) return decodeURIComponent(m[1]);
      }
      return undefined;
    };

    const all = NewsGenerator.generateAll();

    const filtered = all
      // respect explicit flag on news items
      .filter(n => !n.hiddenFromNews)
      // allow excluding specific news ids
      .filter(n => !excludeIds.has(String(n.id)))
      // allow excluding specific talk ids (works if talkId was propagated or can be parsed from the link)
      .filter(n => {
        const tid = extractTalkId(n);
        return !(tid && excludeTalkIds.has(String(tid)));
      })
      // optional custom predicate from caller
      .filter(n => (excludePredicate ? !excludePredicate(n) : true));

    return filtered.slice(0, limit);
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NewsGenerator;
}
