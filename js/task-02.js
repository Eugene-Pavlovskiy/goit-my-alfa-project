const ingredList = document.querySelector('#ingredients');
console.log(ingredList);
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const newItems = ingredients.map((el) => { const newItem = document.createElement("li"); newItem.textContent = el; return newItem });
ingredList.append(...newItems);