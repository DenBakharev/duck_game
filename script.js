const scoreText = document.getElementById("score");

function moveDuck() {
    duck.style.position = "absolute";
    duck.style.left = Math.random() * 300 + "px";
    duck.style.top = Math.random() * 300 + "px";
}

duck.onclick = () => {
    score++;
    scoreText.innerText = "Score: " + score;
    moveDuck();
};

setInterval(moveDuck, 1500);
moveDuck();