class Polygon extends Shape {
  constructor(_posX, _posY, _scale = 1, _innerRadius) {
    super(_posX, _posY, _scale);

    this.innerRadius = _innerRadius;
    this.numberSides = 6;
  }

  render() {
    noStroke();
    fill(255, 0, 0);

    push();
    translate(this.posX, this.posY);
    rotate(this.angle);
    scale(this.scale);
    let angleStep = 360 / this.numberSides;
    
    // Clockwise
    beginShape();
    for (let a = 0; a < 360; a += angleStep) {
      let posX = (this.width / 2) * cos(a);
      let posY = (this.width / 2) * sin(a);
      vertex(posX, posY);
    }

    //antiClockwise
    beginContour();
    for (let a = 360; a > 0; a -= angleStep) {
      let posX = this.innerRadius * cos(a);
      let posY = this.innerRadius * sin(a);
      vertex(posX, posY);
    }
    endContour();
    endShape();
    pop();
  }
}
