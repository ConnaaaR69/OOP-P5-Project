class CirclePattern {
  constructor(_posX, _posY, _numOfObjects, _radius, _scale = 1) {
    this.shapes = [];
    this.numOfObjects = _numOfObjects;
    this.angleStep = 360 / this.numOfObjects;
    this.radius = _radius;
    this.scale = _scale;

    this.posX = _posX;
    this.posY = _posY;
  }

  populateShapes() {
    for (let a = 0; a < 360; a = a + this.angleStep) {
      let posX = this.radius * cos(a);
      let posY = this.radius * sin(a);
    
      this.shapes.push(new Polygon(posX, posY, 0.1, 200, 5));
     
      if(this.shapes.length > this.numOfObjects){
        this.shapes.shift();  
      }
    }
  }

  render() {
    push();
    translate(this.posX, this.posY);
    this.shapes.forEach((shape) => {
      shape.render();
      shape.step();
    });
    pop();
  }
}
