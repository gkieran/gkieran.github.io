 //hide windows and make draggable
document.addEventListener('DOMContentLoaded', function() {
  $('#paintWindow').draggable({
      handle: '#paintDragHandle',
  });
$("#paintWindow").hide();

$('#settingsWindow').draggable({
      handle: '#settingsDragHandle',
  });
$("#settingsWindow").hide();
$('#infoWindow').draggable({
      handle: '#infoDragHandle',
  });
$("#infoWindow").hide();
$('#gameWindow').draggable({
      handle: '#gameDragHandle',
  });
$("#gameWindow").hide();
});
//drawing
const pencanvas = document.getElementById('canvas');
const penctx = canvas.getContext('2d');
let isDrawing = false;
let penSize = 3;
let penColor = '#000000';
pencanvas.addEventListener('mousedown', e => {
  isDrawing = true;
  const canvasRect = pencanvas.getBoundingClientRect();
  penctx.beginPath();
  penctx.moveTo(e.clientX - canvasRect.left, e.clientY - canvasRect.top);
});
pencanvas.addEventListener('mousemove', e => {
  if (isDrawing) {
    const canvasRect = pencanvas.getBoundingClientRect();
    penctx.lineTo(e.clientX - canvasRect.left, e.clientY - canvasRect.top);
    penctx.strokeStyle = penColor;
    penctx.lineWidth = penSize;
    penctx.stroke();
  }
});
pencanvas.addEventListener('mouseup', () => (isDrawing = false));
const penSizeSlider = document.getElementById('penSize');
penSizeSlider.addEventListener('input', e => {
  penSize = e.target.value;
});
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', e => {
  penColor = e.target.value;
});
const eraserBtn = document.getElementById('eraserBtn');
eraserBtn.addEventListener('click', () => {
  penColor = '#FFFFFF';
});
//background
function changeBackground(url) {
  document.getElementById('bg').style.backgroundImage = `url('${url}')`;
};
//click alonzo
function load() {
  document.getElementById("gameWindow").insertAdjacentHTML('beforeend', `
  <div class="flex justify-center p-10 flex-col items-center">
      <div class="flex flex-col items-center">
          <canvas id="gameCanvas" width="800" height="600"></canvas>
      </div>
      <div class="flex flex-col justify-center items-start ml-4">
          <h1 id="points" class="mb-2"></h1>
          <h1 id="highscore"></h1>
      </div>
          
      </div>
  `)
  
      const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  const alonzo = new Image();
  alonzo.src = "https://github.com/gkieran/gkieran.github.io/blob/main/schoolstuff/clickalonzo/assets/alonzo.png?raw=true";
  let alonzoX = canvas.width / 2;
  let alonzoY = canvas.height / 2;
  let alonzoOpacity = 1;
  let alonzoMoved = false; 
  let gameOver = false; 
  var points = 0;
  let pointsDisplay = document.getElementById('points');
  let highscoreDisplay = document.getElementById('highscore');
  jumpDelay = 2000;
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
  }
  //clock
  function updateClock() {
    const clockElement = document.getElementById("clock");
    const now = new Date();
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-US', options);
    clockElement.textContent = formattedDate;
}
setInterval(updateClock, 1000);
updateClock();
//taskbar buttons
let paint = document.getElementById('paint');
paint.addEventListener('click', function() {
$("#paintWindow").toggle();        
});
let settings = document.getElementById('settings');
settings.addEventListener('click', function() {
$("#settingsWindow").toggle();        
});
let info = document.getElementById('info');
info.addEventListener('click', function() {
$("#infoWindow").toggle();        
});
let game = document.getElementById('game');
game.addEventListener('click', function() {
$("#gameWindow").toggle();        
})
