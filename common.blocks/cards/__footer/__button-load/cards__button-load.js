const URL = 'https://jsonplaceholder.typicode.com/posts';
const LOAD_LIMIT = 5;
const CARDS_LIMIT = 30;
const BUTTON_LOAD_TEXT = 'Loading...';
const cards = document.querySelector('.cards');
const cardsItems = cards.querySelector('.cards__items');
const buttonLoad = cards.querySelector('.cards__button-load');
const buttonLoadTextDefault = buttonLoad.querySelector('.button-primary__text').textContent;
const buttonLoadTextContainer = buttonLoad.querySelector('.button-primary__text');

const checkCards = () => {
  const cardsCount = cards.querySelectorAll('.cards__item').length;
  cardsCount === CARDS_LIMIT ? buttonLoad.classList.add('button-primary_hidden') : buttonLoad.classList.remove('button-primary_hidden');
};

const createCard = (data) => {
  return `
    <article class="card cards__item">
      <figure class="card__image-wrapper"><img src="./card__image.webp" alt="Image" class="card__image"></figure>
      <div class="card__body">
        <h3 class="card__title">${data.title}</h3>
        <p class="card__text card__text_large">How to increase your productivity with a Music</p>
        <p class="card__text card__text_overflow">${data.body}</p>
        <div class="card__posted">Posted by <strong>Eugenia</strong>, on July  24, 2019</div>
        <button type="button" class="button-secondary card__button">Continue reading</button>
      </div>
    </article>
  `
};

const renderCards = (data) => {
  data.forEach((item) => {
    cardsItems.insertAdjacentHTML('beforeend', createCard(item));
  })
  checkCards();
};

const disableButtonLoad = () => {
  buttonLoadTextContainer.textContent = BUTTON_LOAD_TEXT;
  buttonLoad.disabled = true;
};

const enableButtonLoad = () => {
  buttonLoadTextContainer.textContent = buttonLoadTextDefault;
  buttonLoad.disabled = false;
};

const onButtonLoadClick = (evt) => {
  evt.preventDefault();
  disableButtonLoad();
  fetch(`${URL}?_limit=${LOAD_LIMIT}`)
    .then((response) => response.json())
    .then((json) => renderCards(json))
    .catch((err) => alert(err))
    .finally(() => {
      enableButtonLoad();
    });
};

buttonLoad.addEventListener('click', onButtonLoadClick);