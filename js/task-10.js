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

const controlsEl = document.querySelector('#controls');

const numberEl = controlsEl.firstElementChild;
// console.log(numberEl);

const createBtnEl = document.querySelector('[data-create]');
// console.log(createBtnEl);

const destroyBtnEl = document.querySelector('[data-destroy]');
// console.log(destroyBtnEl);

const boxesEl = document.querySelector('#boxes');
// console.log(boxesEl);


numberEl.addEventListener('input', onInputClick);

//! Получаем значение количества div
function onInputClick(event) {

  let amount = event.currentTarget.value;
  console.log('amount', amount);

  createBtnEl.addEventListener('click', createBoxes);
  destroyBtnEl.addEventListener('click', onDestroyBtnElClick);

//! Цикл создания div
  function createBoxes() { 
  for (let i = 1; i <= amount; i += 1) {
    let widthAndHeigthBase = 30;
    const divEl = document.createElement('div');
    divEl.style.backgroundColor = getRandomHexColor();
    divEl.style.width = `${widthAndHeigthBase}` + `px`;
    divEl.style.height = `${widthAndHeigthBase}`+ `px`;
    boxesEl.append(divEl);
    console.log(boxesEl);
    console.log(widthAndHeigthBase);
    };
  };
    
//! Очищаем div#boxes
function onDestroyBtnElClick() { 
  boxesEl.innerHTML = '';
  numberEl.value = '';
  amount = '';
  console.log('div#boxes очищен!', amount)
  };
 };