function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Напиши скрипт створення і очищення колекції елементів.
// Користувач вводить кількість елементів в input і натискає кнопку
// Створити, після чого рендериться колекція.Натисненням на кнопку Очистити,
//   колекція елементів очищається.
//   Створи функцію createBoxes(amount), яка приймає один параметр - число.
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.

// 1.Розміри найпершого <div> - 30px на 30px.
// 2.Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3.Всі елементи повинні мати випадковий колір фону у форматі HEX.
// Використовуй готову функцію getRandomHexColor для отримання кольору.
// Створи функцію destroyBoxes(), яка очищає вміст div#boxes,
//   у такий спосіб видаляючи всі створені елементи.
const inputEl = document.querySelector("input");

const createBtEl = document.querySelector("button[data-create]");

const destroyBtEl = document.querySelector("button[data-destroy]");

const boxEl = document.querySelector("#boxes");

createBtEl.addEventListener("click", createBoxes);
const firstPosition = 0;
const divEl = document.createElement("div");
let firstWidth = 20;
function createBoxes() {
  for (let i = +1; i <= inputEl.value; i += 1) {
    const divEl = document.createElement("div");
    divEl.classList.add("class-js");
    firstWidth = firstWidth + 10;
    divEl.style.width = `${firstWidth + 10}px`;
    divEl.style.height = `${firstWidth + 10}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxEl.insertAdjacentElement("afterbegin", divEl);
  }
  return;
}
destroyBtEl.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxEl.innerHTML = "";
}
