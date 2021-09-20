import { Container } from "./Container";
import { Item } from "./Item";

export class Sheet extends Container{

  items?: Item[] = [];

  constructor(width: number, height: number, x: number, y:number, items: Item[]){
    super(width, height, x, y);
    this.items = items;
  }
}
