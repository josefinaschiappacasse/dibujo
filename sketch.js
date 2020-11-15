function setup() {
  createCanvas(710, 400, WEBGL);
  background(255);
}

function draw() {

  if (mouseIsPressed) {
    background(255);
  }
  variableEllipse(mouseX, mouseY, pmouseX, pmouseY);
}

function variableEllipse(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  sphere(x, speed, speed);
}

function keyPressed() {
  if (key === ' ') {
    fill(random(0), random(100, 200), random(100, 200));
  }
}