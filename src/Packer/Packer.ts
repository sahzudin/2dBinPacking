import { Container } from "./Container";
import { Item } from "./Item";
import { Sheet } from "./Sheet";

export class Packer {

  sheet: Sheet
  items: Item[]
  nodes: Sheet[] = [];
  padding: number = 20

  constructor(items: Item[], sheet: Sheet){
    this.items = items
    this.sheet = sheet
  }

  pack(){
    this.items.map( x => {
      x.used = false
    })

    this.items.sort( (a: Item, b:Item) => a.width - b.width).reverse()

    this.items.forEach( item => {
      let fittingSheet = this.findNode(this.sheet, item)

      if(fittingSheet){
        item.used = true;
        this.splitNode(fittingSheet, item)
      }

    })
    console.log(this);

  }

  findNode(sheet: Sheet, item: Item){
    //If sheet is used, check it's nodes recursively
    if(sheet.used){
      return this.findNode(sheet.right, item) || this.findNode(sheet.bottom, item)
    } else{
      return sheet.width >= item.width && sheet.height >= item.height ? sheet: false;
    }
  }

  splitNode(sheet: Sheet, item: Item){
    sheet.used = true;
    sheet.bottom = {
      x: sheet.x,
      y: sheet.y + item.height + this.padding,
      width: item.width,
      height: sheet.height - item.height - this.padding,
      items: []
    }
    sheet.right = {
      x: sheet.x + item.width + this.padding,
      y: sheet.y,
      width: sheet.width - item.width - this.padding,
      height: sheet.height,
      items: []
    }

    if(sheet.right.width > 0 && sheet.right.height > 0){
      this.nodes.push(sheet.right)
    }

    if(sheet.bottom.width > 0 && sheet.bottom.height > 0){
      this.nodes.push(sheet.bottom)
    }

    item.x = sheet.x
    item.y = sheet.y
    item.sheet = sheet

    sheet.items.push(item)

    return sheet;
  }
}
