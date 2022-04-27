class MinorBox extends MainBox{
  constructor(_size, _rotVal ,_amp, _freq, _pulse = true) {
    super(_size);
    this.amp = _amp;
    this.freq = _freq;
    this.pulse = _pulse;
    this.rotVal = _rotVal
  }

  drawBox() {
    push();
    //front sides
    this.rotVal = frameCount * -0.02;
    rotateY(this.rotVal);
    rotateX(this.rotVal);

    stroke(227, 227, 0);

    if (this.pulse) {
      size2 = sin((frameCount * freq) / 1000) * amp + amp * 2; // the two 'amps' here allow for a cube that doesnt completely collapse
    }

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
    pop();
  }
}
