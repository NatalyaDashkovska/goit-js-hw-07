const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];





const addList = ingredients.forEach(ingredients => 
{const elementList = document.createElement(`li`);
    elementList.textContent = ingredients;
    const listInput = document.querySelector(`#ingredients`);
listInput.append(elementList);
return elementList }
);
