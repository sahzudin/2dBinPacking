import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
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
    private authService: AuthService,
    private dataService: DataService,
    public packer: Packer,
    private layoutService: LayoutStateService
  ) { }

  ngOnInit(): void {
    this.itemCount$ = this.dataService.itemCount$;
  }

  logout(){
    this.authService.logout()
  }

  pack(){
    this.packer.pack()
  }

  themeChange(event){
    this.layoutService.darkTheme.next(event.checked)
  }
}
