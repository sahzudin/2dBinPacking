import { Injectable } from "@angular/core";
import { DataService } from "src/app/data/data.service";
import { Algorithm, PackerConfig, PackerService } from "src/app/services/packer.service";
import { Item } from "./Item";
import { Sheet } from "./Sheet";

@Injectable({providedIn: 'root'})
export class Packer {

  config : PackerConfig;
  itemsUsagePercent: number = 0;
  items: Item[]
  sheets: Sheet[] = []
  max_sheets_from_number_of_palletes: number
  max_sheets_per_pallete: number
  palletes: [ Sheet[] ] = [[]]

  constructor(
    private packerService: PackerService,
    private dataService: DataService
  ){
    this.packerService.config$.subscribe( config => this.config = config)

    this.dataService.items$.subscribe( items => {
      this.items = items;
    })
  }

  pack(){
    this.preparePacker()

    this.applyConfig()

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

    this.placeSheetsIntoPalletes()

    this.sheets.forEach(sheet => {
      sheet.calculateEfficiency();
    })
    this.calculatePercentageUsed();
    console.log(this);

  }

  placeSheetsIntoPalletes(){
    this.sheets.forEach((sheet: Sheet) => {
      this.fitIntoPallete(sheet)
    })
  }

  fitIntoPallete(sheet: Sheet){
    let pallete = this.palletes.find( pallete => pallete.length < this.max_sheets_per_pallete);
    if(pallete){
      pallete.push(sheet)
    }else{
      this.palletes.push([sheet])
    }
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

  resetItems() : void{
    this.items.map( x => {
      x.used = false
      x.rotated = false
    })
  }

  preparePacker(): void{
    this.resetItems();
    this.sheets = [];
    this.palletes = [[]]
  }

  applyConfig(): void {
    this.calculateMaxSheetsPerPallete()
    this.applyAlgorithm();
  }

  applyAlgorithm(): void{
    switch ((this.config.algorithm.toString())) {

      case Algorithm.MAX_WIDTH.toString():
        this.maxWidthAlgorithm()
        console.info('Max width algorithm chosen');
        break;
        case Algorithm.MAX_AREA.toString():
          this.maxAreaAlgorithm()
          console.info('Max area algorithm chosen');
          break;
          case Algorithm.LONGEST_SIDE.toString():
            this.longestSideAlgorithm();
            console.info('Longest side algorithm chosen');
            break;
        default:
        console.info('Config algorithm: ',this.config.algorithm);
        this.maxWidthAlgorithm();
    }
  }

  calculateMaxSheetsPerPallete(){
    this.max_sheets_per_pallete = Math.floor(this.config.depth / (this.config.item_depth + this.config.padding))
  }

  maxWidthAlgorithm(){
    this.items.sort( (a: Item, b:Item) => a.width - b.width).reverse()
  }

  maxAreaAlgorithm(){
    this.items.sort( (a: Item , b: Item) => a.getArea() - b.getArea()).reverse()
  }

  longestSideAlgorithm(){
    this.items.sort( ( a: Item, b: Item) => a.getLongestSide() - b.getLongestSide()).reverse()
  }
}
