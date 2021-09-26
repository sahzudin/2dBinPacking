import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data/data.service';
import { Item } from 'src/Packer/Item';

@Component({
  selector: 'app-items-info',
  templateUrl: './items-info.component.html',
  styleUrls: ['./items-info.component.scss']
})
export class ItemsInfoComponent implements OnInit {

  @Input() items: Item[];
  @Input() itemsUsagePercentage: number;

  constructor(private ds: DataService) { }

  ngOnInit(): void {
  }

  remove(item){
    this.ds.removeItem(item)
  }

}
