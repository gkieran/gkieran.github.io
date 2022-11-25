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