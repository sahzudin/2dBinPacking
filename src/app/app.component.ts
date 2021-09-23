import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/Packer/Item';
import { Packer } from 'src/Packer/Packer';
import { Sheet } from 'src/Packer/Sheet';
import { DataService } from './data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form: FormGroup;

  title = 'packing2d';

  packer: Packer;

  sheet: Sheet = new Sheet(400, 400, 0, 0, []);

  items: Item[] = [
    {width: 100, height: 100, used: false},
    {width: 100, height: 100, used: false},
    {width: 100, height: 100, used: false},
    {width: 100, height: 100, used: false},
  ];

  constructor(
    private fb: FormBuilder,
    private ds: DataService
  ){
    this.packer = new Packer(this.items, this.sheet);
  }

  ngOnInit(){

    this.form = this.fb.group({
      width: ['', [Validators.required]],
      height: ['', [Validators.required]],
      quantity: [1, [Validators.required]],
    })

    this.ds.items.subscribe(res => {
      this.items = res;
      this.sheet = new Sheet(400, 400, 0, 0, []);
      console.log(res);

      this.packer = new Packer(this.items, this.sheet)
      this.packer.pack();
    })

  }

  add(){
    this.ds.addItem(this.form.value)
  }


}
