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
let lightbox;

formEl.addEventListener('submit', e => {
  e.preventDefault();
  querySearch = formEl.elements.search.value.trim();
  if (!querySearch) {
    showNotification('Sorry, the query field can not be empty');
    return;
  }

  ulEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');
  loadMoreEl.classList.add('is-hidden');
  

  fetchPhotosByQuery(querySearch, perPage, 1)
    .then(data => {
      totalPages = Math.ceil(data.totalHits / perPage);
      if (!data.hits.length) {
        showNotification(
          'Sorry, there are no images matching your search query. <br>Please try again!'
        );
        return;
      }
      const markup = renderGallery(data.hits);
      ulEl.insertAdjacentHTML('afterbegin', markup);
      lightbox = new SimpleLightbox('.cards a', { captionsData: 'alt' });
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
    .finally(() => loaderEl.classList.add('is-hidden'));
  formEl.reset();
});


loadMoreEl.addEventListener('click', e=>{
  loaderEl.classList.remove('is-hidden');
  loadMoreEl.classList.add('is-hidden');
  fetchPhotosByQuery(querySearch, perPage, page)
  .then(data => {
    if (!data.hits.length) {
      showNotification(
        'Sorry, there are no images matching your search query. <br>Please try again!'
      );
      return;
    }
    const markup = renderGallery(data.hits);
    ulEl.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
    const cardEl = document.querySelector('.card');
    const heightOfCardEl = cardEl.getBoundingClientRect().height;
    window.scrollBy({
      top: 2*heightOfCardEl,
      behavior: "smooth",
    });

    if (page >= totalPages) {
      showNotification(
        "We're sorry, but you've reached the end of search results."
      );
      return;
    }
    page++;
    loadMoreEl.classList.remove('is-hidden');
  })
  .catch(error => console.log(error))
  .finally(() => {
    loaderEl.classList.add('is-hidden');
    
  });
})
