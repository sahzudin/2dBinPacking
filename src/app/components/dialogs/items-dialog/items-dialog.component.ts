import { Component, OnInit } from '@angular/core';
import { LayoutStateService } from 'src/app/services/layout-state.service';

@Component({
  selector: 'app-items-dialog',
  templateUrl: './items-dialog.component.html',
  styleUrls: ['./items-dialog.component.scss']
})
export class ItemsDialogComponent implements OnInit {

  display: boolean

  constructor(
    private layoutService: LayoutStateService
  ) { }

  ngOnInit(): void {
    this.layoutService.itemFormDialog$.subscribe( state => {
      this.display = state;
    })
  }

}
