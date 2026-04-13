let score = 0;
let time = 30;

const scoreText = document.getElementById("score");

// создаём 3 утки
const ducks = [];

for (let i = 0; i < 3; i++) {
  const duck = document.createElement("div");
  duck.innerText = "🦆";
  duck.style.position = "absolute";
  duck.style.fontSize = "40px";
  duck.style.cursor = "pointer";

  document.body.appendChild(duck);
  ducks.push(duck);

  // клик по утке
  duck.onclick = (e) => {
    e.stopPropagation();

    score++;
    scoreText.innerText = "Score: " + score;

    duck.style.transform = "scale(0.7)";
    setTimeout(() => duck.style.transform = "scale(1)", 100);

    moveDuck(duck);
  };
}

// перемещение одной утки
function moveDuck(duck) {
  duck.style.left = Math.random() * 400 + "px";
  duck.style.top = Math.random() * 400 + "px";
}

// ВСЕ утки двигаются быстро
function gameLoop() {
  ducks.forEach(duck => {
    moveDuck(duck);
  });

  setTimeout(gameLoop, 600); // ⚡ фиксированно быстро
}

document.body.onclick = () => {
  score--;
  scoreText.innerText = "Score: " + score;
};

// таймер
setInterval(() => {
  time--;

  if (time <= 0) {
    alert("Игра окончена! Score: " + score);
    location.reload();
  }
}, 1000);

// старт
gameLoop();
