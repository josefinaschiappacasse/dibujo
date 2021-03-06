
let sketch;

function setup() {
  sketch = createCanvas(710, windowHeight, WEBGL);
  sketch.parent("p5");
  background(255);
}

function draw() {

  if (mouseIsPressed) {
    background(255);
  }
  variable(mouseX, mouseY, pmouseX, pmouseY);
}

function variable(x, y, px, py) {
  let speed = abs(x - px) + abs(y - py);
  sphere(x, speed, speed);
}

function keyPressed() {
  if (key === 'c') {
    fill(random(0), random(100, 200), random(100, 200));
  }
}
function keyTyped() {
  if (key == 'a') save("P_2_2_4_02.png");
}
