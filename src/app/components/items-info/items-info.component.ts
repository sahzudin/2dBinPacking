import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LayoutStateService } from 'src/app/services/layout-state.service';
import { Item } from 'src/Packer/Item';

@Component({
  selector: 'app-items-info',
  templateUrl: './items-info.component.html',
  styleUrls: ['./items-info.component.scss']
})
export class ItemsInfoComponent implements OnInit {

  display: boolean = false;
  items: Item[]

  constructor(
    private ds: DataService,
    private layoutService: LayoutStateService
  ) { }

  ngOnInit(): void {
    this.layoutService.itemInfoDialog$.subscribe(res => {
      this.display = res;
    })

    this.ds.warrant$.subscribe(res => {
      this.items = res.items

      console.log(res);

    })
  }

  remove(item){
    this.ds.removeItem(item)
  }

  removeAll(){
    this.ds.removeAll()
  }

}
