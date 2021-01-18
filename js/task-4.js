

const decrRef = document.querySelector('.btn-min');

const valueRef = document.querySelector("#value");

const incrRef = document.querySelector(".btn-pl");

let counterValue = 0;
const value = (counterValue) => {
  valueRef.textContent = `${counterValue}`;
};


decrRef.addEventListener(`click`, () => {
  counterValue -= 1;
  value(counterValue);
});

incrRef.addEventListener("click", () => {
  counterValue += 1;
  value(counterValue);
});


