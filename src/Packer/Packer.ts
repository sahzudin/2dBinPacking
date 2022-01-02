import { Injectable, OnChanges, SimpleChanges } from "@angular/core";
import { Warrant } from "src/app/components/dialogs/importer-dialog/importer-dialog.component";
import { DataService } from "src/app/services/data.service";
import { Algorithm, PackerConfig, PackerService } from "src/app/services/packer.service";
import { Item } from "./Item";
import { Sheet } from "./Sheet";
import {cloneDeep} from 'lodash';
import { BehaviorSubject, Observable } from "rxjs";


@Injectable({providedIn: 'root'})
export class Packer {

  //packer efficiency
  itemsPacked: number
  palletesUsed: number
  sheetsUsed: number
  itemsUsagePercent: number = 0;

  //algorithm
  bruteForceWeight: number = 100000

  //config
  config : PackerConfig;
  max_sheets_from_number_of_palletes: number
  max_sheets_per_pallete: number

  //state
  warrant: Warrant
  sheets: Sheet[] = []
  palletes: [ Sheet[] ] = [[]]
  bestUsedPalletes: [Sheet[]] = [[]]
  packing: BehaviorSubject<boolean> = new BehaviorSubject(false);
  packing$: Observable<boolean> = this.packing.asObservable();


  constructor(
    private packerService: PackerService,
    private dataService: DataService
  ){
    this.packerService.config$.subscribe( config => this.config = config)

    this.dataService.warrant$.subscribe( warrant => {
      this.warrant = warrant;
    })
  }

  pack(){
    this.packing.next(true)

    setTimeout(() => {
      this.preparePacker()

      this.applyConfig()


      let sheet = this.createSheetFromConfig();
      this.sheets.push(sheet)

      if(this.config.algorithm == Algorithm.BRUTE_FORCE){
        //if algorithm is brute force then run the the packing 100 times,
        for (let index = 0; index < this.bruteForceWeight; index++) {
          this.bruteForceAlgorithm()
          this.resetItems()
          this.sheets = []
          this.packerRun()
        }

        this.palletes == this.bestUsedPalletes
      }else{
        //if not brute furce run only once
        this.packerRun()
      }

      this.palletes.forEach( pallete => {

        pallete.forEach( sheet => sheet.calculateEfficiency())

        pallete.sort( (a: Sheet, b:Sheet) => a.efficiency - b.efficiency)

      })

      this.packing.next(false)
    }, 250)



  }

  packerRun(){
    let items = cloneDeep(this.warrant.items)
    for( let item of items)  {
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

    if(this.config.algorithm == Algorithm.BRUTE_FORCE){
      //If algorithm is brute force only place sheets into palletes if the count is less than previous best
      let oldBestCount = this.palletesSheetCount()
      if(this.sheets.length < oldBestCount || oldBestCount == 0){
        this.palletes = [[]]
        this.placeSheetsIntoPalletes()
        this.bestUsedPalletes = {...this.palletes}
        console.log( 'Best used palletes' ,this.bestUsedPalletes);

      }
    }else{
      //If it's not bruce force just place the sheeets in palletes
      this.placeSheetsIntoPalletes()
    }
  }

  palletesSheetCount(){
    let count = 0;

    this.palletes.forEach( pallete => {
      count += pallete.length
    })

    return count;
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

  resetItems() : void{
    this.warrant.items.map( x => {
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
        case Algorithm.BRUTE_FORCE.toString():
          this.bruteForceAlgorithm();
          console.info('Brute force algorithm chosen')
        default:
        console.info('Config algorithm: ',this.config.algorithm);
        this.maxWidthAlgorithm();
    }
  }

  calculateMaxSheetsPerPallete(){
    this.max_sheets_per_pallete = Math.floor(this.config.depth / (this.config.item_depth + this.config.padding))
  }

  maxWidthAlgorithm(){
    this.warrant.items.sort( (a: Item, b:Item) => a.width - b.width).reverse()
  }

  maxAreaAlgorithm(){
    this.warrant.items.sort( (a: Item , b: Item) => a.getArea() - b.getArea()).reverse()
  }

  longestSideAlgorithm(){
    this.warrant.items.sort( ( a: Item, b: Item) => a.getLongestSide() - b.getLongestSide()).reverse()
  }

  bruteForceAlgorithm(){
    for (let i = this.warrant.items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.warrant.items[i], this.warrant.items[j]] = [this.warrant.items[j], this.warrant.items[i]];
    }
  }

  reset(){
    this.resetItems();
    this.palletes = [[]]
  }
}
