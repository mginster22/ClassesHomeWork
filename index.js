class RangeValidator {
  constructor(to, from) {
    this.to = to;
    this.from = from;
  }
  get to() {
    return this._to;
  }
  set to(to) {
    if (typeof to === false) {
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
const range1 = new RangeValidator(1,20);
console.log(range1.validate(10));
