document.addEventListener("DOMContentLoaded", function() {
var targetDate = new Date("2024-03-07T23:30:00").getTime();
//Function to update countdown timer
function updateTimer() {
  var currentTime = new Date().getTime();
  var timeDifference = targetDate - currentTime;
  if (timeDifference <= 0) {
    clearInterval(intervalId);
document.getElementById("days").innerHTML = "00 <span class='text'>DAYS</span>";

document.getElementById("hours").innerHTML = "00 <span class='text'>HOURS</span>";

document.getElementById("minutes").innerHTML = "00 <span class='text'>MINS</span>";

document.getElementById("seconds").innerHTML = "00 <span class='text'>SECS</span>";
       return;
  }
  var days = Math.floor(timeDifference / (1000 * 60 * 60* 24));

  var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));

  var seconds = Math.floor((timeDifference % (1000 * 60)) /1000);
  //Display the result in the element with id

  document.getElementById("days").innerHTML = days + " <span class='text'>DAYS</span>";

  document.getElementById("hours").innerHTML = hours + " <span class='text'>HOURS</span>";

  document.getElementById("minutes").innerHTML = minutes + " <span class='text'>MINS</span>";

  document.getElementById("seconds").innerHTML = seconds + " <span class='text'>SECS</span>";
}

//Update the countdown timer immediately
updateTimer();

//Update the countdown timer every second
var intervalid =
setInterval(updateTimer, 1000)
}
);