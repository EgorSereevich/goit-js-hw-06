const inputEl = document.querySelector("#validation-input");
const dataInputEl = document.querySelector(`input[data-length="6"]`);
inputEl.addEventListener("blur", getFunction);
function getFunction() {
  if (inputEl.value.length === Number(dataInputEl.dataset.length)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}
