const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

function makeGallery (images) {
  const gallery = document.querySelector('#gallery');
  gallery.classList.add('ul-gallery');

  const markerString = images.reduce (
    (string, item) => string +`<li class="li"><img class="image" src="${item.url} alt="${item.alt}" width="320" height="210"></li>`, "");
    gallery.insertAdjacentHTML(`afterbegin`, markerString);
}
console.log(makeGallery (images));

gallery.style.display = "flex";
gallery.style.display = "flex";