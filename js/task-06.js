/**
 * !Задание № 6
Напиши скрипт, который при потере фокуса на инпуте (событие blur), 
проверяет его содержимое на правильное количество 
введённых символов.
 */

const inputEl = document.querySelector('#validation-input');
// console.dir(inputEl);


inputEl.addEventListener('blur', onInputBlur);

function onInputBlur(event) {


    if (inputEl.value.length !== Number(event.currentTarget.dataset.length)) {
  
        console.log(`Ошибка, Вы ввели ${inputEl.value.length} символов. 
        Нужно ввести ${Number(event.currentTarget.dataset.length)} симовлов`)
        
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
    else { 
        console.log(`Все ок, Вы ввели ${inputEl.value.length} из ${Number(event.currentTarget.dataset.length)} симовлов - это ровно столько, сколько нужно :)`)
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
};
