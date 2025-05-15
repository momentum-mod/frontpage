document
  .getElementById('Copyright')
  .appendChild(document.createTextNode(new Date().getFullYear().toString()));

const heroChevron = document.querySelector<HTMLLinkElement>('#HeroChevron');
document.addEventListener('scroll', () => {
  heroChevron.style.opacity = Math.max(1 - window.scrollY / 200, 0).toString();
});
