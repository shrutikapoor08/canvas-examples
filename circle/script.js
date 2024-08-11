canvas = document.getElementById("circle-canvas");
context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawCircle(event) {
  document.getElementById("info").classList.add("hidden");

  const x = event.pageX;
  const y = event.pageY;
  const radius = 20;
  //arc
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);

  context.fillStyle = "red";
  context.fill();

  context.strokeStyle = "red";
  context.stroke();
}

function onResize(event) {
  canvas.width = window.width;
  canvas.height = window.height;
}

canvas.addEventListener("click", drawCircle, false);
window.addEventListener("resize", onResize, false);
