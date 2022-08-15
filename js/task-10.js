/**
 * !Задание № 10
 * Создай функцию createBoxes(amount), которая принимает один параметр - число. 
 * Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. 
Используй готовую функцию getRandomHexColor для получения цвета.
 */

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const numberEl = document.querySelector('input');
console.log(numberEl);

const createBtnEl = document.querySelector('[data-create]');
console.log(createBtnEl);

const destroyBtnEl = document.querySelector('[data-destroy]');
console.log(destroyBtnEl);

const boxesEl = document.querySelector('#boxes');
console.log(boxesEl);


numberEl.addEventListener('input', onInputClick);


function onInputClick(event) { 

  let amount = Number(event.currentTarget.value); 
  console.log(amount);

  createBtnEl.addEventListener('click', createBoxes);
  destroyBtnEl.addEventListener('click', onDestroyBtnElClick);

//! Цикл создания дива
  function createBoxes(event) { 
       boxesEl.insertAdjacentHTML('afterbegin', '<div><div/>');

  //   console.log(amount);
    
  //   for (let i = 0; i < amount; i -= 1) {
  //     console.log(i[0]);
  // if (amount > 0) {
  //  boxesEl.insertAdjacentHTML('afterbegin', '<div><div/>');
  //   continue;
  // }

  console.log(boxesEl); 
// }
    // if (amount > 0) {
      // console.log(amount);
      // const divEl = document.createElement('div');
      // divEl.style.backgroundColor = getRandomHexColor();
      // divEl.style.width = '30px';
      // divEl.style.height = '30px';
      // divEl.appendChild(boxesEl);
      // boxesEl.insertBefore(divEl, boxesEl.firstElementChild);
    // };



    
    // boxesEl.insertAdjacentHTML('afterbegin', '<div><div/>');
  };

function onDestroyBtnElClick() { 
  boxesEl.innerHTML = '';
  console.log('div#boxes очищен!')
  };
  

};

