import { Component, OnInit } from '@angular/core';
import { Item } from 'src/Packer/Item';
import { Packer } from 'src/Packer/Packer';
import { Sheet } from 'src/Packer/Sheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'packing2d';

  packer: Packer;

  sheet: Sheet = new Sheet(400, 400, 0, 0, []);

  items: Item[] = [
    {height: 100, width: 200, used: false},
    {height: 200, width: 200, used: false},
    {height: 100, width: 400, used: false},
    {height: 400, width: 100, used: false},
  ]

  constructor(){
    this.packer = new Packer(this.items, this.sheet);
  }

  ngOnInit(){
    this.packer.pack();
  }


}
