


const inputText = document.querySelector("#name-input");
const spanText = document.querySelector("#name-output");

inputText.addEventListener("input", (event) => {
  event.target.value === ""
    ? (spanText.textContent = "незнакомец")
    : (spanText.textContent = event.target.value);
});