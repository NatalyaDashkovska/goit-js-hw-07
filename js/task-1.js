// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в
// ul#categories, то есть элементов li.item.Получится
// 'В списке 3 категории.'.

// Для каждого элемента li.item в списке ul#categories,
//     найдет и выведет в консоль текст заголовка элемента
//     (тега h2) и количество элементов в категории(всех 
//             вложенных в него элементов li).

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4
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





