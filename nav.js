// file: nav.js
(function () {
    // Wait until DOM is ready to ensure #navToggle and #primaryNav exist
    function init() {
      const toggle = document.getElementById('navToggle');
      const menu = document.getElementById('primaryNav');
  
      // If a page doesn't have this nav, exit gracefully
      if (!toggle || !menu) return;
  
      function openMenu() {
        toggle.setAttribute('aria-expanded', 'true');
        menu.removeAttribute('hidden');
        document.body.classList.add('no-scroll');
      }
  
      function closeMenu() {
        toggle.setAttribute('aria-expanded', 'false');
        menu.setAttribute('hidden', '');
        document.body.classList.remove('no-scroll');
      }
  
      // Toggle click
      toggle.addEventListener('click', () => {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        isOpen ? closeMenu() : openMenu();
      });
  
      // Close when a link is clicked
      menu.addEventListener('click', (e) => {
        if (e.target.closest('a')) closeMenu();
      });
  
      // Close on ESC
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
      });
  
      // Ensure correct state on resize (desktop vs mobile)
      const mql = window.matchMedia('(min-width: 969px)');
  
      const handleChange = (ev) => {
        if (ev.matches) {
          // Desktop: inline menu visible
          menu.removeAttribute('hidden');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('no-scroll');
        } else {
          // Mobile: menu starts closed
          menu.setAttribute('hidden', '');
          toggle.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('no-scroll');
        }
      };
  
      // Initialize once, then listen for changes
      handleChange(mql);
  
      // Safari compatibility: older Safari uses addListener/removeListener
      if (typeof mql.addEventListener === 'function') {
        mql.addEventListener('change', handleChange);
      } else if (typeof mql.addListener === 'function') {
        mql.addListener(handleChange);
      }
    }
  
    // If the script is loaded with defer (recommended), DOM is ready by the time
    // this runs; still guard for safety across pages.
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init, { once: true });
    } else {
      init();
    }
  })();