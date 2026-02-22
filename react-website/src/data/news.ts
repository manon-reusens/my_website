import { publicationsData } from './publications';
import { talksData } from './talks';
import type { NewsItem, FilterOptions } from '../types';

export const NewsGenerator = {
  generateAll: (): NewsItem[] => {
    const news: NewsItem[] = [];

    // Publications -> news
    publicationsData.forEach(pub => {
      if (pub.type === 'preprint') return; // Skip preprints for news

      news.push({
        id: `pub-${pub.id}`,
        date: NewsGenerator.formatDate(pub.date),
        title: `${pub.venueType} ${pub.type === 'thesis' ? 'Defense' : 'Acceptance'}: ${pub.venue}`,
        description: `"${pub.title}" ${pub.type === 'thesis' ? 'successfully defended' : 'accepted'}${pub.venue.includes('Findings') ? ' at ' + pub.venue : ' in ' + pub.venue}.`,
        type: "publication",
        link: pub.links?.paper || pub.links?.arxiv || "",
        sortDate: pub.date
      });
    });

    // Talks -> news (Keynotes + Invited Talks + Conference Presentations)
    talksData.forEach(talk => {
      if (talk.type === 'Keynote' || talk.type === 'Invited Talk' || talk.type === 'Conference Presentation') {
        news.push({
          id: `talk-${talk.id}`,
          date: NewsGenerator.formatDate(talk.date),
          title: `${talk.type}: ${talk.event}`,
          description: (talk.description || '').substring(0, 200) + (talk.description && talk.description.length > 200 ? '...' : ''),
          type: "talk",
          link: `/talks#${talk.id}`,
          sortDate: talk.date,
          talkId: talk.id,
          hiddenFromNews: !!talk.hiddenFromNews
        });
      }
    });

    // Sort by date (most recent first)
    news.sort((a, b) => new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime());

    return news;
  },
 
  formatDate: (dateString: string): string => {
    const date = new Date(dateString);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  },
  
  getRecent: (limit: number = 4, opts: FilterOptions = {}): NewsItem[] => {
    const excludeTalkIds = new Set((opts.excludeTalkIds || []).map(String));
    const excludeIds = new Set((opts.excludeIds || []).map(String));
    const excludePredicate = typeof opts.excludePredicate === 'function' ? opts.excludePredicate : null;

    // Helper: try to extract talkId from the link if not provided
    const extractTalkId = (n: NewsItem) => {
      if (n.talkId) return String(n.talkId);
      if (typeof n.link === 'string') {
        const m = n.link.match(/talk\/([^&#/]+)/i);
        if (m && m[1]) return decodeURIComponent(m[1]);
      }
      return undefined;
    };

    const all = NewsGenerator.generateAll();

    const filtered = all
      .filter(n => !n.hiddenFromNews)
      .filter(n => !excludeIds.has(String(n.id)))
      .filter(n => {
        const tid = extractTalkId(n);
        return !(tid && excludeTalkIds.has(String(tid)));
      })
      .filter(n => (excludePredicate ? !excludePredicate(n) : true));

    return filtered.slice(0, limit);
  }
};
