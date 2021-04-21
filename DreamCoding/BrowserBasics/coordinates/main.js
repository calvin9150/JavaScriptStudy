const mouse = document.querySelector(".mouse");
const imgs = document.querySelector(".imgs");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");

document.addEventListener("mousemove", (e) => {
  mouse.innerHTML = `${e.clientX}px, ${e.clientY}px`;
  mouse.style.left = `${e.clientX + 30}px`;
  mouse.style.top = `${e.clientY + 30}px`;
  imgs.style.left = `${e.clientX}px`;
  imgs.style.top = `${e.clientY}px`;
  line1.style.top = `${e.clientY}px`;
  line2.style.left = `${e.clientX}px`;
  console.log(e.clientX);
});
