
let sketch;

function setup() {
  sketch = createCanvas(710, 400, WEBGL);
  sketch.parent("p5");
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
  if (key === 'c') {
    fill(random(0), random(100, 200), random(100, 200));
  }
}