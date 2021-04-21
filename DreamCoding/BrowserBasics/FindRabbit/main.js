const btn = document.querySelector(".btn");
const carrot = document.querySelector(".carrot");
const rabbit = document.querySelector(".rabbit");

btn.addEventListener("click", () => {
  rabbit.scrollIntoView({ behavior: "smooth" });
});
