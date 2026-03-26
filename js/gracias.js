/* ============================================
   GRACIAS.JS — Countdown & Entrance Animations
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ------------------------------------------------
     COUNTDOWN — Target: Martes 7 Abril 2026, 19:00 CEST
     ------------------------------------------------ */
  const EVENT_DATE = new Date('2026-04-07T19:00:00+02:00');

  const cdDays = document.getElementById('cd-days');
  const cdHours = document.getElementById('cd-hours');
  const cdMins = document.getElementById('cd-mins');
  const cdSecs = document.getElementById('cd-secs');

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function updateCountdown() {
    const now = new Date();
    let diff = EVENT_DATE - now;

    if (diff <= 0) {
      if (cdDays) cdDays.textContent = '00';
      if (cdHours) cdHours.textContent = '00';
      if (cdMins) cdMins.textContent = '00';
      if (cdSecs) cdSecs.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * 1000 * 60 * 60 * 24;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * 1000 * 60 * 60;
    const mins = Math.floor(diff / (1000 * 60));
    diff -= mins * 1000 * 60;
    const secs = Math.floor(diff / 1000);

    if (cdDays) cdDays.textContent = pad(days);
    if (cdHours) cdHours.textContent = pad(hours);
    if (cdMins) cdMins.textContent = pad(mins);
    if (cdSecs) cdSecs.textContent = pad(secs);
  }

  if (cdDays) {
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  /* ------------------------------------------------
     NAVBAR — Morphing on scroll
     ------------------------------------------------ */
  const navbar = document.getElementById('navbar');
  const heroSection = document.querySelector('.gracias-hero');

  if (navbar && heroSection) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        navbar.classList.toggle('scrolled', !entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    observer.observe(heroSection);
  }

  /* ------------------------------------------------
     GSAP — Entrance animations
     ------------------------------------------------ */
  if (typeof gsap === 'undefined') return;
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  const check = document.getElementById('gracias-check');
  if (check) {
    tl.to(check, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: 'back.out(1.7)',
      onComplete: () => check.classList.add('animated')
    }, 0.1);
  }

  tl.fromTo('.gracias-hero__line1',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 }, 0.3)
    .fromTo('.gracias-hero__line2',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 }, 0.45)
    .fromTo('.gracias-hero__subtitle',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 }, 0.6);

  const reveals = document.querySelectorAll('.gracias-reveal');
  reveals.forEach((el) => {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none'
      }
    });
  });
});
