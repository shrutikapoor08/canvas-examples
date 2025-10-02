// // Step 1: setup canvas
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Step 2: respond to events
canvas.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// // Step 3: handle drawing circle
const radius = 20;
let x, y;
const draw = () => {
  console.log(x, y);
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.strokeStyle = `#000000`;
  context.stroke();
};

// canvas.addEventListener("click", (event) => {
//   x = event.pageX;
//   y = event.pageY;
//   draw();
// });

// Step 4: make it move

const animate = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  const dx = 1;
  const dy = 1;
  x = x + dx;
  y = y - dy;
  draw();

  requestAnimationFrame(animate);
};

// animate();

// Step 5:  add chaos
//  randomize radius, speed, color, etc.

// Step 6: Make it DRY
const particleArray = [];

class Particle {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 40;
    this.dx = Math.random() * 3;
    this.dy = Math.random() * 3;
    this.hue = 200;
  }

  //draw circle
  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.strokeStyle = `hsl(${this.hue} 100% 50%)`;
    context.stroke();

    const gradient = context.createRadialGradient(
      this.x,
      this.y,
      1,
      this.x + 0.5,
      this.y + 0.5,
      this.radius
    );

    gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.3)");
    gradient.addColorStop(0.95, "#e7feff");

    context.fillStyle = gradient;
    context.fill();
  }

  // move circle
  move() {
    this.x = this.x + this.dx;
    this.y = this.y - this.dy;
  }
}

const handleDrawCircle = (a, b) => {
  //   a = event.pageX;
  //   b = event.pageY;

  for (let i = 0; i < 10; i++) {
    const particle = new Particle(a, b);
    particleArray.push(particle);
  }
};

const animateClass = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  particleArray.forEach((particle) => {
    particle?.move();
    particle?.draw();
  });

  requestAnimationFrame(animateClass);
};

animateClass();

canvas.addEventListener("click", (event) =>
  handleDrawCircle(event.pageX, event.pageY)
);

// Step 7: Sass it up

// const gradient = context.createRadialGradient(
//   this.x,
//   this.y,
//   1,
//   this.x + 0.5,
//   this.y + 0.5,
//   this.radius
// );

// gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.3)");
// gradient.addColorStop(0.95, "#e7feff");

// context.fillStyle = gradient;
// let isDrawing;

// canvas.addEventListener("mousedown", (event) => {
//   isDrawing = true;
// });

// canvas.addEventListener("mousemove", (e) => {
//   if (isDrawing) {
//     handleDrawCircle(e.offsetX, e.offsetY);
//   }
// });

// canvas.addEventListener("mouseup", (event) => {
//   console.log("handling drag end", event.offsetX);
//   isDrawing = false;
// });
