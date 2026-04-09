/* ============================================
   GRACIAS-LLAMADA.JS — Entrance Animations
   Thank-you page after booking an AI Agency Accelerator call
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

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

  const heroBadge = document.querySelector('.gracias-hero .hero__badge');
  if (heroBadge) {
    tl.fromTo(heroBadge,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5 }, 0.15);
  }

  tl.fromTo('.gracias-hero__line2',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.7 }, 0.3)
    .fromTo('.gracias-hero__subtitle',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 }, 0.5);

  const heroVideo = document.querySelector('.gracias-hero .gracias-video');
  if (heroVideo) {
    tl.fromTo(heroVideo,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 }, 0.65);
  }

  const reveals = document.querySelectorAll('.gracias-reveal');
  reveals.forEach((el) => {
    // Skip the hero video since it's handled in the intro timeline
    if (el.classList.contains('gracias-video') && el.closest('.gracias-hero')) return;
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
