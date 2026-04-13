let score = 0;
let time = 30;

// 📊 UI
document.body.innerHTML = `
  <h2 id="score">Score: 0</h2>
`;

const scoreText = document.getElementById("score");

// 🔊 звуки
const punchSound = new Audio("https://www.myinstants.com/media/sounds/punch.mp3");
const homerSound = new Audio("https://www.myinstants.com/media/sounds/homer-doh.mp3");

// 👨‍🦲 ГОМЕР
const homer = document.createElement("img");
homer.src = "homer.png"; // файл должен лежать рядом с index.html

homer.style.position = "absolute";
homer.style.width = "80px";
homer.style.objectFit = "cover";
homer.style.cursor = "pointer";
homer.style.transition = "0.1s";

document.body.appendChild(homer);

// 🥊 перчатка
const glove = document.createElement("div");
glove.innerText = "🥊";
glove.style.position = "absolute";
glove.style.fontSize = "40px";
glove.style.display = "none";

document.body.appendChild(glove);

// 📍 движение Гомера
function moveHomer() {
  const maxX = window.innerWidth - 80;

  homer.style.left = Math.random() * maxX + "px";

  // ↕️ хаотичная высота (может улетать вверх/вниз)
  homer.style.top = (Math.random() - 0.5) * 2000 + window.innerHeight / 2 + "px";
}

// 💥 эффект удара
function punch(x, y) {
  glove.style.display = "block";
  glove.style.left = x + "px";
  glove.style.top = y + "px";

  setTimeout(() => {
    glove.style.display = "none";
  }, 150);
}

// 🖱 клик по Гомеру
homer.onclick = (e) => {
  e.stopPropagation();

  score++;
  scoreText.innerText = "Score: " + score;

  // 🥊 звук удара
  punchSound.currentTime = 0;
  punchSound.play();

  // 😱 крик Гомера
  setTimeout(() => {
    homerSound.currentTime = 0;
    homerSound.play();
  }, 100);

  // 💥 визуальный удар
  punch(e.pageX, e.pageY);

  homer.style.transform = "scale(0.6)";
  setTimeout(() => homer.style.transform = "scale(1)", 100);

  moveHomer();
};

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

// 🚀 старт игры
function gameLoop() {
  moveHomer();
  setTimeout(gameLoop, 600);
}

gameLoop();
