import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './src/js/pixabay-api.js';
import { createGallery, clearGallery } from './src/js/render-functions.js';



const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', async event => {
  event.preventDefault();

  const imageQuery = event.target.elements["search-text"].value.trim();

  if (!imageQuery) return;

  clearGallery();

  try {
    const data = await getImagesByQuery(imageQuery);

   if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
     return;
     
   }
    createGallery(data.hits);
  }catch (error) {
    console.error(error);
    iziToast.error({
      title: 'Error',
      message: 'An error occurred while fetching images. Please try again later.',
    });
  }

});




