const headerButtons = document.querySelector('.header__buttons');
const headerNav = document.querySelector('.header__nav');

if (screen.width < 768) {
  headerNav.append(headerButtons);
}