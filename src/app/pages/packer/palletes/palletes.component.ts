import { Component, Input, OnInit } from '@angular/core';
import { PackerConfig } from 'src/app/services/packer.service';
import { Packer } from 'src/Packer/Packer';
import { Sheet } from 'src/Packer/Sheet';

@Component({
  selector: 'app-palletes',
  templateUrl: './palletes.component.html',
  styleUrls: ['./palletes.component.scss']
})
export class PalletesComponent implements OnInit {

  @Input() palletes: [Sheet[]]
  @Input() config: PackerConfig
  selectedPallete: Sheet[]

  constructor() { }

  ngOnInit(): void {
  }

  selectPallete(pallete: Sheet[]){
    this.selectedPallete = pallete
    console.log(this.palletes);
    
  }

}
