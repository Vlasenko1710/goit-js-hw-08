// Add imports above this line
import { galleryItems } from './gallery-items';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');


const makeImageMarkup = image => {
    const { preview, original, description } = image;
    return `
     <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`};
console.log(makeImageMarkup);
const makeGalleryMarkup = galleryItems.map(makeImageMarkup).join('');
gallery.insertAdjacentHTML('beforeend', makeGalleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {

  captionsData: "alt",
    captionDelay: 250,
    loop: false,
    widthRatio: 0.9,
    heightRatio: 0.9,
});