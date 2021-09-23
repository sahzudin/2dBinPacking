import { Sheet } from "./Sheet"

export class Item{

  constructor(width: number, height: number){
    this.width = width
    this.height = height
  }

  width: number
  height: number
  x?: number
  y?: number
  used: boolean = false
  sheet?: Sheet


}
