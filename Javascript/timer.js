var currentTime = 0;
var running = 0;

function startTotalTimer() {
  totalIncrement(0);
}

function startCurrentTimer() {
  running = 1;
  currentIncrement(currentTime)
}

function totalIncrement(time) {
  setTimeout(function() {
    time++;
    var mins = Math.floor(time / 10 / 60);
    var secs = Math.floor(time / 10 % 60);
    var hours = Math.floor(time / 10 / 60 / 60);
    var tenth = time % 10;

    if (mins < 10) {
      mins = "0" + mins;
    }

    if (secs < 10) {
      secs = "0" + secs;
    }

    document.getElementById("total-timer-output").innerHTML = "Total Time: " + hours + ":" + mins + ":" + secs + ":" + tenth + "0";
    totalIncrement(time);
  }, 100)
}


function currentIncrement(time) {
  if (running == 1) {
    setTimeout(function() {
      time++;
      var mins = Math.floor(time / 10 / 60);
      var secs = Math.floor(time / 10 % 60);
      var hours = Math.floor(time / 10 / 60 / 60);
      var tenth = time % 10;

      if (mins < 10) {
        mins = "0" + mins;
      }

      if (secs < 10) {
        secs = "0" + secs;
      }

      document.getElementById("current-timer-output").innerHTML = "Time On Current Question: " + hours + ":" + mins + ":" + secs + ":" + tenth + "0";
      currentIncrement(time, running);
    }, 100)
  }
}

function currentStop() {
  running = 0;
  currentTime = 0;
}

function currentReset() {
  running = 1;
  currentIncrement(0);
}
