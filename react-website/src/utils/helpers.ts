import DOMPurify from 'dompurify';

/**
 * Sanitize HTML content to prevent XSS attacks
 */
export const sanitizeHTML = (dirty: string): string => {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href', 'target', 'rel']
  });
};

/**
 * Format a date string to a readable format
 */
export const formatDate = (dateString: string, includeDay: boolean = false): string => {
  const date = new Date(dateString);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                 'July', 'August', 'September', 'October', 'November', 'December'];
  
  if (includeDay) {
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }
  return `${months[date.getMonth()]} ${date.getFullYear()}`;
};

/**
 * Create a safe external link with proper security attributes
 */
export const createSafeLink = (url: string, text: string): string => {
  const sanitizedUrl = sanitizeHTML(url);
  const sanitizedText = sanitizeHTML(text);
  return `<a href="${sanitizedUrl}" target="_blank" rel="noopener noreferrer">${sanitizedText}</a>`;
};

/**
 * Truncate text to a specified length with ellipsis
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};

/**
 * Group items by year
 */
export const groupByYear = <T extends { year?: number; date?: string }>(
  items: T[]
): Record<string, T[]> => {
  const grouped: Record<string, T[]> = {};
  
  items.forEach(item => {
    const year = String(item.year || new Date(item.date || '').getFullYear());
    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(item);
  });
  
  return grouped;
};

/**
 * Scroll to top of page smoothly
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
