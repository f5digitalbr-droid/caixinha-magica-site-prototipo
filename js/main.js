// Caixinha Mágica Presentes — interações leves
// No Elementor, isso equivale a: Motion Effects (entrance animations) nos containers.

// Revelar seções ao rolar
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll('.revela').forEach((el) => observer.observe(el));

// Ano automático no rodapé
const ano = document.getElementById('ano-atual');
if (ano) ano.textContent = new Date().getFullYear();

// Menu mobile: fechar ao clicar em link + acessível por teclado
// (no Elementor o menu hambúrguer nativo já cobre isso)
const toggle = document.getElementById('nav-toggle');
const toggleLabel = document.querySelector('.nav-toggle-label');
document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => { if (toggle) toggle.checked = false; });
});
if (toggle && toggleLabel) {
  toggleLabel.setAttribute('role', 'button');
  toggleLabel.setAttribute('tabindex', '0');
  const sincroniza = () => toggleLabel.setAttribute('aria-expanded', String(toggle.checked));
  sincroniza();
  toggle.addEventListener('change', sincroniza);
  toggleLabel.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle.checked = !toggle.checked;
      sincroniza();
    }
  });
}
