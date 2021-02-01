const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];



    const listInput = document.querySelector(`#ingredients`);

const addList = ingredients => 
{const elementList = document.createElement(`li`);
    elementList.textContent = ingredients;
return elementList };
const Item = ingredients.map(ingredient => addList(ingredient));
listInput.append(...Item);
