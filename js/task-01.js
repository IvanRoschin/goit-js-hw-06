/**
 * !Задание № 1
 * Напиши скрипт который:
 * Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
 * Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
 */

//1. categoriesCount
const navEl = document.querySelector('#categories');

const NavItemEl = navEl.children;

console.log(`Number of categories: ${NavItemEl.length}`);



//2. Animals
// categoryName

const firstAnimalsEl = NavItemEl[0].firstElementChild;
console.log (`Category:`, firstAnimalsEl.textContent);

//categoryElementsCount

const lastAnimalsCountEl = NavItemEl[0].lastElementChild;
console.log(`Elements:`, lastAnimalsCountEl.children.length);


//3. Products
// categoryName

const firstProductsEl = NavItemEl[1].firstElementChild;
console.log (`Category:`, firstProductsEl.textContent);

//categoryElementsCount
const lastProductsCountEl = NavItemEl[1].lastElementChild;
console.log(`Elements:`, lastProductsCountEl.children.length);


//4.Technologies
// categoryName

const firstTechnologiesEl = NavItemEl[2].firstElementChild;
console.log (`Category:`, firstTechnologiesEl.textContent);

//categoryElementsCount
const lastTechnologiesCountEl = NavItemEl[2].lastElementChild;
console.log(`Elements:`, lastTechnologiesCountEl.children.length);