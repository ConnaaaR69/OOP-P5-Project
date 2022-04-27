class MainBox {
  constructor(_size) {
    this.size = _size;
      }

  renderMain() {
    // translate(canvasSize / 2, canvasSize / 2); -- unneeded with WEBGL
    //front sides
    line(this.size, this.size, -this.size, this.size, -this.size, -this.size);
    line(this.size, this.size, -this.size, -this.size, this.size, -this.size);
    line(-this.size, this.size, -this.size, -this.size, -this.size, -this.size);
    line(this.size, -this.size, -this.size, -this.size, -this.size, -this.size);

    //top sides
    line(-this.size, -this.size, this.size, -this.size, -this.size, -this.size);
    line(this.size, -this.size, this.size, this.size, -this.size, -this.size);
    //bottom sides
    line(-this.size, this.size, -this.size, -this.size, this.size, this.size);
    line(this.size, this.size, -this.size, this.size, this.size, this.size);

    //back sides
    line(-this.size, -this.size, this.size, -this.size, this.size, this.size);
    line(-this.size, -this.size, this.size, this.size, -this.size, this.size);
    line(this.size, -this.size, this.size, this.size, this.size, this.size);
    line(-this.size, this.size, this.size, this.size, this.size, this.size);
  }
}
