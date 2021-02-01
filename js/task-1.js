
const items = [...document.querySelectorAll(`.item`)];

console.log(`В списке ${items.length} категории.`);


    const categoryName = document.querySelectorAll('#categories .item');

    
categoryName.forEach(element => {
    console.log(`Категория ${element.firstElementChild.textContent}`, `Количество элементов ${element.lastElementChild.children.length}`);
    
});





