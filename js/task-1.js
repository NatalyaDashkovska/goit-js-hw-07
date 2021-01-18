
const items = [...document.querySelectorAll(`.item`)];

console.log(`В списке ${items.length} категории.`);

items.map(item => {
    const categoryName = item.querySelector(`h2`);
    const itemQuantity = item.querySelectorAll(`ul li`);
    return {
        title: categoryName.textContent,
        quantity: itemQuantity.length
    }
    
}).forEach(element => {
    console.log(`Категория`, element.title, `Количество элементов`, element.quantity );
    
});;






