let score = 0;
let time = 30;

document.body.innerHTML = `
  <h2 id="score">Score: 0</h2>
`;

const scoreText = document.getElementById("score");

// 🔊 звук
const sound = new Audio("https://www.myinstants.com/media/sounds/doh.mp3");

// 🧍 создаём одного Гомера
const homer = document.createElement("img");
homer.src = "homer.jpg"; // проверь имя файла
homer.style.position = "absolute";
homer.style.width = "80px";
homer.style.cursor = "pointer";
homer.style.transition = "0.1s";

document.body.appendChild(homer);

// 🎯 движение
function moveHomer() {
  homer.style.left = Math.random() * 400 + "px";
  homer.style.top = Math.random() * 400 + "px";
}

// 🖱 клик по Гомеру
homer.onclick = (e) => {
  e.stopPropagation();

  score++;
  scoreText.innerText = "Score: " + score;

  // эффект
  homer.style.transform = "scale(0.5)";
  setTimeout(() => homer.style.transform = "scale(1)", 100);

  // звук
  sound.currentTime = 0;
  sound.play();

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

// 🚀 быстрые прыжки
function gameLoop() {
  moveHomer();
  setTimeout(gameLoop, 600); // скорость
}

gameLoop();
