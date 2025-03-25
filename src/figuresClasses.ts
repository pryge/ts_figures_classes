export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  a: number;

  b: number;

  c: number;

  color: string;

  constructor(a: number, b: number, c: number, color: string) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid triangle sides');
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  radius: number;

  color: string;

  constructor(radius: number, color: string) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }

    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  a: number;

  b: number;

  color: string;

  constructor(a: number, b: number, color: string) {
    if (a <= 0 || b <= 0) {
      throw new Error('Invalid rectangle sides');
    }

    this.a = a;
    this.b = b;
    this.color = color;
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
