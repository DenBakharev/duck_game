let score = 0;
let time = 30;

document.body.innerHTML = `<h2 id="score">Score: 0</h2>`;
const scoreText = document.getElementById("score");

// создаём 3 утки с разными скоростями
const ducks = [
  { el: createDuck("https://i.imgur.com/8Qf6bYv.png"), speed: 1200 }, // Homer
  { el: createDuck("https://i.imgur.com/3YQZQ9F.png"), speed: 700 },  // Bart
  { el: createDuck("https://i.imgur.com/1Q9Zx1L.png"), speed: 350 }   // Lisa
];

function createDuck(imgUrl) {
  const el = document.createElement("img");

  el.src = imgUrl;
  el.style.position = "absolute";
  el.style.width = "60px";
  el.style.cursor = "pointer";

  document.body.appendChild(el);
  return el;
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
