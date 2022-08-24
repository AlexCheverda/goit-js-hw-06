// Задание 2
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
  
// const navEl = document.querySelector('ul');
// const element = [];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const itemEl = ingredients[i];
//   const ingrEl = document.createElement('li');
//   ingrEl.classList.add('item');
//   ingrEl.textContent = itemEl; 
//   element.push(ingrEl);
// }
// navEl.append(...element);
// console.log(navEl);

const navEl = document.querySelector('ul');
const elements = ingredients.map(ingredient => {
  const element = document.createElement('li');
  element.classList.add('item');
  element.textContent = ingredient;
  console.log(element);
  return element;
  
});

navEl.append(...elements);