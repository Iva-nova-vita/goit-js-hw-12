import fetchPhotosByQuery from './js/pixabay-api';
import showNotification from './js/notifications';
import renderGallery from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const formEl = document.querySelector('.form');
const ulEl = document.querySelector('.cards');
const loaderEl = document.querySelector('.loader');
const loadMoreEl = document.querySelector('.load-more');

const perPage = 15;
let page = 1;
let totalPages = null;
let querySearch = '';
let lightbox = new SimpleLightbox('.cards a', { captionsData: 'alt' });

formEl.addEventListener('submit', e => {
  e.preventDefault();
  querySearch = formEl.elements.search.value.trim();
  if (!querySearch) {
    showNotification('Sorry, the query field can not be empty');
    return;
  }

  ulEl.innerHTML = '';
  page = 1;
  formEl.reset();
  showPhotosByQuery();
});

loadMoreEl.addEventListener('click', () => {
  showPhotosByQuery();

  const cardEl = document.querySelector('.card');
  const heightOfCardEl = cardEl.getBoundingClientRect().height;
  window.scrollBy({
    top: 2 * heightOfCardEl,
    behavior: 'smooth',
  });
});

function showPhotosByQuery() {
  loaderEl.classList.remove('is-hidden');
  loadMoreEl.classList.add('is-hidden');
  fetchPhotosByQuery(querySearch, perPage, page)
    .then(data => {
      totalPages = Math.ceil(data.totalHits / perPage);
      if (!data.hits.length) {
        showNotification(
          'Sorry, there are no images matching your search query. <br>Please try again!'
        );
        return;
      }
      const markup = renderGallery(data.hits);
      ulEl.insertAdjacentHTML('beforeend', markup);
      lightbox.refresh();

      if (page >= totalPages) {
        showNotification(
          "We're sorry, but you've reached the end of search results."
        );
        return;
      }
      loadMoreEl.classList.remove('is-hidden');
      page++;
    })
    .catch(error => console.log(error))
    .finally(() => {
      loaderEl.classList.add('is-hidden');
    });
}
