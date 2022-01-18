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

const food = ingredients.map(ingredient => {
  const newEl = document.createElement('li'); 
  newEl.classList.add('item');
  newEl.textContent = ingredient;
  return newEl;
  
});

elemItem.append(...food);
console.log(elemItem);




// 2 вариант
// const elemItem = document.querySelector('#ingredients');
// const food = ingredients.forEach(ingredient => {
//   const newEl = document.createElement('li');
//   newEl.innerHTML = ingredient;
//   elemItem.append(newEl);
// });

// console.log(food);

// Здесь добавление на каждом шаге цикла
// а нужно сделать добаление за одну операцию
// когда все собрали
// распылить наш список в нашу разметку



// 3 вариант
// const elemItem = document.querySelector('#ingredients');
// const elemList = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
// elemItem.innerHTML = elemList;


