import { Item } from "./Item";
import { Sheet } from "./Sheet";

export class Packer {

  config = {
    width: 400,
    height: 400,
    padding: 20
  };

  items: Item[]
  sheets: Sheet[] = [];
  nodes: Sheet[] = [];

  constructor(items: Item[]){
    this.items = items
  }

  pack(){
    this.items.map( x => {
      x.used = false
    })
    this.sheets = [];

    this.items.sort( (a: Item, b:Item) => a.width - b.width).reverse()

    let sheet = this.createSheetFromConfig();
    this.sheets.push(sheet)

    for( let item of this.items)  {
      if(item.height > this.config.height || item.width > this.config.width){
        item.used = false
        continue
      }
      let hasFit = false;
      this.sheets.forEach( sheet => {
        hasFit = this.findFitting(sheet, item)
      })

      if(!hasFit){
        let sheet = this.createSheetFromConfig();
        this.sheets.push(sheet)
        this.findFitting(sheet, item)
      }

    }
    console.log(this);

  }

  findFitting(sheet: Sheet, item: Item){
    return sheet.pack(item)
  }

  private createSheetFromConfig(): Sheet{
    return new Sheet(this.config.width, this.config.height, 0, 0, [], true, this.config.padding);
  }
}
