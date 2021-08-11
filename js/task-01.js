const listCategories = document.querySelector('ul');
console.log(listCategories);
const listItems = listCategories.querySelectorAll('.item');
console.log(`В списке ${listItems.length} категории`);
const h2Name = listCategories.getElementsByTagName('h2');
listItems.forEach((el) => {
    console.log('Категория : ', el.getElementsByTagName('h2')[0].textContent);
    console.log('Количество элементов:', el.getElementsByTagName('li').length)
})