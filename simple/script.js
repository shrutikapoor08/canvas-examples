canvas = document.getElementById("circle-canvas");
ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawCircle(event) {
  console.log("drawing");

  document.getElementById("info").classList.add("hidden");

  const centerX = event.pageX;
  const centerY = event.pageY;
  const radius = 20;

  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.fill();

  ctx.lineWidth = 5;
  ctx.strokeStyle = "red";
  ctx.stroke();
}

function onResize(event) {
  canvas.width = window.width;
  canvas.height = window.height;
}

canvas.addEventListener("click", drawCircle, false);
window.addEventListener("resize", onResize, false);
