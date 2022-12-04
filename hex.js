const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const bgColor = document.querySelector(".container");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[genRan()];
  }
  bgColor.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});

function genRan() {
  return Math.floor(Math.random() * hex.length);
}
