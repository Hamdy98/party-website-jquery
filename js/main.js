$(document).ready(function() {
  // Open Sidebar Button
  $("#main span").click(function() {
    $("#mySidenav, #main span").toggleClass("active")
  })
  // Close Sidebar Button
  $("#mySidenav i").click(function() {
    $("#mySidenav, #main span").removeClass("active")
  })

  // When Click Singer Header
  $("#singers").click(function(e) {
    let myH3 = e.target;
    console.log(myH3);
    $(myH3).next(".singer-div").slideToggle();
  })

  // CountDown Section
  let countDownData = new Date("June 24, 2023 2:24:24").getTime();
  // Update the count down every 1 second
  let countDownInterval = setInterval(function() {
    // Get today's date and time
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    let distance = countDownData - now;
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    $("#counterSection .days").text(`${days} d`);
    $("#counterSection .hours").text(`${hours} h`);
    $("#counterSection .munites").text(`${minutes} m`);
    $("#counterSection .seconds").text(`${seconds} s`);

    // If the count down is over, write some text 
    if(distance < 0) {
      clearInterval(countDownInterval);
      $("#counterSection .container").text("EXPIRED")
    }
  }, 1000);

  // Textarea Calc Chars
  let maxlength = $("textarea").attr("maxlength");
  $("textarea").keyup(function() {
    let currentLength = $("textarea").val().length;
    maxlength - currentLength == 0 ?
      $("#characterReamining").html("<span id='char'>your available character finished</span>") 
      : $("#characterReamining").html(`<p id="characterReamining"><span id="char">${maxlength - currentLength}</span> Character Reamining</p>`);
  })
})
