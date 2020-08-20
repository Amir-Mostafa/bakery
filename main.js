document.getElementById("button").addEventListener("click", function() {
  document.documentElement.requestFullScreen();
  screen.orientation.lock("portrait-primary");

 }, false);