const categoriesElements = document.querySelectorAll('.item');
// console.log(categoriesElements);
console.log(`Number of categories: ${categoriesElements.length}`);


categoriesElements.forEach(element => {
    console.log(`Category: ${element.firstElementChild.textContent}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
});

