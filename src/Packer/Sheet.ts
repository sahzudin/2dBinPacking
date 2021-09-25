import { Container } from "./Container";
import { Item } from "./Item";

export class Sheet extends Container{

  nodes?: Sheet[] = [];
  items?: Item[] = [];
  isRoot?: boolean = false;
  next?: Sheet;
  padding?: number;

  constructor(width?: number, height?: number, x?: number, y?:number, items?: Item[], isRoot?: boolean, padding?: number){
    super(width, height, x, y);
    this.items = items;
    this.isRoot = isRoot
    this.padding = padding
  }

  pack(item){
    let isFittingSheet = this.findNode(this, item)

    if(isFittingSheet){
      item.used = true;
      this.splitNode(isFittingSheet, item)
      return true;
    }

    return false;

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
    sheet.bottom =  new Sheet()
      sheet.bottom.x = sheet.x,
      sheet.bottom.y = sheet.y + item.height + this.padding,
      sheet.bottom.width = item.width,
      sheet.bottom.height = sheet.height - item.height - this.padding,
      sheet.bottom.items = []

    sheet.right = new Sheet()
      sheet.right.x = sheet.x + item.width + this.padding,
      sheet.right.y = sheet.y,
      sheet.right.width = sheet.width - item.width - this.padding,
      sheet.right.height = sheet.height,
      sheet.right.items = []



    if(sheet.right.width > 0 && sheet.right.height > 0){
      this.nodes.push(sheet.right)
    }

    if(sheet.bottom.width > 0 && sheet.bottom.height > 0){
      this.nodes.push(sheet.bottom)
    }

    item.x = sheet.x
    item.y = sheet.y
    item.sheet = sheet

    this.items.push(item)

    return sheet;
  }
}
