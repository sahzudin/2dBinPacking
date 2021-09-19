export class Container{

  constructor(width, height, x, y){
    this.width = width
    this.height = height
    this.x = x
    this.y = y
  }

  width: number;
  height: number;
  x: number;
  y: number;
  used?: boolean = false;
  right?: Container;
  bottom?: Container;

}
