var intervalId = 0;
var started = false;
var clk = document.getElementById("dt");
var btn = document.getElementById("greet");
function isTouchDevice() {
  return (('ontouchstart' in window) ||
     (navigator.maxTouchPoints > 0) ||
     (navigator.msMaxTouchPoints > 0));
}
if (isTouchDevice()) {
    btn.innerHTML = "Press to toggle clock";
    btn.addEventListener("click", (e) => {
        if (!started) {
            intervalId = setInterval(() => clk.innerHTML = new Date().toLocaleTimeString(), 1000);
            started = !started;
        }
        else {
            clearInterval(intervalId);
            started = !started;
        }
    });
}
else {
    btn.addEventListener("mouseenter", (e) => intervalId = setInterval(() => clk.innerHTML = new Date().toLocaleTimeString(), 1000));
    btn.addEventListener("mouseleave", (e) => clearInterval(intervalId));
}
