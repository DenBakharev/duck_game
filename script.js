console.log("GAME STARTED");

let score = 0;
const scoreText = document.getElementById("score");

// 👇 ТЕСТ КАРТИНКИ (ВАЖНО)
const homer = document.createElement("img");
homer.src = "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png";

homer.style.position = "absolute";
homer.style.width = "100px";
homer.style.height = "100px";
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
