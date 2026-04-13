let score = 0;
let time = 30;

document.body.innerHTML = `
  <h2 id="score">Score: 0</h2>
`;

const scoreText = document.getElementById("score");

// 🎮 персонажи
const characters = [
  { img: "homer.jpg", points: 1, speed: 1200 },
  { img: "bart.jpg", points: 2, speed: 700 },
  { img: "lisa.jpg", points: 5, speed: 400 }
];

const items = [];

// 🔊 звук (D’oh!)
const sound = new Audio("https://www.myinstants.com/media/sounds/doh.mp3");

// создать персонажа
function createChar(data) {
  const el = document.createElement("img");

  el.src = data.img;
  el.style.position = "absolute";
  el.style.width = "60px";
  el.style.cursor = "pointer";
  el.style.transition = "0.1s";

  document.body.appendChild(el);

  return { el, ...data };
}

// движение
function move(el) {
  el.style.left = Math.random() * 400 + "px";
  el.style.top = Math.random() * 400 + "px";
}

// создать всех
characters.forEach(c => {
  const item = createChar(c);
  items.push(item);

  // клик
  item.el.onclick = (e) => {
    e.stopPropagation();

    score += item.points;
    scoreText.innerText = "Score: " + score;

    // 💥 эффект
    item.el.style.transform = "scale(0.5)";
    setTimeout(() => item.el.style.transform = "scale(1)", 100);

    // 🔊 звук
    sound.currentTime = 0;
    sound.play();

    move(item.el);
  };
});

// 🚀 игровой цикл (ускорение)
let baseSpeed = 600;

function gameLoop() {
  items.forEach(i => move(i.el));

  setTimeout(gameLoop, baseSpeed);
}

// ⏫ ускорение игры
setInterval(() => {
  if (baseSpeed > 200) {
    baseSpeed -= 50;
  }
}, 5000);

// ❌ промах
document.body.onclick = () => {
  score--;
  scoreText.innerText = "Score: " + score;
};

// ⏱ таймер
setInterval(() => {
  time--;

  if (time <= 0) {
    alert("Игра окончена! Score: " + score);
    location.reload();
  }
}, 1000);

// старт
gameLoop();
