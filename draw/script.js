canvas = document.getElementById("draw-canvas");
ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = { down: false };

function drawRect(event) {
  if (mouse.down) {
    document.getElementById("info").classList.add("hidden");

    const x = event.pageX;
    const y = event.pageY;

    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 5, 5);
  }
}
function mouseMove(event) {
  drawRect(event);
}

function mouseUp() {
  mouse.down = false;
}

function mouseDown(event) {
  mouse.down = true;
  drawRect(event);
}

function onResize(event) {
  canvas.width = window.width;
  canvas.height = window.height;
}

canvas.addEventListener("mousedown", mouseDown, false);
canvas.addEventListener("mousemove", mouseMove, false);
canvas.addEventListener("mouseup", mouseUp, false);
window.addEventListener("resize", onResize, false);
