const buttonToggleMenu = document.querySelector('.header__button-toggle-menu');
const headerNav = document.querySelector('.header__nav');
const pageBody = document.querySelector('.page__body');

const onButtonToggleMenu = (evt) => {
  evt.preventDefault;
  evt.currentTarget.classList.toggle('header__button-toggle-menu_active');
  headerNav.classList.toggle('header__nav_show');
  pageBody.classList.toggle('page__body_overflow_hidden');
}

buttonToggleMenu.addEventListener('click', onButtonToggleMenu);