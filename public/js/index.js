document.addEventListener('DOMContentLoaded', function () {
  // --- Selectors ---
  const yearSpan = document.getElementById('year');
  const clickableImages = document.querySelectorAll('.clickable-image');
  const modal = document.getElementById('imageModal');
  const mockupCounter = document.getElementById('mockupCounter');
  const trackedForms = document.querySelectorAll('form[data-ga-submit]');

  // --- GA helpers ---
  function trackEvent(name, params) {
    if (!name || typeof globalThis.gtag !== 'function') return;
    globalThis.gtag('event', name, params || {});
  }

  function getGaParams(element) {
    const params = {};
    Object.entries(element.dataset).forEach(function (entry) {
      const key = entry[0];
      const value = entry[1];
      if (!value) return;
      if (!key.startsWith('ga') || key === 'gaEvent' || key === 'gaSubmit') return;
      const paramKey = key.charAt(2).toLowerCase() + key.slice(3);
      params[paramKey] = value;
    });
    return params;
  }

  // --- GA click tracking ---
  document.addEventListener('click', function (event) {
    const trackedElement = event.target.closest('[data-ga-event]');
    if (!trackedElement) return;
    trackEvent(trackedElement.dataset.gaEvent, getGaParams(trackedElement));
  });

  // --- GA form submit tracking ---
  trackedForms.forEach(function (form) {
    form.addEventListener('submit', function (event) {
      const eventName = form.dataset.gaSubmit;
      if (!eventName || typeof globalThis.gtag !== 'function') return;

      event.preventDefault();
      let hasSubmitted = false;

      const submitForm = function () {
        if (hasSubmitted) return;
        hasSubmitted = true;
        form.submit();
      };

      globalThis.gtag('event', eventName, {
        ...getGaParams(form),
        event_callback: submitForm,
        event_timeout: 1200,
      });

      globalThis.setTimeout(submitForm, 1300);
    });
  });

  // --- Image modal ---
  clickableImages.forEach(function (img) {
    img.addEventListener('click', function () {
      openModal(this.getAttribute('src'));
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal || e.target.closest('.close')) closeModal();
    });
  }

  // --- Dynamic year ---
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // --- Intersection Observer (fade animations) ---
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  });

  document.querySelectorAll('.fade').forEach(function (el) {
    observer.observe(el);
  });

  // --- Mockup counter ---
  const counterMessages = ['+1 cita confirmada', '+2 leads cualificados', '+1 WhatsApp resuelto'];
  let counterIndex = 0;
  if (mockupCounter) {
    setInterval(function () {
      counterIndex = (counterIndex + 1) % counterMessages.length;
      mockupCounter.textContent = counterMessages[counterIndex];
    }, 2800);
  }
});

// --- Global modal functions ---
function openModal(src) {
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  if (modal && modalImg) {
    modal.style.display = 'flex';
    modalImg.src = src;
    document.body.style.overflow = 'hidden';
  }
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
}
