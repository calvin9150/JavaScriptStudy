const gameBtn = document.querySelector(".game__button");
const field = document.querySelector(".game__field");
const fieldRect = field.getBoundingClientRect();
const gameTimer = document.querySelector(".game__timer");
const gameScore = document.querySelector(".game__score");

const popUp = document.querySelector(".pop-up");
const popUpText = document.querySelector(".pop-up__message");
const popUpRefresh = document.querySelector(".pop-up__refresh");

const carrotSize = 80;
const carrotCount = 5;
const bugCount = 5;
const gameDurationSec = 5;

let started = false;
let score = 0;
let timer;

function startGame() {
  initGame();
  showStopButton();
  showTimerAndScore();
  startGameTimer();
}

function stopGame() {
  stopGameTimer();
  hideGameButton();
  showPopUpWithText("REPLAY?");
}

function startGameTimer() {
  let remainingTimeSec = gameDurationSec;
  updateTimerText(remainingTimeSec);
  timer = setInterval(() => {
    if (remainingTimeSec <= 0) {
      clearInterval;
      return;
    }
    updateTimerText(--remainingTimeSec);
  }, 1000);
}

function stopGameTimer() {
  clearInterval(timer);
}

function updateTimerText(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  gameTimer.innerText = `${minutes}:${seconds}`;
}

gameBtn.addEventListener("click", () => {
  if (started) {
    stopGame();
  } else {
    startGame();
  }
  started = !started;
});

function showStopButton() {
  const icon = gameBtn.querySelector(".fa-play");
  icon.classList.add("fa-stop");
  icon.classList.add("fa-play");
}

function hideGameButton() {
  gameBtn.style.visibility = "hidden";
}

function showTimerAndScore() {
  gameTimer.style.visibility = "visible";
  gameScore.style.visibility = "visible";
}

function showPopUpWithText(text) {
  popUpText.innerText = text;
  popUp.classList.remove("pop-up--hide");
}

function initGame() {
  field.innerHTML = "";
  gameScore.innerText = carrotCount;
  addItem("carrot", carrotCount, "img/carrot.png");
  addItem("bug", bugCount, "img/bug.png");
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
