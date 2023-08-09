import { galleryItems } from './gallery-items.js';

const container = document.querySelector(".gallery");


function createMarkup(arr){
    return arr.map(({preview, original, description}) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`).join('')
};


container.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

    
   const lightbox = new SimpleLightbox('.gallery a', { 
      captions: true,
      captionType:'attr',
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,

    });
    
    



