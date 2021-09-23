import { Component, OnInit } from '@angular/core';
import { Item } from 'src/Packer/Item';
import { Packer } from 'src/Packer/Packer';
import { Sheet } from 'src/Packer/Sheet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  width;
  height;

  title = 'packing2d';

  packer: Packer;

  sheet: Sheet = new Sheet(400, 400, 0, 0, []);

  items: Item[] = [
    {height: 100, width: 300, used: false},
    {height: 50, width: 300, used: false},
    {height: 100, width: 150, used: false},
    {height: 100, width: 180, used: false},
    {height: 180, width: 100, used: false},
    {height: 400, width: 80, used: false},
    {height: 90, width: 180, used: false},
    {height: 10, width: 100, used: false},
  ]

  constructor(){
    this.packer = new Packer(this.items, this.sheet);
  }

  ngOnInit(){
    this.packer.pack();
  }


}
