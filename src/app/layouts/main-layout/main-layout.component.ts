import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SidebarMenuItem } from 'src/app/models/presentation/presentation-models';
import { LayoutStateService } from 'src/app/services/layout-state.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  tooltipItems: MenuItem[]
  sidebarMenuItems: SidebarMenuItem[] = [
    {label: 'Lista naloga', icon: 'pi pi-list'},
    {label: 'Novi nalog', icon: 'pi pi-plus'},
    {label: 'Postavke', icon: 'pi pi-cog'}
  ]


  constructor(
    private layoutService: LayoutStateService
  ) { }

  ngOnInit(): void {
    this.tooltipItems = [
      {
        icon: 'pi pi-plus',
        tooltipOptions: {
          tooltipLabel: 'Dodaj artikal'
        },
        command: () => this.layoutService.openItemFormDialog()
      }
    ]
  }

}
