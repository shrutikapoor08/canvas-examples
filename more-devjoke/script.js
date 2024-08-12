const devjokes = ["A dell"];

let position = { x: 0, y: window.innerHeight / 2 };
let angleDistortion = 0;
let hue = 0;
let counter = 0;

canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const getDevjoke = () => devjokes[0];

let devjoke = getDevjoke();

window.onresize = function (event) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const mouse = { x: 0, y: 0, down: false };

const renderEmojis = () => {
  const emojiSize = Math.random() * 132;

  context.textAlign = "center";
  context.textBaseline = "middle";

  // draw the emoji
  for (let i = 0; i < 10; i++) {
    context.font = emojiSize + "px bold serif";
    context.fillText(
      "😜",
      Math.random() * canvas.width,
      Math.random() * canvas.height
    );
  }
};

function draw() {
  if (mouse.down) {
    document.getElementById("info").classList.add("hidden");
    if (counter === 0) clearCanvas();
    var d = distance(position, mouse);
    var letter = devjoke[counter];
    const fontSize = 48;
    var stepSize = fontSize;

    if (d > stepSize) {
      var angle = Math.atan2(mouse.y - position.y, mouse.x - position.x);

      context.save();
      context.font = fontSize + "px serif";
      context.translate(position.x, position.y);
      context.fillStyle = `hsl(${hue}, 100%, 50%)`;
      context.fillText(letter, 0, 0);
      context.restore();
      counter++;

      renderEmojis();
      if (counter > devjoke.length - 1) {
        counter = 0;

        renderEmojis();
        devjoke = getDevjoke();
        hue = hue + 105;
        mouse.down = false;
      }

      position.x = position.x + Math.cos(angle) * stepSize;
      position.y = position.y + Math.sin(angle) * stepSize;
    }
  }
}

const mouseMove = (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
  draw();
};

const mouseDown = (event) => {
  mouse.down = true;

  position.x = event.pageX;
  position.y = event.pageY;

  draw();
};

const mouseUp = () => {
  mouse.down = false;
};

const clearCanvas = (event) => {
  canvas.width = canvas.width;
  counter = 0;
};

function distance(pt, pt2) {
  var xs = 0;
  var ys = 0;

  xs = pt2.x - pt.x;
  xs = xs * xs;

  ys = pt2.y - pt.y;
  ys = ys * ys;

  return Math.sqrt(xs + ys);
}

canvas.addEventListener("mousemove", mouseMove, false);
canvas.addEventListener("mousedown", mouseDown, false);
canvas.addEventListener("mouseup", mouseUp, false);
canvas.addEventListener("dblclick", clearCanvas, false);
