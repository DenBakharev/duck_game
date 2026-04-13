let score = 0;
let time = 30;

const duck = document.getElementById("duck");
const scoreText = document.getElementById("score");

// перемещение утки
function moveDuck() {
  duck.style.position = "absolute";
  duck.style.left = Math.random() * 300 + "px";
  duck.style.top = Math.random() * 300 + "px";
}

// клик по утке = +1
duck.onclick = (e) => {
  e.stopPropagation(); // чтобы не считался промах

  score++;
  scoreText.innerText = "Score: " + score;

  duck.style.transform = "scale(0.7)";
  setTimeout(() => duck.style.transform = "scale(1)", 100);

  moveDuck();
};

// промах = -1
document.body.onclick = () => {
  score--;
  scoreText.innerText = "Score: " + score;
};

// таймер игры
setInterval(() => {
  time--;

  if (time <= 0) {
    alert("Игра окончена! Score: " + score);
    location.reload();
  }
}, 1000);

// старт
moveDuck();
