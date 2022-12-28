setTimeout(function(){
  $('#cookie-popup').fadeIn(2000);  
}, 2000);

$("#cpbtn").click(function() {
  $("#cookie-popup").fadeOut();
});
$(function() {
  $("#switchDm").click(function() {
    $("html").toggleClass("dark_mode");
    $("#steamstats").toggleClass("dark_mode");
    $("#csgostats").toggleClass("dark_mode");
    $("#d-ltoggle").toggleClass("fa-solid fa-sun");
    $("#d-ltoggle").toggleClass("fa-solid fa-moon");
  });
});
window.onscroll = function() {replace()};
function replace() {
  var navbar = document.getElementById("myNavbar");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
  } else {
      navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
  }
}


function toggleFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
  } else {
      x.className = x.className.replace(" w3-show", "");
  }
}
function setDark() {
  $("html").toggleClass("dark_mode");
  $("#steamstats").toggleClass("dark_mode");
  $("#csgostats").toggleClass("dark_mode");
  $("#d-ltoggle").toggleClass("fa-solid fa-sun");
  $("#d-ltoggle").toggleClass("fa-solid fa-moon");
}
window.onload =     setDark();






