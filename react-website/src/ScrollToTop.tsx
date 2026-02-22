// ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation, NavigationType } from 'react-router-dom';

export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // If you're using hash/anchor links, let those handle their own scroll
    if (location.hash) return;

    // Scroll to the very top on push/replace navigations
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]); // run on path change; ignore queries unless you want to include location.search

  return null;
}