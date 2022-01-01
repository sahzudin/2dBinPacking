import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-warrants',
  templateUrl: './warrants.component.html',
  styleUrls: ['./warrants.component.scss']
})
export class WarrantsComponent implements OnInit {

  warrants$: Observable<any>;

  constructor(
    private apiService: ApiService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.warrants$ = this.apiService.getWarrants()

    this.warrants$.subscribe(res => {
      console.log(res);

    })
  }

  loadWarrant(warrant){
    this.dataService.loadWarrant(warrant)
  }

}
