
let size = 50;
let boxes = [];
let minor;

function setup() {
  // size = windowHeight / numberBoxes - 100;
  createCanvas(windowWidth, windowHeight, WEBGL);
  background(49, 48, 46);
  // for (let i = 0; i < numberBoxes; i++) {
  //   boxes.push(new Box(size, 10, 1));
  //   size += size;
  // }
  while (size < width / 2) {
    boxes.push(new Box(size, 10, 1));
    size += size;
  }
  console.log(boxes);
}

function draw() {
  background(49, 48, 46);

  boxes.forEach((box, index) => {
    box.angle = box.angle + 0.01;
    if (index % 2 == 0) {

      push();
      rotateY(box.angle);
      box.drawBox();
      pop();

    } else {

      push();
      rotateX(box.angle);
      box.drawBox();
      pop();
      
    }
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
