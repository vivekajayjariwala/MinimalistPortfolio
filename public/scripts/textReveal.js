// src/scripts/textReveal.js
export function setupTextAnimation() {
  const animatedElements = document.querySelectorAll('.animate-text');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
      }
    });
  }, { threshold: 0.1 });

  animatedElements.forEach((el) => observer.observe(el));
}
