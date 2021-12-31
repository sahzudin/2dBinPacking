import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { SidebarMenuItem } from 'src/app/models/presentation/presentation-models';
import { DataService } from 'src/app/services/data.service';
import { LayoutStateService } from 'src/app/services/layout-state.service';
import { Packer } from 'src/Packer/Packer';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  itemCount$: Observable<any>;
  tooltipItems: MenuItem[]
  sidebarMenuItems: SidebarMenuItem[] = [
    {label: 'Lista naloga', icon: 'pi pi-list', route: 'warrants'},
    {label: 'Novi nalog', icon: 'pi pi-plus', route: 'warrants/new'},
    {label: 'Postavke', icon: 'pi pi-cog', route: 'settings'}
  ]

  constructor(
    private layoutService: LayoutStateService,
    private dataService: DataService,
    public packer: Packer
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
    
    this.itemCount$ = this.dataService.itemCount$;
  }

  openConfigDialog(){
    this.layoutService.configDialog.next(true)
  }

  pack(){
    this.packer.pack()
  }

}
