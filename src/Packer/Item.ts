import { Sheet } from "./Sheet"

export class Item{

  constructor(width: number, height: number){
    this.width = width
    this.height = height
  }

  name?: string
  width: number
  height: number
  x?: number
  y?: number
  used: boolean = false
  sheet?: Sheet

  reset(){
    this.x = undefined
    this.y = undefined
    this.used = false
    this.sheet = undefined
  }

}
