import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { LayoutStateService } from 'src/app/services/layout-state.service';
import { Item } from 'src/Packer/Item';

@Component({
  selector: 'app-importer-dialog',
  templateUrl: './importer-dialog.component.html',
  styleUrls: ['./importer-dialog.component.scss']
})
export class ImporterDialogComponent implements OnInit {

  display: boolean = false;
  warrants: Warrant[] = [
    {
      id: 1,
      owner: 'Stanić Saša',
      created_at: '23-10-2021 14:45:00',
      items: [
        new Item(99,98),
        new Item(229,98),
        new Item(99,98),
        new Item(229,98),
        new Item(207,238),
        new Item(367,185),
        new Item(207,98),
        new Item(228,98),
        new Item(228,179),
        new Item(468,275),
        new Item(102,247),
        new Item(377,159),
        new Item(167,275),
        new Item(509,159),
        new Item(94,159),
        new Item(377,59),
        new Item(237,215),
      ]
    }
  ]

  constructor(
    private layoutService: LayoutStateService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.layoutService.importerDialog$.subscribe( state => {
      this.display = state
    })
  }

  loadWarrant(id){
    let selectedWarrant = this.warrants.find( warrant => warrant.id == id)

    this.dataService.loadWarrant(selectedWarrant)
  }
}

export interface Warrant{
  id?: number,
  owner?: string,
  created_at?: string,
  items?: Item[]
}
