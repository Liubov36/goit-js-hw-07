import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallaryEl = document.querySelector('.gallery');
function createListGalleryItems(items) {
    
    return items.map(({preview, original, description}) => `
    <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`).join('');
}

const listGallaryItems = createListGalleryItems(galleryItems);
gallaryEl.insertAdjacentHTML("beforeend", listGallaryItems);

gallaryEl.addEventListener('click', selectImgGallery);

function selectImgGallery(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') return;
      
  
  const instance = basicLightbox.create(`
    <div>
    <img src="${event.target.dataset.source}"></div>
`,{
      onShow: (instance) => {
        window.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscKeyPress);
      },
    }
    );
    function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }      
  }
  instance.show();    
}

console.log(galleryItems);


// ================basiclightbox======================
const modalTemplate = () =>  
    `<div class='modal'>
        <p>I'm a modal created from a DOM element/node.</p>
        
    </div>`;


// instance.show();

// const instance = basicLightbox.create(modalTemplate());