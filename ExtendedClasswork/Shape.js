class Shape {
  constructor(_posX, _posY, _scale = 1) {
    this.posX = _posX;
    this.posY = _posY;
    this.width = 500;
    this.height = 35;
    this.angle = angle +2;
    this.scale = _scale;
  }
  step() {
    this.angle += 1;
  }
}
