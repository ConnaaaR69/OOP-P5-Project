const ARRAYMAX = 10;

let circles = [];
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);

  // myPatterns.push();
  // myPatterns.push(new CirclePattern(400, 400, 10, 100));

  for (let i = 0; i < ARRAYMAX; i++) {
    circles.push(new CirclePattern(0, 0, 10, 0 + i * 180, 1));
  }

  fill(255, 0, 0);
}
function draw() {
  background(30);

  push();
  rotate(angle);
  angle++;
  pop();



  translate(width / 2, height / 2);
  rotate(angle);

  translate(10, 10);
  circles.forEach((i) => {
    if (i.radius > width) {
      i.radius = 0;
    } else {
      i.radius = i.radius + 1;
      i.scale = i.scale + 1;
      i.populateShapes();
      i.render();
    }
  });

  // console.log(angle);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
