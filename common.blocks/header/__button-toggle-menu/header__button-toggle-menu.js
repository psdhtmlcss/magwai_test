const buttonToggleMenu = document.querySelector('.header__button-toggle-menu');
const headerNav = document.querySelector('.header__nav');

const onButtonToggleMenu = (evt) => {
  evt.preventDefault;
  evt.currentTarget.classList.toggle('header__button-toggle-menu_active');
  headerNav.classList.toggle('header__nav_show');
}

buttonToggleMenu.addEventListener('click', onButtonToggleMenu);