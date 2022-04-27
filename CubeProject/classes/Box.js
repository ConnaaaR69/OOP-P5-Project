class Box {
    /*
    This class will construct a box using the Box 3d primitive.
    Although this class has the advantage of simplicity over my other classes
    the 3d effect does become less convincing as the transparency doesn't work 
    completely as intended.
    The lines of the boxes are not shown when behind a smaller box.
    */
  constructor(_size, _rotVal, _angle) {
    this.size = _size;
    this.angle = _angle;
    this.r = Math.round(Math.random() * 255);
    this.g = Math.round(Math.random() * 255);
    this.b = Math.round(Math.random() * 255);
  }

  drawBox() {
    let boxColor = color(this.r, this.g, this.b);
    fill(0,0,0,0);
    strokeWeight(2);
    stroke(this.r, this.g, this.b);
    box(this.size);
  }
}
