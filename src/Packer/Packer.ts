import { Container } from "./Container";
import { Item } from "./Item";
import { Sheet } from "./Sheet";

export class Packer {

  sheets: Sheet[]
  items: Item[]

  constructor(items: Item[], sheets: Sheet[]){
    this.items = items
    this.sheets = sheets
  }

  pack(sheet: Sheet, items: Item[]){
    items.sort( (a: Item, b:Item) => a.width - b.width)

    items.forEach( item => {
      let _sheet = this.findNode(sheet, item)
      let fit = this.splitNode(_sheet, item)
      if(fit){
        item.used = true
      }
    })
  }

  findNode(sheet: Sheet, item: Item){

    //If sheet is used, check it's nodes recursively
    if(sheet.used){
      return this.findNode(sheet.right, item) || this.findNode(sheet.bottom, item)
    } else if(sheet.width >= item.width && sheet.height >= item.height){
      return sheet;
    } else {
      return null
    }

  }

  splitNode(sheet: Sheet, item: Item){
    sheet.used = true;
    sheet.bottom = { x: sheet.x, y: sheet.y + item.height, width: sheet.width, height: sheet.height - item.height}
    sheet.right = { x: sheet.x + item.width, y: sheet.y, width: sheet.width - item.width, height: sheet.height}
    return sheet;
  }
}
