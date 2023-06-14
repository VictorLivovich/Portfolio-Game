const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll(".screen");
const timeList = document.querySelector(".time-list");
const timeEl = document.querySelector("#time");
const board = document.querySelector("#board");
const startUp = document.querySelector(".start__up");

const colors = [
  "rgb(226, 102, 19)",
  "rgba(0, 119, 255, 0.466)",
  "rgb(40, 172, 7)",
  "rgb(196, 199, 25)",
  "rgba(177, 12, 177, 0.89)",
  "#fff",
];

let time = 0;
let score = 0;
startBtn.addEventListener("click", (event) => {
  event.preventDefault();
  screens[0].classList.add("up");
});

timeList.addEventListener("click", (event) => {
  if (event.target.classList.contains("time-btn")) {
    time = parseInt(event.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    startGame();
  }
});

board.addEventListener("click", (event) => {
  if (event.target.classList.contains("circle")) {
    score++;
    event.target.remove();
    createRandomCircle();
  }
});

function startGame() {
  setInterval(decreaseTime, 1000);
  createRandomCircle();
  setTime(time);
}

function decreaseTime() {
  if (time === 0) {
    finisGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}

function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finisGame() {
  timeEl.parentNode.classList.add("hide");
  board.innerHTML = `<h1>Счет:<span class = "primary"> ${score}</span></h1>`;
}

function createRandomCircle() {
  const circle = document.createElement("div");

  const size = getRandomNumber(10, 60);

  const { width, height } = board.getBoundingClientRect();

  const x = getRandomNumber(0, width - size);

  const y = getRandomNumber(0, height - size);

  circle.style.background = getRandomsColor();
  circle.classList.add("circle");
  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;
  circle.style.top = `${y}px`;
  circle.style.left = `${x}px`;

  board.append(circle);
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function getRandomsColor() {
  let index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

// function startUp() {
  startUp.addEventListener("click", clickStart);
function clickStart() {
//   console.log(e.target)
//   if (e.target.classList.contains("start__up")) {
// console.log('ddddddddddddddddddddd')
location.reload()
  }
// }
// }
// startUp() 