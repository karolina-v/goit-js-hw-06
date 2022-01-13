const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];




// 1 вариант
const elemItem = document.querySelector('#ingredients');
const food = ingredients.forEach(ingredient => {
  const newEl = document.createElement('li');
  newEl.innerHTML = ingredient;
  elemItem.append(newEl);
});

console.log(food);


// 2 вариант
// const elemItem = document.querySelector('#ingredients');
// const elemList = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
// elemItem.innerHTML = elemList;


