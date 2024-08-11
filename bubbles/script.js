const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particleArray = [];
class Particle {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 50;
    this.dx = Math.random() * 3;
    this.dy = Math.random() * 7;
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

const handleDrawCircle = (event) => {
  a = event.pageX;
  b = event.pageY;

  for (let i = 0; i < 50; i++) {
    const particle = new Particle(a, b);
    particleArray.push(particle);
  }
};

const animate = () => {
  context.clearRect(0, 0, canvas.width, canvas.height);

  particleArray.forEach((particle) => {
    particle?.move();
    particle?.draw();
  });

  requestAnimationFrame(animate);
};

animate();

canvas.addEventListener("click", handleDrawCircle);
canvas.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
