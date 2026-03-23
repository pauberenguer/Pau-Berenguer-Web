/* ============================================
   MAIN.JS — GSAP Animations & Interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  /* ------------------------------------------------
     CONFIG — Editable dates
     ------------------------------------------------ */
  const CONFIG = {
    dia: 'Sábado',
    fecha: 'Sábado, 5 de Abril',
    hora_espana: '19:00',
    hora_mexico: '12:00',
    hora_argentina: '14:00'
  };

  const dateEl = document.getElementById('detail-date');
  const timeEl = document.getElementById('detail-time');
  if (dateEl) dateEl.textContent = CONFIG.fecha;
  if (timeEl) timeEl.textContent = `${CONFIG.hora_espana}h España`;

  /* ------------------------------------------------
     NAVBAR — Morphing on scroll
     ------------------------------------------------ */
  const navbar = document.getElementById('navbar');
  const hero = document.getElementById('hero');

  if (navbar && hero) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        navbar.classList.toggle('scrolled', !entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(hero);
  }

  /* ------------------------------------------------
     HERO — Stagger entrance
     ------------------------------------------------ */
  const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  heroTl
    .to('.hero__badge', { opacity: 1, y: 0, duration: 0.8 }, 0.3)
    .fromTo('.hero__title-line1',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9 }, 0.5)
    .fromTo('.hero__title-line2',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9 }, 0.7)
    .fromTo('.hero__subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }, 0.9)
    .fromTo('.hero__form-side',
      { opacity: 0, x: 40 },
      { opacity: 1, x: 0, duration: 1 }, 0.7);

  /* ------------------------------------------------
     SCROLL REVEAL — Generic .reveal elements
     ------------------------------------------------ */
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el, i) => {
    gsap.fromTo(el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        }
      }
    );
  });

  /* ------------------------------------------------
     PHILOSOPHY — Parallax texture
     ------------------------------------------------ */
  const philTexture = document.getElementById('philosophy-texture');
  if (philTexture) {
    gsap.fromTo(philTexture,
      { y: -60 },
      {
        y: 60,
        ease: 'none',
        scrollTrigger: {
          trigger: '#philosophy',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1
        }
      }
    );
  }

  /* ------------------------------------------------
     STACKING CARDS — Pin & stack effect
     ------------------------------------------------ */
  const stackCards = document.querySelectorAll('.stacking-card');
  stackCards.forEach((card, i) => {
    if (i < stackCards.length - 1) {
      ScrollTrigger.create({
        trigger: card,
        start: 'top top',
        end: '+=100%',
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(card, {
            scale: 1 - (p * 0.08),
            filter: `blur(${p * 12}px)`,
            opacity: 1 - (p * 0.4)
          });
        }
      });
    }
  });

  /* ------------------------------------------------
     FAQ — Accordion
     ------------------------------------------------ */
  const faqItems = document.querySelectorAll('.faq__item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');
    const inner = item.querySelector('.faq__answer-inner');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
          other.querySelector('.faq__answer').style.maxHeight = '0';
        }
      });

      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = '0';
      } else {
        item.classList.add('active');
        answer.style.maxHeight = inner.scrollHeight + 'px';
      }
    });
  });

  /* ------------------------------------------------
     CARD 1: Diagnostic Shuffler
     ------------------------------------------------ */
  const shufflerEl = document.getElementById('shuffler');
  if (shufflerEl) {
    const cards = Array.from(shufflerEl.querySelectorAll('.shuffler-card'));
    let currentOrder = [0, 1, 2];

    function positionShufflerCards() {
      currentOrder.forEach((idx, position) => {
        const card = cards[idx];
        const yOffset = position * 28;
        const scale = 1 - (position * 0.04);
        const zIndex = cards.length - position;
        const opacity = 1 - (position * 0.2);

        gsap.to(card, {
          y: yOffset,
          scale: scale,
          zIndex: zIndex,
          opacity: opacity,
          duration: 0.6,
          ease: 'back.out(1.4)'
        });
      });
    }

    positionShufflerCards();

    setInterval(() => {
      currentOrder.push(currentOrder.shift());
      positionShufflerCards();
    }, 3000);
  }

  /* ------------------------------------------------
     CARD 2: Telemetry Typewriter
     ------------------------------------------------ */
  const typewriterEl = document.getElementById('typewriter-text');
  if (typewriterEl) {
    const messages = [
      '> Probando ChatGPT... otra vez... sin resultados claros',
      '> Vídeo de N8N: "Automatiza todo en 10 min" — mentira',
      '> ERROR: No sé por dónde empezar con tantas opciones',
      '> Descargando curso #47 de IA... este sí será el bueno',
      '> Tutorial completado. Resultado: ninguno. Como siempre.',
      '> Nueva herramienta de IA: ¿otra vez? Ya van 15 este mes',
      '> Buscando: "cómo monetizar IA en 2026 sin perder tiempo"',
      '> Cursor, Claude, ChatGPT, N8N... ¿cuál uso para empezar?',
      '> WARNING: Parálisis por análisis detectada en el sistema',
      '> SOLUCIÓN: Clase en directo con Pau — Regístrate gratis →'
    ];

    let msgIndex = 0;
    let charIndex = 0;
    let currentLine = '';
    let lines = [];

    function typeChar() {
      if (charIndex < messages[msgIndex].length) {
        currentLine += messages[msgIndex][charIndex];
        charIndex++;
        renderTypewriter();
        setTimeout(typeChar, 30 + Math.random() * 40);
      } else {
        lines.push(currentLine);
        if (lines.length > 3) lines.shift();
        currentLine = '';
        charIndex = 0;
        msgIndex = (msgIndex + 1) % messages.length;
        setTimeout(typeChar, 1200);
      }
    }

    function renderTypewriter() {
      let slots = '';
      slots += lines.map(l => `<div style="opacity:0.5">${l}</div>`).join('');
      slots += '<div>' + currentLine + '<span class="typewriter-cursor"></span></div>';
      for (let i = 0; i < 3 - lines.length; i++) {
        slots += '<div></div>';
      }
      typewriterEl.innerHTML = slots;
    }

    setTimeout(typeChar, 1000);
  }

  /* ------------------------------------------------
     CARD 3: Cursor Protocol Scheduler
     ------------------------------------------------ */
  const schedulerEl = document.getElementById('scheduler');
  if (schedulerEl) {
    const cursor = document.getElementById('scheduler-cursor');
    const days = schedulerEl.querySelectorAll('.scheduler-day');
    const saveBtn = document.getElementById('scheduler-save');
    const targetDay = days[5];

    function runSchedulerAnimation() {
      days.forEach(d => d.classList.remove('active'));
      if (saveBtn) saveBtn.classList.remove('active');

      const tl = gsap.timeline({ onComplete: () => setTimeout(runSchedulerAnimation, 2000) });

      const schedulerRect = schedulerEl.getBoundingClientRect();
      const dayRect = targetDay.getBoundingClientRect();
      const startX = -20;
      const startY = -20;
      const dayX = dayRect.left - schedulerRect.left + dayRect.width / 2;
      const dayY = dayRect.top - schedulerRect.top + dayRect.height / 2;

      const saveBtnRect = saveBtn.getBoundingClientRect();
      const saveBtnX = saveBtnRect.left - schedulerRect.left + saveBtnRect.width / 2;
      const saveBtnY = saveBtnRect.top - schedulerRect.top + saveBtnRect.height / 2;

      tl.set(cursor, { x: startX, y: startY, opacity: 0 })
        .to(cursor, { opacity: 1, duration: 0.3 })
        .to(cursor, { x: dayX, y: dayY, duration: 0.8, ease: 'power2.inOut' })
        .to(targetDay, { scale: 0.9, duration: 0.1 })
        .to(targetDay, { scale: 1, duration: 0.2 }, '+=0.05')
        .call(() => { targetDay.classList.add('active'); })
        .to(cursor, {
          x: saveBtnX,
          y: saveBtnY,
          duration: 0.6,
          ease: 'power2.inOut'
        }, '+=0.3')
        .to(saveBtn, { scale: 0.95, duration: 0.1 })
        .to(saveBtn, { scale: 1, duration: 0.2 }, '+=0.05')
        .call(() => { if (saveBtn) saveBtn.classList.add('active'); })
        .to(cursor, { opacity: 0, duration: 0.4 }, '+=0.5');
    }

    setTimeout(runSchedulerAnimation, 2000);
  }

  /* ------------------------------------------------
     SMOOTH SCROLL — for anchor links
     ------------------------------------------------ */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ------------------------------------------------
     HASH NAVIGATION — Scroll to section on page load
     ------------------------------------------------ */
  if (window.location.hash) {
    const hashTarget = document.querySelector(window.location.hash);
    if (hashTarget) {
      window.scrollTo(0, 0);
      setTimeout(() => {
        hashTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 600);
    }
  }

  /* ------------------------------------------------
     FORM — Prevent default (placeholder for GHL)
     ------------------------------------------------ */
  /* Form handling is now in components.js */
});
