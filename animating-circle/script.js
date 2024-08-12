const canvas = document.getElementById("animating-circle-canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// initialize variables
let a = Math.random() * innerWidth;
let b = Math.random() * innerHeight;
let dx = 4;
let dy = 5;
let radius = 30;

const drawCircle = (x, y) => {
  //arc
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI, false);

  context.fillStyle = "red";
  context.fill();

  context.strokeStyle = "red";
  context.stroke();
};

const handleCircle = (event) => {
  a = event.pageX;
  b = event.pageY;
  dx = Math.random() * 10;
  dy = Math.random() * 10;
  radius = Math.random() * 50;
};

const animate = () => {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  requestAnimationFrame(animate);

  if (a + radius > window.innerWidth || a - radius < 0) {
    dx = -dx;
  } else if (b - radius < 0 || b + radius > window.innerHeight) {
    dy = -dy;
  }

  drawCircle(a, b);
  a = a + dx;
  b = b + dy;
};

animate();

canvas.addEventListener("click", handleCircle);
