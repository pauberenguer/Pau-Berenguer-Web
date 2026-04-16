/* ============================================
   THEME SWITCHER — Live preview of 4 presets
   ============================================ */

(function() {
  const THEMES = {
    a: { name: 'Organic Tech', heroLight: true },
    b: { name: 'Midnight Luxe', heroLight: true },
    c: { name: 'Brutalist Signal', heroLight: true },
    d: { name: 'Vapor Clinic', heroLight: true }
  };

  function getStoredTheme() {
    try { return localStorage.getItem('pau-theme') || 'd'; }
    catch { return 'd'; }
  }

  function setTheme(themeKey) {
    document.documentElement.setAttribute('data-theme', themeKey);

    try { localStorage.setItem('pau-theme', themeKey); }
    catch {}

    const buttons = document.querySelectorAll('.theme-switcher__btn');
    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === themeKey);
    });

    if (typeof ScrollTrigger !== 'undefined') {
      setTimeout(() => ScrollTrigger.refresh(), 100);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    const stored = getStoredTheme();
    setTheme(stored);

    const switcher = document.getElementById('theme-switcher');
    if (!switcher) return;

    switcher.addEventListener('click', (e) => {
      const btn = e.target.closest('.theme-switcher__btn');
      if (!btn) return;

      const themeKey = btn.dataset.theme;
      if (!THEMES[themeKey]) return;

      document.documentElement.style.transition = 'none';
      document.body.style.transition = 'none';

      setTheme(themeKey);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.documentElement.style.transition = '';
          document.body.style.transition = '';
        });
      });
    });
  });
})();
