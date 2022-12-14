/**
 *!Задание № 9
 * Напиши скрипт, который изменяет цвета фона элемента
 *  <body> через инлайн стиль при клике на
 *  button.change-color и выводит значение цвета в span.color.
 */

const changeColorBtn = document.querySelector(".change-color");
const ColorInfoEl = document.querySelector(".color");
const changeColorEl = document.querySelector("body");

changeColorBtn.addEventListener("click", onClickToChangeColorBtn);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onClickToChangeColorBtn() {
  changeColorEl.style.backgroundColor = `${getRandomHexColor()}`;
  ColorInfoEl.textContent = `${getRandomHexColor()}`;
}
console.log(changeColorEl);
