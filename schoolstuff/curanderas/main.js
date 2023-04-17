
document.getElementById("open-button").addEventListener("click", function() {
    document.getElementById("museum").style.transform = "scale(5) translateY(-200px)";
    document.getElementById("museum").setAttribute('src', "https://gkieran.github.io/schoolstuff/curanderas/img/museum_open.png" ) 
  
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
        line-height: 30px;
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
  max-width: 1000px;
  padding: 30px;
  background-color: #dedede;
  border-radius: 5px;
  position: relative; /* Add position property for box-shadow to work */
  overflow: hidden; /* Add overflow property to contain the vignette effect */
}

.exhibit-overlay .exhibit-content::before {
  content: "";
  position: absolute;
  top: -23%; /* Adjust the values to control the vignette size */
  right: -23%;
  bottom: -23%;
  left: -23%;
  box-shadow: inset 0 0 100px 50px rgba(0, 0, 0, 0.5); /* Adjust the box-shadow values to control the vignette effect */
  border-radius: 50%; /* Adjust the border-radius value to control the shape of the vignette */
}


      
              /* Styling for the exhibit content */
              .exhibit-content {
                  width: 1000px;
                  height: 600px;
                  background-color: #e0e0e0;
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
                background-image: url("https://gkieran.github.io/schoolstuff/curanderas/img/wall.png");
                background-size: cover;
              }
              .image-container {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;
    }

    .image-container img {
      height: 200px;
      width: 300px;
      margin-top: 10px;
    }
    @media screen and (max-width: 768px) {
      .image-container {
        flex-direction: column;
        align-items: center;
      }
    }
    .tooltip {
            position: relative;
            display: inline-block;
            cursor: pointer;
        }

        .tooltip .tooltiptext {
            position: absolute;
            bottom: calc(100% + 8px);
            left: 50%;
            transform: translateX(-50%);
            padding: 8px;
            background-color: #333;
            color: #fff;
            border-radius: 4px;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease-in-out;
            width: 200px;
        }

        .tooltip .tooltiptext:before {
            content: "";
            position: absolute;
            bottom: -8px;
            left: 50%;
            transform: translateX(-50%);
            border: 4px solid transparent;
            border-top-color: #333;
        }

        .tooltip:hover .tooltiptext {
            opacity: 1;
            visibility: visible;
        }
          </style>
      </head>
      <body>
        <img src="https://gkieran.github.io/schoolstuff/curanderas/img/exit.png" id="exit" style="height: 100px; width: 100px">
        <div style="height:70px"></div>
          <div class="museum-container w3-center">
              <!-- Exhibit Rooms -->
              <div class="exhibit-room" id="exhibit1"><strong>Exhibit 1:</strong> History of Curanderas</div>
              <div class="exhibit-room" id="exhibit2"><strong>Exhibit 2:</strong><br>Influences of Curanderismo</div>
              <div class="exhibit-room" id="exhibit3"><strong>Exhibit 3:</strong><br>Female Empowerment</div>
              <div class="exhibit-room" id="exhibit4"><strong>Exhibit 4:</strong><br>Modern Curanderismo</div>
              <div class="exhibit-room" id="exhibit5"><strong>Exhibit 5:</strong><br>Who are Las Curanderas?</div>
              <div class="exhibit-room" id="exhibit6"><strong>Exhibit 6:</strong><br>Role of Curanderas</div>
              <div class="exhibit-room" id="exhibit7"><strong>Exhibit 7:</strong><br>Why are they feared?</div>
              <div class="exhibit-room" id="exhibit8"><strong>Exhibit 8:</strong><br>Spiritual Connections</div>
      
              <!-- Exhibit Overlays -->
              <div class="exhibit-overlay" id="exhibit-overlay1">
                <div class="exhibit-content">
                    <div class="w3-container">
                        <h2 class="w3-center"><strong>History of Curanderas</strong></h2>
                        <h5>Graeme K</h5>
                        <div class="w3-row-padding">
                          <div class="w3-half">
                            <div class="w3-padding">
                              <p>Curanderas, or female healers, have a historical presence in societies influenced by Spanish culture. In regions like New Mexico, where access to medical doctors was limited in the past, curanderas have provided healing knowledge using local herbs, remedies, and common sense combined with faith. They are known for their extensive knowledge of plants and wildlife, creating medicines for specific ailments. Curanderas also serve as intermediaries between modern medicine and the local community, particularly in childbirth, where they have received specialized training.</p>
                            </div>
                            <p><a href="https://www.nmhistoricwomen.org/new-mexico-historic-women/curanderas-women-who-heal/">Source</a></p>
                          </div>
                          <div class="w3-half">
                            <div class="image-container">
                              <img src="img/ex1_img1.webp" alt="Curandera Image 1" class="w3-image">
                              <img src="img/ex1_img2.png" alt="Curandera Image 2" class="w3-image">
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    <span onclick="document.getElementById('exhibit-overlay1').style.display='none'"
                    class="w3-button w3-display-topright w3-xlarge" style="background-color: transparent">&times;</span>          
                  </div>
            </div>
            <div class="exhibit-overlay" id="exhibit-overlay2">
                <div class="exhibit-content">
                    <div class="w3-container">
                        <h2 class="w3-center"><strong>Influences of Curanderismo</strong></h2>
                        <h5>Graeme K</h5>
                        <div class="w3-row-padding">
                          <div class="w3-half">
                            <div class="w3-padding">
                              <p>Curanderismo is influenced by a blend of Native American and Spanish traditions. Judeo-Christian beliefs encompass the worship of a single, all-powerful God and the practice of religious rituals. Greek beliefs about the humors and hot/cold equilibrium relate to the ancient Greeks' understanding of the human body. African Santeria combines Christian saints with African deities in its rituals and ceremonies. Spiritualism involves altered states of consciousness and communication with spirits. These cultural belief systems are influenced by traditional practices, while scientific advancements in germs, psychology, and biomedicine are grounded in evidence-based research.</p>
                            </div>
                            <p><a href="http://www.ncfh.org/uploads/3/8/6/8/38685499/teaching_curanderismo_-_holistic_medicine_in_a_modern_world.pdf">Source</a></p>
                          </div>
                          <div class="w3-half">
                            <div class="image-container">
                              <img src="img/ex2_img1.jpeg" alt="Image" class="w3-image">
                              <img src="img/ex2_img2.jpeg" alt="Image" class="w3-image">
                            </div>
                          </div>
                        </div>
                      </div>   
                      <span onclick="document.getElementById('exhibit-overlay2').style.display='none'"
                    class="w3-button w3-display-topright w3-xlarge" style="background-color: transparent">&times;</span>   
                      </div>
                        
            </div>
            <div class="exhibit-overlay" id="exhibit-overlay3">
                <div class="exhibit-content">
                    <div class="w3-container">
                        <h2 class="w3-center"><strong>Curanderas and Female Empowerment</strong></h2>
                        <h5>Graeme K</h5>
                        <div class="w3-row-padding">
                          <div class="w3-half">
                            <div class="w3-padding">
                              <p>Curanderismo has been a powerful source of empowerment for women. Within curanderismo, women, known as curanderas, are revered as skilled healers who possess deep knowledge of herbs, rituals, and energy healing. This recognition challenges traditional gender norms and provides women with a sense of agency and authority within their communities. Curanderismo also offers an opportunity for women to connect with their ancestral heritage and reclaim indigenous wisdom, fostering a sense of cultural identity and pride. </p>
                            </div>

                            <div class="tooltip">
                                <a href="#" class="tooltip-link">Source</a>
                                <div class="tooltiptext">No source for this one, came up with it myself :)</div>
                            </div>

                        </div>
                          <div class="w3-half">
                            <div class="image-container">
                              <img src="img/ex3_img1.webp" alt="Image" class="w3-image">
                              <img src="img/ex3_img2.jpeg" alt="Image" class="w3-image">
                            </div>
                          </div>
                        </div>
                      </div>   
                      <span onclick="document.getElementById('exhibit-overlay3').style.display='none'"
                    class="w3-button w3-display-topright w3-xlarge" style="background-color: transparent">&times;</span>         
                   </div>
            </div>
            <div class="exhibit-overlay" id="exhibit-overlay4">
                <div class="exhibit-content">
                    <div class="w3-container">
                        <h2 class="w3-center"><strong>Modern Curanderismo</strong></h2>
                        <h5>Graeme K</h5>
                        <div class="w3-row-padding">
                          <div class="w3-half">
                            <div class="w3-padding">
                                <p>Curanderismo, the traditional healing practice rooted in Mexico and South America, continues to thrive in the modern age, finding acceptance and recognition among diverse populations. Practitioners like Tonita Gonzales, who has been trained in curanderismo and teaches others through online classes, emphasize the importance of taking responsibility for one's own healing and connecting with oneself on a spiritual level. While curanderismo has often been viewed with skepticism by Western-trained medical providers, there is a growing acceptance of its rich cultural heritage and the benefits it can bring. Many physicians now have an open mind towards curanderismo, because it can aid Western medicine and help patients. The interest in curanderismo courses, like the one taught by Prof. Cheo Torres, show growing awareness and appreciation of traditional healing in the modern world.</p>
                            </div>
                            <p><a href="https://www.kunm.org/public-health-new-mexico/2014-11-20/curanderismo-in-the-modern-age">Source</a></p>
                          </div>
                          <div class="w3-half">
                            <div class="image-container">
                              <img src="img/ex4_img1.jpeg" alt="Image" class="w3-image">
                              <img src="img/ex4_img2.webp" alt="Image" class="w3-image">
                            </div>
                          </div>
                        </div>
                      </div>   
                      <span onclick="document.getElementById('exhibit-overlay4').style.display='none'"
                    class="w3-button w3-display-topright w3-xlarge" style="background-color: transparent">&times;</span>  
                </div>
            </div>
            <div class="exhibit-overlay" id="exhibit-overlay5">
                <div class="exhibit-content">
                    <div class="w3-container">
                        <h2 class="w3-center"><strong>Who are Las Curanderas?</strong></h2>
                        <h5>Cece W</h5>
                        <div class="w3-row-padding">
                          <div class="w3-half">
                            <div class="w3-padding">
                              <p>The woman who is called La Grande or Ultima is a Curandera,  a traditional healer/ shaman. Ultima is a Curandera who has been trained by El Volar, the flying man from las pasturas. With her knowledge of medicinal plants and adoration for the llano (open plains) She uses her magic to aid the community.</p>
                            </div>
                            <p><a href="">Source</a></p>
                          </div>
                          <div class="w3-half">
                            <div class="image-container">
                              <img src="img/ex5_img1.png" alt="Image" class="w3-image">
                              <img src="img/ex5_img2.jpeg" alt="Image" class="w3-image">
                            </div>
                          </div>
                        </div>
                      </div>  
                    <span onclick="document.getElementById('exhibit-overlay5').style.display='none'"
                    class="w3-button w3-display-topright w3-xlarge" style="background-color: transparent">&times;</span> 
                </div>
            </div>
            <div class="exhibit-overlay" id="exhibit-overlay6">
                <div class="exhibit-content">
                    <div class="w3-container">
                        <h2 class="w3-center"><strong>Role of Curanderas</strong></h2>
                        <h5>Cece W</h5>
                        <div class="w3-row-padding">
                          <div class="w3-half">
                            <div class="w3-padding">
                              <p>Ultima's role as Curandera demonstrates the extent of which Chicano culture is a mixture of multiple and often conflicting influences. Curanderismo is the practice of folk medicine, a healing art heavily influenced by the knowledge and ancient religions of indigenous peoples. Curanderismo is associated with the treatment of both physical and supernatural illnesses.

                              </p>
                            </div>
                            <p><a href="">Source</a></p>
                          </div>
                          <div class="w3-half">
                            <div class="image-container">
                              <img src="img/ex6_img1.png" alt="Image" class="w3-image">
                              <img src="img/ex6_img2.jpeg" alt="Image" class="w3-image">
                            </div>
                          </div>
                        </div>
                      </div>  
                    <span onclick="document.getElementById('exhibit-overlay6').style.display='none'"
                    class="w3-button w3-display-topright w3-xlarge" style="background-color: transparent">&times;</span> 
                </div>
            </div>
            <div class="exhibit-overlay" id="exhibit-overlay7">
                <div class="exhibit-content">
                    <div class="w3-container">
                        <h2 class="w3-center"><strong>Why are Curanderas sometimes feared?</strong></h2>
                        <h5>Cece W</h5>
                        <div class="w3-row-padding">
                          <div class="w3-half">
                            <div class="w3-padding">
                              <p>The village residents fear Ultima because her healing powers are believed to be works of witchcraft and is misunderstood and suspected to be practicing witchcraft herself. The village residents also don't know what town Ultima came from.</p>
                            </div>
                            <p><a href="">Source</a></p>
                          </div>
                          <div class="w3-half">
                            <div class="image-container">
                              <img src="img/ex7_img1.png" alt="Image" class="w3-image">
                              <img src="img/ex7_img2.jpeg" alt="Image" class="w3-image">
                            </div>
                          </div>
                        </div>
                      </div>  
                    <span onclick="document.getElementById('exhibit-overlay7').style.display='none'"
                    class="w3-button w3-display-topright w3-xlarge" style="background-color: transparent">&times;</span> 
                </div>
            </div>
            <div class="exhibit-overlay" id="exhibit-overlay8">
                <div class="exhibit-content">
                    <div class="w3-container">
                        <h2 class="w3-center"><strong>Spiritual Connections</strong></h2>
                        <h5>Cece W</h5>
                        <div class="w3-row-padding">
                          <div class="w3-half">
                            <div class="w3-padding">
                              <p>Ultima has a spirit animal which is an owl which she has an inseparable link to. It is a symbolic representation of Ultima itself and acts as her messenger and guide. People say owls are usually said to be a disguise taken by witches. But Ultima's owl is a protector.</p>
                            </div>
                            <p><a href="">Source</a></p>
                          </div>
                          <div class="w3-half">
                            <div class="image-container">
                              <img src="img/" alt="Image" class="w3-image">
                              <img src="img/" alt="Image" class="w3-image">
                            </div>
                          </div>
                        </div>
                      </div>  
                    <span onclick="document.getElementById('exhibit-overlay8').style.display='none'"
                    class="w3-button w3-display-topright w3-xlarge" style="background-color: transparent">&times;</span> 
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
