const $startScreen = document.querySelector("#start-screen");
const $battleMenu = document.querySelector("#battle-menu");
const $heroName = document.querySelector("#hero-name");

$startScreen.addEventListener("submit", (event) => {
  event.preventDefault();
  name = evnet.target["name-input"].value;
  $startScreen.style.display = "none";
  $gameMenu.style.display = "block";
  $heroName.textContent = name;
});
