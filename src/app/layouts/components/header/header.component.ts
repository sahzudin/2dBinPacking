import { Component, OnInit } from '@angular/core';
import { LayoutStateService } from 'src/app/services/layout-state.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private layoutService: LayoutStateService
  ) { }

  ngOnInit(): void {
  }

  openConfigDialog(){
    this.layoutService.configDialog.next(true)
  }

  pack(){
    console.log('Packer called.');

  }
}
