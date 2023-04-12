
document.getElementById("open-button").addEventListener("click", function() {
  document.getElementById("museum").style.transform = "scale(5) translateY(-200px)";
  document.getElementById("museum").setAttribute('src', "img/museum_open.png" ) 

  document.getElementById("open-button").style.display = "none"
  document.getElementById("popup-container").style.display = "none"
  setTimeout(function(){
    document.getElementById("museum").style.transform = "scale(100) translateY(-200px)";
  }, 1000);
  setTimeout(function(){
    const htmlString = `
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/w3-css/4.1.0/w3.css" integrity="sha512-Ef5r/bdKQ7JAmVBbTgivSgg3RM+SLRjwU0cAgySwTSv4+jYcVeDukMp+9lZGWT78T4vCUxgT3g+E8t7uabwRuw==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    
        <title>Digital Museum</title>
        <style>
            /* Container for the museum floor plan */
            .museum-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 70px;
      width: 800px;
      margin: 0 auto;
    }
    
    .exhibit-room {
      width: 100%;
      height: 100px;
      background-color: #cea26f;
      border: 1px solid #000;
      cursor: pointer;
      text-align: center;
      line-height: 100px;
      font-size: 18px;
    }
            .exhibit-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.8);
            z-index: 9999;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    
        .exhibit-overlay .exhibit-content {
            max-width: 800px;
            padding: 30px;
            background-color: #fff;
            border-radius: 5px;
        }
    
            /* Styling for the exhibit content */
            .exhibit-content {
                width: 600px;
                height: 400px;
                background-color: #fff;
                border: 1px solid #000;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 20px;
                text-align: center;
            }
    
            /* Styling for close button */
            .close-btn {
                position: absolute;
                top: 10px;
                right: 10px;
                cursor: pointer;
            }
            body {
              background-image: url("img/wall.png");
              background-size: cover;
            }
        </style>
    </head>
    <body>
      <img src="img/exit.png" id="exit" style="height: 100px; width: 100px">
      <div style="height:70px"></div>
        <div class="museum-container w3-center">
            <!-- Exhibit Rooms -->
            <div class="exhibit-room" id="exhibit1">Exhibit 1</div>
            <div class="exhibit-room" id="exhibit2">Exhibit 2</div>
            <div class="exhibit-room" id="exhibit3">Exhibit 3</div>
            <div class="exhibit-room" id="exhibit4">Exhibit 4</div>
            <div class="exhibit-room" id="exhibit5">Exhibit 5</div>
            <div class="exhibit-room" id="exhibit6">Exhibit 6</div>
            <div class="exhibit-room" id="exhibit7">Exhibit 7</div>
            <div class="exhibit-room" id="exhibit8">Exhibit 8</div>
    
            <!-- Exhibit Overlays -->
            <div class="exhibit-overlay" id="exhibit-overlay1">
              <div class="exhibit-content">
                  <h2>Exhibit 1</h2>
                  <p>This is the content for Exhibit 1.</p>
                  <span onclick="document.getElementById('exhibit-overlay1').style.display='none'"
                  class="w3-button w3-display-topright">&times;</span>          
                </div>
          </div>
          <div class="exhibit-overlay" id="exhibit-overlay2">
              <div class="exhibit-content">
                  <h2>Exhibit 2</h2>
                  <p>This is the content for Exhibit 2.</p>
                  <span onclick="document.getElementById('exhibit-overlay2').style.display='none'"
                  class="w3-button w3-display-topright">&times;</span>       
                    </div>
          </div>
          <div class="exhibit-overlay" id="exhibit-overlay3">
              <div class="exhibit-content">
                  <h2>Exhibit 3</h2>
                  <p>This is the content for Exhibit 3.</p>
                  <span onclick="document.getElementById('exhibit-overlay3').style.display='none'"
                  class="w3-button w3-display-topright">&times;</span>          
                 </div>
          </div>
          <div class="exhibit-overlay" id="exhibit-overlay4">
              <div class="exhibit-content">
                  <h2>Exhibit 4</h2>
                  <p>This is the content for Exhibit 4.</p>
                  <span onclick="document.getElementById('exhibit-overlay4').style.display='none'"
                  class="w3-button w3-display-topright">&times;</span> 
              </div>
          </div>
          <div class="exhibit-overlay" id="exhibit-overlay5">
              <div class="exhibit-content">
                  <h2>Exhibit 5</h2>
                  <p>This is the content for Exhibit 5.</p>
                  <span onclick="document.getElementById('exhibit-overlay5').style.display='none'"
                  class="w3-button w3-display-topright">&times;</span> 
              </div>
          </div>
          <div class="exhibit-overlay" id="exhibit-overlay6">
              <div class="exhibit-content">
                  <h2>Exhibit 6</h2>
                  <p>This is the content for Exhibit 6.</p>
                  <span onclick="document.getElementById('exhibit-overlay6').style.display='none'"
                  class="w3-button w3-display-topright">&times;</span> 
              </div>
          </div>
          <div class="exhibit-overlay" id="exhibit-overlay7">
              <div class="exhibit-content">
                  <h2>Exhibit 7</h2>
                  <p>This is the content for Exhibit 7.</p>
                  <span onclick="document.getElementById('exhibit-overlay7').style.display='none'"
                  class="w3-button w3-display-topright">&times;</span> 
              </div>
          </div>
          <div class="exhibit-overlay" id="exhibit-overlay8">
              <div class="exhibit-content">
                  <h2>Exhibit 8</h2>
                  <p>This is the content for Exhibit 8.</p>
                  <span onclick="document.getElementById('exhibit-overlay8').style.display='none'"
                  class="w3-button w3-display-topright">&times;</span> 
              </div>
          </div>
      </div>
    
      <!-- JavaScript to handle exhibit overlay functionality -->
      <script>
        document.getElementById('exit').addEventListener('click', function() {
          location.reload();
        });
            const Overlays = document.querySelectorAll('.exhibit-overlay');
    
    // Hide all exhibit overlays by default
    Overlays.forEach(overlay => {
        overlay.style.display = 'none';
    });
    
        // Get all exhibit rooms and exhibit overlays
        const exhibitRooms = document.querySelectorAll('.exhibit-room');
        const exhibitOverlays = document.querySelectorAll('.exhibit-overlay');
    
        // Add click event listener to each exhibit room
        exhibitRooms.forEach((room, index) => {
            room.addEventListener('click', () => {
                // Toggle exhibit overlay display
                if (exhibitOverlays[index].style.display === 'block') {
                    exhibitOverlays[index].style.display = 'none';
                } else {
                    exhibitOverlays[index].style.display = 'block';
                }
            });
        });
    
        // Add click event listener to close buttons
        const closeBtns = document.querySelectorAll('.close-btn');
        closeBtns.forEach(btn => {
            btn.addEventListener('click', (event) => {
                event.preventDefault();
                // Hide the parent exhibit overlay
                btn.closest('.exhibit-overlay').style.display = 'none';
            });
        });
    </script>
    
    </body>
    </html>
    
    
    
    `;
    
    // Replace the current HTML document with the HTML string
    document.open();
    document.write(htmlString);
    document.close();
  }, 1200)


  












});
