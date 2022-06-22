class RangeValidator {
  constructor(to, from) {
    this.to = to;
    this.from = from;
  }
  get to() {
    return this._to;
  }
  set to(to) {
    if (typeof to !== "number") {
      throw new TypeError("Error,to, must be a number");
    }
    if (to <= this._from) {
      throw new RangeError("Number from,must be less number to");
    }
    this._to = to;
  }
  get from() {
    return this._from;
  }
  set from(from) {
    if (typeof from === false) {
      throw new TypeError("Error,from, must be a number");
    }
    this._from = from;
  }
  get range() {
    return [this._from, this._to];
  }
  validate(num) {
    if (num >= this._from && num <= this._to) {
      return num;
    }
    throw new RangeError(
      `This number ${num} not range ${this._from} to ${this._to}`
    );
  }
}
// const range1 = new RangeValidator(1,20);
// console.log(range1.validate(10));

class Figure3D {
  constructor(name) {
    this.name = name;
  }
  getVolume() {
    return null;
  }
}

class Ball extends Figure3D {
  constructor(radius) {
    super("Ball");
    this.radius = radius;
  }
  getVolume() {
    return (4 / 3) * (Math.PI * Math.pow(this.radius, 3));
  }
}
class Cylinder extends Figure3D {
  constructor(height, square) {
    super("Cylinder");
    this.square = square;
    this.height = height;
  }
  getVolume() {
    return this.square * this.height;
  }
}
class Cube extends Figure3D {
  constructor(volume) {
    super("Cube");
    this.volume = volume;
  }
  getVolume() {
    return Math.pow(this.volume, 3);
  }
}

const ball = new Ball(3);
const cylinder = new Cylinder(2, 5);

console.log(cylinder.getVolume());
console.log(ball.getVolume());
