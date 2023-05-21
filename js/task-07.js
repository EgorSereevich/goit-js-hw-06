const inputEl = document.querySelector("#font-size-control");
const textspanEl = document.querySelector("#text");

inputEl.addEventListener("input", getFunction);
function getFunction() {
  textspanEl.style.fontSize = `${inputEl.value / 20}em`;
}
