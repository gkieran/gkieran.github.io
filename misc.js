//all the random little js things ;)

//Dark/Light mode functions

let mainBody = document.querySelectorAll(".mainBody")
let h2 = document.querySelectorAll("h2");
let h4 = document.querySelectorAll("h4");
let pItem = document.querySelectorAll(".pItem");
let pageHeader = document.querySelectorAll(".pageHeader");
let dropbtn= document.querySelectorAll(".dropbtn");
let pageOptionsMenu = document.querySelectorAll("pageOptionsMenu");
let bn59 = document.querySelectorAll(".bn59");
let pinfocw = document.querySelectorAll("#cw");
let db = document.querySelectorAll("#db");
let lb = document.querySelectorAll("#lb");
let tcnt = document.querySelectorAll(".tgs-container");

    function goingDark() {
        mainBody.forEach(element => {
            element.style.backgroundColor = "#303233"
            element.style.color = "#ffffff"
            element.style.borderColor = "#ffffff"
            element.style.opacity = "100"
        });
        h2.forEach(element => {
            element.style.backgroundColor = "#303233"
            element.style.color = "#ffffff"
        });
        pItem.forEach(element => {
          element.style.borderColor = "#000000"
      });
        pageHeader.forEach(element => {
        element.style.backgroundColor = "#303233"
      });
      dropbtn.forEach(element => {
       // element.style.backgroundColor = "#ffffff"
        element.style.color = "white"
      });
      bn59.forEach(element => {
        element.style.backgroundColor = "#303233"
        element.style.color = "#ffffff"
      });
      pinfocw.forEach(element => {
        element.style.backgroundImage = "url('https://raw.githubusercontent.com/bean-frog/random-item-storage-for-cdns/main/mcbg-dark.PNG')"
      });
      db.forEach(element => {
        element.style.color = "#ffffff"
      });
      lb.forEach(element => {
        element.style.color = "#ffffff"
      });
      tcnt.forEach(element => {
        element.style.color = "#000000"
        element.style.borderColor = "#ffffff"
      });
    }


    function goingLight() {
        mainBody.forEach(element => {
            element.style.backgroundColor = "#ffffff"
            element.style.color = "#000000"
            element.style.borderColor = "#000000"
            element.style.opacity = "100"
        });
        h2.forEach(element => {
            element.style.backgroundColor = "#ffffff"
            element.style.color = "#000000"
        });
        pItem.forEach(element => {
          element.style.borderColor = "#000000"
      });
        pageHeader.forEach(element => {
        element.style.backgroundColor = "#ffffff"
      });
      dropbtn.forEach(element => {
       // element.style.backgroundColor = "transparent"
        element.style.color = "black"
      });
      bn59.forEach(element => {
        element.style.backgroundColor = "#ffffff"
        element.style.color = "#303233"
      });
      pinfocw.forEach(element => {
        element.style.backgroundImage = "url('https://raw.githubusercontent.com/bean-frog/random-item-storage-for-cdns/main/mcbg-light.PNG')"
      });
      db.forEach(element => {
        element.style.color = "#000000"
      });
      lb.forEach(element => {
        element.style.color = "#000000"
      });
      tcnt.forEach(element => {
        element.style.color = "#000000"
        element.style.borderColor ="#000000"
      });
    }
//toggle menu

function menutoggle() {
    $(".pageOptionsMenu").toggle();
}
/*
let pageOptionsMenu = document.querySelectorAll(".pageOptionsMenu")
let menubtn = document.querySelectorAll("bn59")
function menuOpen() {
    pageOptionsMenu.forEach(element => {
        element.style.display = "block"
    });
    menubtn.forEach(element => {
        element.style.display = "none"
    });
}
function menuClose() {
    pageOptionsMenu.forEach(element => {
        element.style.display = "none"
    });
    menubtn.forEach(element => {
        element.style.display = "block"
    });
}
*/
//exerimental loading screen purely for the looks
const min = 100;
const max = 300;

let loadDiv = document.querySelectorAll("loadDiv")
function showLoading() {
    loadDiv.forEach(element => {
        element.style.display = "block"
    });
}
setTimeout(function() {
    $('#loadDiv').fadeOut('fast');
}, Math.random() * (max - min) + min);

//advertisement popups
const adTimeMin = 10000;
const adTimeMax = 60000;
let adBanner = document.querySelectorAll("adBanner")
function adAppear() {
    adBanner.forEach(element =>{
        element.style.display = "block"
    });
}
setTimeout(function() {
    $('#adBanner').fadeOut('fast');
}, Math.random() * (adTimeMax - adTimeMin) + adTimeMin);

//reveal gaben after 15 seconds

const gabenTime = 15000;
const byeGaben = 20000;

function showGaben() {
    document.getElementById("gaben").style.visibility = "visible";
}
setTimeout(showGaben,gabenTime);

function hideGaben() {
    document.getElementById("gaben").style.visibility = "hidden";
}
setTimeout(hideGaben, byeGaben);

//cookie consent
// define timeline
const tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power1.out" } });

// slide up cookie bar
tl.fromTo(".cookie-wrapper", { y: 400 }, { y: 0 });

//cookie jump animation
tl.fromTo(
  ".cookie",
  { y: 0, rotation: 0 },
  { y: -20, rotation: "-20deg", yoyo: true, repeat: -1 }
);

// animate cookie crumbs
tl.fromTo("#crumbs", { y: 0 }, { y: -20, yoyo: true, repeat: -1 }, "<");

// get button
const cookieBtn = document.querySelector(".cookie-btn");

// slide down cookie bar on btn click
cookieBtn.addEventListener("click", () => {
  gsap.to(".cookie-wrapper", { y: 400, duration: 0.4, ease: "power1.out" });
});


