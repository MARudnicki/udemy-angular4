interface Point {
  x: number,
  y: number

  draw(): void
}

class PointImpl implements Point {

  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static drawStatic(): void {
    console.log("this one is static")
  }

  draw(): void {
    console.log("x=" + this.x + ", y=" + this.y)
  }
}

class PointImpleSecond implements Point {

  constructor(public x: number, public y: number) {

  }


  draw(): void {
    console.log("x is " + this.x + " and u is " + this.y);
  }
}

class OtherPointType {


  constructor(private x: number, private y?: number) {

  }

  drawOther(): void {
    console.log("X is " + this.x + " y is " + this.y)
  }
}


// console.log(new PointImpl(123, 321).draw());
// console.log(new PointImpl().draw());
// console.log(PointImpl.drawStatic());

// console.log(new PointImpleSecond(1, -1).draw());
console.log(new OtherPointType(1).drawOther());
