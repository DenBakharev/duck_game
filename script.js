let score = 0;
let time = 30;

document.body.innerHTML = `<h2 id="score">Score: 0</h2>`;
const scoreText = document.getElementById("score");

// создаём 3 утки с разными скоростями
const ducks = [
  { el: createDuck(), speed: 1200 }, // медленная 🐢
  { el: createDuck(), speed: 700 },  // средняя
  { el: createDuck(), speed: 350 }   // быстрая ⚡
];

function createDuck() {
  const duck = document.createElement("div");
  duck.innerText = "🦆";
  duck.style.position = "absolute";
  duck.style.fontSize = "40px";
  duck.style.cursor = "pointer";
  document.body.appendChild(duck);
  return duck;
}

// движение одной утки
function moveDuck(duck) {
  duck.el.style.left = Math.random() * 400 + "px";
  duck.el.style.top = Math.random() * 400 + "px";
}

// клик по утке
ducks.forEach(d => {
  d.el.onclick = (e) => {
    e.stopPropagation();

    score++;
    scoreText.innerText = "Score: " + score;

    d.el.style.transform = "scale(0.7)";
    setTimeout(() => d.el.style.transform = "scale(1)", 100);

    moveDuck(d);
  };
});

// отдельный цикл для каждой утки (ВАЖНО!)
ducks.forEach(d => {
  function loop() {
    moveDuck(d);
    setTimeout(loop, d.speed);
  }
  loop();
});

// промах
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
