const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const alonzo = new Image();
alonzo.src = "assets/alonzo.png";
let alonzoX = canvas.width / 2;
let alonzoY = canvas.height / 2;
let alonzoOpacity = 1;
let alonzoMoved = false; 
let gameOver = false; 
var points = 0;
let pointsDisplay = document.getElementById('points');
let highscoreDisplay = document.getElementById('highscore');
jumpDelay = 5000; //easy mode default
function drawAlonzo() {
    if (gameOver) return;
    ctx.globalAlpha = alonzoOpacity;
    if (alonzoX < canvas.width / 2) {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.drawImage(alonzo, -alonzoX - 64, alonzoY, 64, 64);
        ctx.restore();
    } else {
        ctx.drawImage(alonzo, alonzoX, alonzoY, 64, 64);
    }

    ctx.globalAlpha = 1; 
}
function drawGameOver() {
    ctx.fillStyle = "red";
    ctx.font = "36px Arial";
    ctx.fillText("Game Over", canvas.width / 2 - 80, canvas.height / 2);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function getRandomPosition() {
    const maxX = canvas.width - 64;
    const maxY = canvas.height - 64;
    return {
        x: Math.random() * maxX,
        y: Math.random() * maxY
    };
}

function isMouseOverAlonzo(mouseX, mouseY) {
    return (
        mouseX >= alonzoX &&
        mouseX <= alonzoX + 64 &&
        mouseY >= alonzoY &&
        mouseY <= alonzoY + 64
    );
}
function updateGame() {
    clearCanvas();
    drawAlonzo();
    if (gameOver) {
        drawGameOver();
        return;
    }
    requestAnimationFrame(updateGame);
}
function moveAlonzoRandomly() {
    if (alonzoOpacity > 0.1) {
        alonzoOpacity -= 0.1;
    } else {
        alonzoOpacity = 0;
        gameOver = true;
    }

    const newPosition = getRandomPosition();
    alonzoX = newPosition.x;
    alonzoY = newPosition.y;
    alonzoMoved = true; 
}

canvas.addEventListener("click", (event) => {
    const mouseX = event.clientX - canvas.getBoundingClientRect().left;
    const mouseY = event.clientY - canvas.getBoundingClientRect().top;
    
    if (!gameOver && alonzoMoved && isMouseOverAlonzo(mouseX, mouseY)) {
        alonzoOpacity += 0.2; 
        if (alonzoOpacity > 1) {
            alonzoOpacity = 1; 
            points = points + 1;
            highscoreDisplay.textContent = 'Highscore: ' + localStorage.getItem('highscore');

        hsHandler();
        }
        
        alonzoMoved = false; 
        clearInterval(moveInterval);
        moveAlonzoRandomly(); 
        moveInterval = setInterval(moveAlonzoRandomly, jumpDelay);
    }
});

let moveInterval = setInterval(moveAlonzoRandomly, jumpDelay);

alonzo.onload = () => {
    updateGame();
};
function hsHandler() {
    pointsDisplay.textContent = 'Points: ' + points;
    highscoreDisplay.textContent = 'Highscore: ' + localStorage.getItem('highscore');

    if (!localStorage.getItem('highscore')) {
        localStorage.setItem('highscore', points);
    }
    if (localStorage.getItem('highscore')) {
        if (points > localStorage.getItem('highscore')) {
            localStorage.setItem('highscore', points);

        } else {
            return;
        }
    }

}
document.addEventListener('DOMContentLoaded', hsHandler())
