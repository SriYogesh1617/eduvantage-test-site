// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav_toggle');
const navMenu = document.querySelector('.nav_menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Active Tab Indication
function setActiveTab() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', setActiveTab);

// Dropdown Toggle
const dropdownButtons = document.querySelectorAll('.dropdown_button');
dropdownButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const dropdownContainer = button.querySelector('.dropdown_container');
    dropdownContainer.style.display =
      dropdownContainer.style.display === 'block' ? 'none' : 'block';
  });
});

// Close Dropdown When Clicking Outside
document.addEventListener('click', () => {
  const dropdowns = document.querySelectorAll('.dropdown_container');
  dropdowns.forEach((dropdown) => (dropdown.style.display = 'none'));
});
