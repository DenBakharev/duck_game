let score = 0;

const scoreText = document.getElementById("score");

// 🔊 звук
const punchSound = new Audio("https://www.myinstants.com/media/sounds/punch.mp3");
const homerSound = new Audio("https://www.myinstants.com/media/sounds/homer-doh.mp3");

// 👨‍🦲 Гомер
const homer = document.createElement("img");
homer.src = "homer.png";

homer.style.position = "absolute";
homer.style.width = "80px";
homer.style.height = "80px";
homer.style.cursor = "pointer";
homer.style.objectFit = "cover";

document.body.appendChild(homer);

// 📍 движение
function moveHomer() {
  const maxX = window.innerWidth - 80;
  const maxY = window.innerHeight - 80;

  homer.style.left = Math.random() * maxX + "px";
  homer.style.top = Math.random() * maxY + "px";
}

// 🥊 клик
homer.onclick = (e) => {
  e.stopPropagation();

  score++;
  scoreText.innerText = "Score: " + score;

  punchSound.currentTime = 0;
  punchSound.play();

  setTimeout(() => {
    homerSound.currentTime = 0;
    homerSound.play();
  }, 100);

  homer.style.transform = "scale(0.6)";
  setTimeout(() => homer.style.transform = "scale(1)", 100);

  moveHomer();
};

// ❌ промах
document.body.onclick = () => {
  score--;
  scoreText.innerText = "Score: " + score;
};

// 🚀 старт
moveHomer();
setInterval(moveHomer, 600);
