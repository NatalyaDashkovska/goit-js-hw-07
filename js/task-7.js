


const inputRef = document.querySelector("#font-size-control");
const fontSizeRef = document.querySelector("#text");

inputRef.addEventListener("input", inputRange);
function inputRange(event) {
  fontSizeRef.style.fontSize = event.currentTarget.value + "px";
}