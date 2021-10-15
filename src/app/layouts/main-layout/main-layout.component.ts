import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutStateService } from 'src/app/services/layout-state.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  tooltipItems: MenuItem[]

  constructor(
    private layoutService: LayoutStateService
  ) { }

  ngOnInit(): void {
    this.tooltipItems = [
      {
        icon: 'pi pi-plus',
        tooltip: 'Add items',
        command: () => this.layoutService.openItemFormDialog()
      }
    ]
  }

}
