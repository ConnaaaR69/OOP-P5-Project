class Square extends Shape {
  constructor(_posX, _posY, _scale = 1) {
    super(_posX, _posY, _scale);
  }

  render() {
    noStroke();
    fill(180, 0, 0);
    push();
    translate(this.posX, this.posY);
    scale(this.scale);
    rotate(this.angle);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
