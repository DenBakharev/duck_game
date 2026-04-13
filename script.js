let score = 0;
let time = 30;

// UI
document.body.innerHTML = `
  <h2 id="score">Score: 0</h2>
`;

const scoreText = document.getElementById("score");

// 🔊 звук удара
const punchSound = new Audio("https://www.myinstants.com/media/sounds/punch.mp3");

// 😱 звук Гомера
const homerSound = new Audio("https://www.myinstants.com/media/sounds/homer-doh.mp3");

// 👨‍🦲 создаём Гомера
const homer = document.createElement("img");
homer.src = "homer.png";   // ⚠️ ВАЖНО: имя файла

homer.style.position = "absolute";
homer.style.width = "80px";
homer.style.height = "80px";
homer.style.objectFit = "cover";
homer.style.cursor = "pointer";
homer.style.userSelect = "none";
homer.style.transition = "0.1s";

document.body.appendChild(homer);

// 🥊 перчатка
const glove = document.createElement("div");
glove.innerText = "🥊";
glove.style.position = "absolute";
glove.style.fontSize = "40px";
glove.style.display = "none";
document.body.appendChild(glove);

// 📍 движение
function moveHomer() {
  const maxX = window.innerWidth - 80;
  const maxY = window.innerHeight - 120;

  homer.style.left = Math.random() * maxX + "px";
  homer.style.top = Math.random() * maxY + "px";
}

// 💥 удар
function punch(x, y) {
  glove.style.display = "block";
  glove.style.left = x + "px";
  glove.style.top = y + "px";

  setTimeout(() => {
    glove.style.display = "none";
  }, 120);
}

// 🖱 клик по Гомеру
homer.onclick = (e) => {
  e.stopPropagation();

  score++;
  scoreText.innerText = "Score: " + score;

  // звук удара
  punchSound.currentTime = 0;
  punchSound.play();

  // крик Гомера
  setTimeout(() => {
    homerSound.currentTime = 0;
    homerSound.play();
  }, 100);

  // эффект удара
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

// 🚀 старт
moveHomer();

setInterval(() => {
  moveHomer();
}, 600);
