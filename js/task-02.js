  // TASK 2


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRefs = document.querySelector('#ingredients')
const arr = [];
for (let i = 0; i < ingredients.length; i++) {
  const item = document.createElement('li')
  item.textContent = ingredients[i]
  item.classList = 'item'
  arr.push(item)
}

listRefs.append(...arr)
