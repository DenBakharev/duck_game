console.log("GAME STARTED");

let score = 0;
const scoreText = document.getElementById("score");

// 👇 ТЕСТ КАРТИНКИ (ВАЖНО)
const homer = document.createElement("img");
homer.src = homer.png;

homer.style.position = "absolute";

homer.style.cursor = "pointer";

document.body.appendChild(homer);

function move() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  homer.style.left = x + "px";
  homer.style.top = y + "px";
}

homer.onclick = () => {
  score++;
  scoreText.innerText = "Score: " + score;
  move();
};

setInterval(move, 800);

move();
