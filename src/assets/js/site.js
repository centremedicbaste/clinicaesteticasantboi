/* Clínica Estética Sant Boi · Site JS */
(function () {
  'use strict';

  const html = document.documentElement;
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-menu-toggle]');
  const mobile = document.querySelector('[data-mobile-menu]');

  /* Mobile menu */
  if (toggle && mobile) {
    toggle.addEventListener('click', () => {
      const open = html.classList.toggle('is-menu-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      mobile.hidden = !open;
      document.body.style.overflow = open ? 'hidden' : '';
    });
    mobile.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        html.classList.remove('is-menu-open');
        mobile.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* Header on scroll */
  let lastScroll = 0;
  const onScroll = () => {
    const y = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', y > 12);
    lastScroll = y;
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Fade-in observer */
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in-view');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });
    document.querySelectorAll('.fade-in').forEach((el) => io.observe(el));
  } else {
    document.querySelectorAll('.fade-in').forEach((el) => el.classList.add('in-view'));
  }
})();
