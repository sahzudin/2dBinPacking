import { Item } from "./Item";
import { Sheet } from "./Sheet";

export class Packer {

  config = {
    width: 400,
    height: 400,
    padding: 20
  };

  itemsUsagePercent: number = 0;
  items: Item[]
  sheets: Sheet[] = [];

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
      if(item.used){
        continue
      }

      let hasFit = false;
      for(let sheet of this.sheets) {
        hasFit = this.findFitting(sheet, item)
        if(hasFit){
          break
        }
      }

      if(!hasFit){
        let sheet = this.createSheetFromConfig();
        this.sheets.push(sheet)
        this.findFitting(sheet, item)
      }
      item.used = true
    }

    this.sheets.forEach(sheet => {
      sheet.calculateEfficiency();
    })
    this.calculatePercentageUsed();
    console.log(this);

  }

  findFitting(sheet: Sheet, item: Item){
    return sheet.pack(item)
  }

  private createSheetFromConfig(): Sheet{
    return new Sheet(this.config.width, this.config.height, 0, 0, [], true, this.config.padding);
  }

  calculatePercentageUsed(){
    let used = 0;
    let unused = 0;
    this.items.forEach(item => {
      if(item.used){
        used += item.width * item.height
      }else{
        unused += item.width * item.height
      }
    })
    if(unused == 0){
      this.itemsUsagePercent = 100;
    }else{
      this.itemsUsagePercent = (unused/used) * 100
    }
  }
}
