/**
 * Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().
 * Все элементы галереи должны добавляться в DOM за одну операцию вставки.
 * Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.
 */
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

const galleryCountainerEl = document.querySelector('.gallery');
galleryCountainerEl.classList.add('grid');


const itemEl = document.createElement('li');
itemEl.classList.add('item');

const image = document.createElement('img');
image.classList.add('image');
// image.src = imageLink;
// image.alt = imageAlt;

itemEl.append(image);

// itemEl.insertAdjacentElement('afterbegin', 'gallery');

console.log(itemEl);

// const elements = images.map(({ imageLink, imageAlt }) => { 

// })

// itemEl.insertAdjacentElement('afterbegin', 'image');
