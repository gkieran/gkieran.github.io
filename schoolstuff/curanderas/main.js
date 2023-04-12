
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
        <!-- Your head content here -->
      </head>
      <body>
       REPLACE WITH MUSEUM SHIT
      </body>
    </html>
    `;
    
    // Replace the current HTML document with the HTML string
    document.open();
    document.write(htmlString);
    document.close();
  }, 1200)


  












});
