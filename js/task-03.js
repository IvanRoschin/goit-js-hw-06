/**
 * !Задание № 3
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

const gallery = document.querySelector('.gallery');
gallery.style.display = "flex";
gallery.style.justifyContent = "space-between";
gallery.style.listStyle = "none";
gallery.style.margin = "0";
gallery.style.padding = "0";

const markup = images
  .map(({ url, alt }) =>
    `<li class="item">
    <img class="image" src = '${url}' alt = '${alt}' width="280" height="160"></img>
    </li>`)
    .join("");

gallery.insertAdjacentHTML('afterbegin', markup);

console.log(gallery);

//v.2 Create Element
// const galleryCountainerEl = document.querySelector('.gallery');
// galleryCountainerEl.classList.add('grid');

// const makeItem = ({ url, alt }) => {
//     const itemEl = document.createElement('li');
//     itemEl.classList.add('item');
    
//     const image = document.createElement('img');
//     image.classList.add('image');
//     image.src = url;
//     image.alt = alt;
//     image.width = 320;
    
//     itemEl.append(image);


//     return itemEl;
//  }

// const items = images.map(makeItem);

// galleryCountainerEl.append(...items);

// console.log(galleryCountainerEl);