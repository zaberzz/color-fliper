const colors = ["red", "green", "yellow", "pink"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const bgColor = document.querySelector(".container");

btn.addEventListener("click", function () {
  const randomNum = randGen();
  bgColor.style.background = colors[randomNum];
  color.textContent = colors[randomNum];
});

function randGen() {
  return Math.floor(Math.random() * colors.length);
}
