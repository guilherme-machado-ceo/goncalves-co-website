document.addEventListener('DOMContentLoaded', function () {
  initNavbarScroll();
  initScrollAnimations();
  initSmoothScroll();
  initContactForm();
});

function initNavbarScroll() {
  const nav = document.querySelector('.main-nav');
  if (!nav) return;

  function onScroll() {
    if (window.scrollY > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initScrollAnimations() {
  const targets = document.querySelectorAll('.fade-in-up');
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });

      // Close mobile navbar if open
      const navCollapse = document.querySelector('.navbar-collapse.show');
      if (navCollapse) {
        const toggler = document.querySelector('.navbar-toggler');
        if (toggler) toggler.click();
      }
    });
  });
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');
  if (!form || !feedback) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = form.querySelector('#contact-name').value.trim();
    const email = form.querySelector('#contact-email').value.trim();
    const message = form.querySelector('#contact-message').value.trim();

    if (!name || !email || !message) {
      feedback.textContent = 'Por favor, preencha os campos obrigatórios.';
      feedback.style.color = '#ef4444';
      return;
    }

    feedback.textContent = 'Mensagem enviada! Retornaremos em breve.';
    feedback.style.color = 'var(--color-accent)';
    form.reset();
  });
}
