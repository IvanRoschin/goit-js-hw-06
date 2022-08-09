/**
 * !Задание № 1
 * Напиши скрипт который:
 * Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
 * Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
 */

const navItemEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${navItemEl.length}`);

navItemEl.forEach((element) => {
    // console.log(element);
    console.log("Category: ", element.firstElementChild.textContent);
    console.log("Elements: ", element.lastElementChild.children.length);
});