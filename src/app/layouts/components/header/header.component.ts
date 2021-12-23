import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { LayoutStateService } from 'src/app/services/layout-state.service';
import { Packer } from 'src/Packer/Packer';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  itemCount$: Observable<number>

  constructor(
    private layoutService: LayoutStateService,
    private dataService: DataService,
    public packer: Packer
  ) { }

  ngOnInit(): void {
    this.itemCount$ = this.dataService.itemCount$;
  }

  openConfigDialog(){
    this.layoutService.configDialog.next(true)
  }

  pack(){
    this.packer.pack()
  }
}
