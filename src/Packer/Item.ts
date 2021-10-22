import { Sheet } from "./Sheet"

export class Item{

  constructor(width: number, height: number){
    this.width = width
    this.height = height
  }

  id: number
  name?: string
  width: number
  height: number
  x?: number
  y?: number
  used: boolean = false
  sheet?: Sheet
  rotated: boolean

  reset(){
    this.x = undefined
    this.y = undefined
    this.used = false
    this.sheet = undefined
  }

  getArea(){
    return this.width * this.height
  }

  getLongestSide(){
    return this.width >= this.height ? this.width : this.height
  }

}
