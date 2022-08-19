const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
  
const navEl = document.querySelector('ul');
const element = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const itemEl = ingredients[i];

  const ingrEl = document.createElement('li');
  ingrEl.classList.add('item');
  ingrEl.textContent = itemEl;
  
  element.push(ingrEl);
}

navEl.append(...element);
console.log(navEl);



