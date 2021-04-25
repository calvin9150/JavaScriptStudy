const gameBtn = document.querySelector(".game__button");
const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();
const carrotSize = 80;

function makeCarrots() {
  field.innerText = `<button class="carrot"><img src="img/carrot.png" /></button>`;
}

function addItem(className, count, imgPath) {
  const x1 = 0;
  const y1 = 0;
  const x2 = fieldRect.width - carrotSize;
  const y2 = fieldRect.height - carrotSize;
  for (let i = 0; i < count; i++) {
    const item = document.createElement("img");
    item.setAttribute("class", className);
    item.setAttribute("src", imgPath);
    item.style.position = "absolute";
    const x = randomNumber(x1, x2);
    const y = randomNumber(y1, y2);
    item.style.left = `${x}px`;
    item.style.top = `${y}px`;
    field.appendChild(item);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function initGame() {
  addItem("carrot", 5, "img/carrot.png");
  addItem("bug", 5, "img/bug.png");
}

initGame();
