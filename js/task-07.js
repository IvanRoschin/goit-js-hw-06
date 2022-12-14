/**
 * !Задание № 7
Напиши скрипт, который реагирует на изменение значения 
input#font-size-control (событие input) и изменяет
инлайн-стиль span#text обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться 
размер текста.
 */

const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onInput);

function onInput(event) { 

    console.dir(event.currentTarget.value); 
    textEl.style.fontSize = `${event.currentTarget.value}px`;
};