/**
 *!Задание № 9
 * Напиши скрипт, который изменяет цвета фона элемента
 *  <body> через инлайн стиль при клике на
 *  button.change-color и выводит значение цвета в span.color. 
 */

const changeColorBtn = document.querySelector('.change-color');
const changeColorEl = document.querySelector('.color');
changeColorBtn.addEventListener('click', onClickToChangeColorBtn);

function getRandomHexColor() {
      return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

function onClickToChangeColorBtn(event) { 
  changeColorEl.style.backgroundColor = `${getRandomHexColor()}`;
};
console.log(changeColorEl);




