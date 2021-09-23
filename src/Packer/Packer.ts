import { Container } from "./Container";
import { Item } from "./Item";
import { Sheet } from "./Sheet";

export class Packer {

  sheet: Sheet
  items: Item[]
  padding: number = 20

  constructor(items: Item[], sheet: Sheet){
    this.items = items
    this.sheet = sheet
  }

  pack(){
    this.items.sort( (a: Item, b:Item) => a.width - b.width).reverse()

    this.items.forEach( item => {
      let _sheet = this.findNode(this.sheet, item)

      if(_sheet){
        let fit = this.splitNode(_sheet, item)

        if(fit){
          item.used = true
        }
      }

    })
    console.log(this);

  }

  findNode(sheet: Sheet, item: Item){

    //If sheet is used, check it's nodes recursively
    if(sheet.used){
      return this.findNode(sheet.right, item) || this.findNode(sheet.bottom, item)
    } else if(sheet.width >= item.width + this.padding && sheet.height >= item.height + this.padding){
      return sheet;
    } else {
      return null
    }

  }

  splitNode(sheet: Sheet, item: Item){
    sheet.used = true;
    sheet.bottom = { x: sheet.x, y: sheet.y + item.height + this.padding, width: sheet.width, height: sheet.height - item.height, items: []}
    sheet.right = { x: sheet.x + item.width + this.padding, y: sheet.y, width: sheet.width - item.width, height: sheet.height, items: []}

    item.x = sheet.x
    item.y = sheet.y

    sheet.items.push(item)

    return sheet;
  }
}
