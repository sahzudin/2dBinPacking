import { Container } from "./Container";
import { Item } from "./Item";

export class Sheet extends Container{

  nodes?: Sheet[] = [];
  items?: Item[] = [];
  isRoot?: boolean = false;
  next?: Sheet;
  padding?: number;
  efficiency?: number

  constructor(width?: number, height?: number, x?: number, y?:number, items?: Item[], isRoot?: boolean, padding?: number){
    super(width, height, x, y);
    this.items = items;
    this.isRoot = isRoot
    this.padding = padding
  }

  getArea(){
    return this.width * this.height
  }

  pack(item){
    let isFittingSheet: Sheet = this.findNode(this, item)

    if(isFittingSheet){
      item.used = true;
      this.splitNode(isFittingSheet, item)
      return true;
    }

    return false;

  }

  findNode(sheet: Sheet, item: Item) : Sheet{
    //If sheet is used, check it's nodes recursively
    if(sheet.used){
      return this.findNode(sheet.right, item) || this.findNode(sheet.bottom, item)
    } else{
      //Check if fits by area, if yes try to match width and height with item width and height
      if((sheet.width >= item.width && sheet.height >= item.height) || (sheet.width >= item.height && sheet.height >= item.width)){
        //if not set item rotated to true, meaning we will rotate the item 90deg
        if(sheet.width < item.width || sheet.height < item.height) item.rotated = true

        return sheet;
      }
      return null;
    }
  }

  splitNode(sheet: Sheet, item: Item){
    sheet.used = true;
    sheet.bottom =  new Sheet()
      sheet.bottom.x = sheet.x,
      sheet.bottom.y = item.rotated ? sheet.y + item.width + this.padding : sheet.y + item.height + this.padding,
      sheet.bottom.width = item.rotated ? item.height : item.width,
      sheet.bottom.height = item.rotated ? sheet.height - item.width - this.padding : sheet.height - item.height - this.padding,
      sheet.bottom.items = []

    sheet.right = new Sheet()
      sheet.right.x = item.rotated ? sheet.x + item.height + this.padding : sheet.x + item.width + this.padding,
      sheet.right.y = sheet.y,
      sheet.right.width = item.rotated ? sheet.width - item.height - this.padding : sheet.width - item.width - this.padding,
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

  calculateEfficiency(){
    if(this.items.length > 0){
      let area = this.width * this.height

      let freeArea = 0;
      this.nodes.forEach(node => {
        if(!node.used){
          let nodeArea = node.width * node.height
          freeArea += nodeArea
        }
      })
      this.efficiency =  100 - (freeArea/area) * 100;
    }else{
      this.efficiency = 0;
    }
  }
}
