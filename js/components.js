/* ============================================
   COMPONENTS.JS — Reusable UI Components
   ============================================ */

const Components = {

  COUNTRY_CODES: [
    { code: '+34', label: '\u{1F1EA}\u{1F1F8} +34', flag: '\u{1F1EA}\u{1F1F8}' },
    { code: '+52', label: '\u{1F1F2}\u{1F1FD} +52', flag: '\u{1F1F2}\u{1F1FD}' },
    { code: '+54', label: '\u{1F1E6}\u{1F1F7} +54', flag: '\u{1F1E6}\u{1F1F7}' },
    { code: '+57', label: '\u{1F1E8}\u{1F1F4} +57', flag: '\u{1F1E8}\u{1F1F4}' },
    { code: '+56', label: '\u{1F1E8}\u{1F1F1} +56', flag: '\u{1F1E8}\u{1F1F1}' },
    { code: '+51', label: '\u{1F1F5}\u{1F1EA} +51', flag: '\u{1F1F5}\u{1F1EA}' },
    { code: '+593', label: '\u{1F1EA}\u{1F1E8} +593', flag: '\u{1F1EA}\u{1F1E8}' },
    { code: '+598', label: '\u{1F1FA}\u{1F1FE} +598', flag: '\u{1F1FA}\u{1F1FE}' },
    { code: '+1', label: '\u{1F1FA}\u{1F1F8} +1', flag: '\u{1F1FA}\u{1F1F8}' },
    { code: '+44', label: '\u{1F1EC}\u{1F1E7} +44', flag: '\u{1F1EC}\u{1F1E7}' },
    { code: '+49', label: '\u{1F1E9}\u{1F1EA} +49', flag: '\u{1F1E9}\u{1F1EA}' },
    { code: '+33', label: '\u{1F1EB}\u{1F1F7} +33', flag: '\u{1F1EB}\u{1F1F7}' },
    { code: '+39', label: '\u{1F1EE}\u{1F1F9} +39', flag: '\u{1F1EE}\u{1F1F9}' },
    { code: '+351', label: '\u{1F1F5}\u{1F1F9} +351', flag: '\u{1F1F5}\u{1F1F9}' },
    { code: '+55', label: '\u{1F1E7}\u{1F1F7} +55', flag: '\u{1F1E7}\u{1F1F7}' },
  ],

  SOCIAL_LINKS: [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@PauBerenguerAI',
      svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/pauberenguer-ai/',
      svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/pauberenguer_/',
      svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>'
    },
    {
      name: 'Skool',
      url: 'https://www.skool.com/the-ai-blueprint-plus',
      svg: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/></svg>'
    }
  ],

  createRegistrationForm(containerId, variant = 'default') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const isHero = variant === 'hero';
    const isDark = variant === 'dark';
    const formClass = isHero ? 'reg-form reg-form--hero' : isDark ? 'reg-form reg-form--dark' : 'reg-form';

    const optionsHTML = this.COUNTRY_CODES.map(c =>
      `<option value="${c.code}" ${c.code === '+34' ? 'selected' : ''}>${c.label}</option>`
    ).join('');

    container.innerHTML = `
      <form class="${formClass}" action="TU_WEBHOOK_GHL_AQUI" method="POST">
        <div class="reg-form__field">
          <label class="reg-form__label">Nombre</label>
          <input type="text" name="name" class="reg-form__input" placeholder="Tu nombre completo" required>
        </div>
        <div class="reg-form__field">
          <label class="reg-form__label">Email</label>
          <input type="email" name="email" class="reg-form__input" placeholder="tu@email.com" required>
        </div>
        <div class="reg-form__field">
          <label class="reg-form__label">Teléfono</label>
          <div class="reg-form__phone">
            <select name="country_code" class="reg-form__select">${optionsHTML}</select>
            <input type="tel" name="phone" class="reg-form__input reg-form__input--phone" placeholder="612 345 678" required>
          </div>
        </div>
        <button type="submit" class="reg-form__submit">
          <span class="btn-bg"></span>
          <span class="reg-form__submit-text">Reserva Tu Plaza Gratis</span>
        </button>
      </form>
    `;

    const form = container.querySelector('form');
    if (form.action.includes('TU_WEBHOOK_GHL_AQUI')) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('.reg-form__submit');
        const textEl = form.querySelector('.reg-form__submit-text');
        const original = textEl.textContent;
        textEl.textContent = 'Registrado -- Te enviaremos el enlace';
        btn.style.opacity = '0.7';
        btn.disabled = true;
        setTimeout(() => {
          textEl.textContent = original;
          btn.style.opacity = '1';
          btn.disabled = false;
          form.reset();
        }, 3000);
      });
    }
  },

  createSocialLinks(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = this.SOCIAL_LINKS.map(link =>
      `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-link" title="${link.name}">${link.svg}</a>`
    ).join('');
  },

  init() {
    document.querySelectorAll('[data-component="registration-form"]').forEach(el => {
      this.createRegistrationForm(el.id, el.dataset.variant || 'default');
    });

    document.querySelectorAll('[data-component="social-links"]').forEach(el => {
      this.createSocialLinks(el.id);
    });
  }
};

document.addEventListener('DOMContentLoaded', () => Components.init());
