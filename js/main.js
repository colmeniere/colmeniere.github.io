/* ============================================
   LA COLMENA CIA — main.js
   ============================================ */

(function () {
  'use strict';

  /* ---- NAV SCROLL ---- */
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }, { passive: true });
  }

  /* ---- MOBILE BURGER ---- */
  const burger = document.querySelector('.nav__burger');
  const mobileNav = document.querySelector('.nav__mobile');
  if (burger && mobileNav) {
    burger.addEventListener('click', () => {
      burger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        burger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---- ACTIVE NAV LINK ---- */
  const path = window.location.pathname;
  document.querySelectorAll('.nav__links a, .nav__mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (href && path.includes(href) && href !== '/' && href !== 'index.html') {
      a.classList.add('active');
    }
    if ((path === '/' || path.endsWith('index.html')) && (href === '/' || href === 'index.html' || href === './')) {
      a.classList.add('active');
    }
  });

  /* ---- SCROLL REVEAL ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  /* ---- LIGHTBOX ---- */
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = lightbox && lightbox.querySelector('img');
  if (lightbox) {
    document.querySelectorAll('.gallery-grid img').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });
    lightbox.addEventListener('click', e => {
      if (e.target === lightbox || e.target.classList.contains('lightbox__close')) {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) {
        lightbox.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ---- FILTER BUTTONS (repertorio) ---- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        document.querySelectorAll('.obra-card').forEach(card => {
          if (filter === 'all' || card.dataset.estado === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ---- CONTACT FORM (static feedback) ---- */
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const orig = btn.textContent;
      btn.textContent = 'Mensaje enviado ✓';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = orig;
        btn.disabled = false;
        form.reset();
      }, 3000);
    });
  }

  /* ---- STAGGER REVEAL for grids ---- */
  document.querySelectorAll('.obras-grid, .press-grid, .downloads-grid, .team-grid').forEach(grid => {
    Array.from(grid.children).forEach((child, i) => {
      child.style.transitionDelay = `${i * 0.07}s`;
      child.classList.add('reveal');
    });
  });
  // Re-observe after adding classes
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    if (typeof IntersectionObserver !== 'undefined') {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
      obs.observe(el);
    } else {
      el.classList.add('visible');
    }
  });

})();
