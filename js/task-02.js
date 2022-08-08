/**
 * Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients.
 */

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsCountainerEl = document.querySelector('#ingredients');

//v.1 Modniu sintaxis

const elements = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;

  return itemEl;
});

//v.2 oldschool
// const elements = [];
// for (let i = 0; i < ingredients.length; i+=1) {
//   const itemEl = document.createElement('li');
//   itemEl.classList.add('item');
//   itemEl.textContent = ingredients[i];

//   elements.push(itemEl);
// };

ingredientsCountainerEl.append(...elements);

console.log(ingredientsCountainerEl);