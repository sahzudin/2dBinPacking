import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/Packer/Item';
import { Packer } from 'src/Packer/Packer';
import { Sheet } from 'src/Packer/Sheet';
import { DataService } from './data/data.service';
import { PackerService } from './services/packer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup;

  title = 'packing2d';

  items: Item[]

  packer: Packer;

  constructor(
    private fb: FormBuilder,
    private ds: DataService,
    private packerService: PackerService
  ){
  }

  ngOnInit(){

    this.ds.items.subscribe(res => {
      this.items = res

      this.packer = new Packer(this.packerService ,res)
      this.packer.pack();
    })

  }

  pack(){
    this.packer.pack();
  }

  clear(){
    this.ds.removeAll();
  }
}
