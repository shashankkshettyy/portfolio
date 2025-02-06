function toggleMenu() {
  const menuLinks = document.querySelector('.menu-links');
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  menuLinks.classList.toggle('open');
  hamburgerIcon.classList.toggle('open');
  
  // Toggle aria-expanded for accessibility
  const isExpanded = hamburgerIcon.getAttribute('aria-expanded') === 'true';
  hamburgerIcon.setAttribute('aria-expanded', !isExpanded);
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  const hamburgerNav = document.querySelector('#hamburger-nav');
  if (!hamburgerNav.contains(e.target)) {
    document.querySelector('.menu-links').classList.remove('open');
    document.querySelector('.hamburger-icon').classList.remove('open');
  }
});
