import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DataService } from 'src/app/services/data.service';
import { Packer } from 'src/Packer/Packer';

@Component({
  selector: 'app-warrants',
  templateUrl: './warrants.component.html',
  styleUrls: ['./warrants.component.scss']
})
export class WarrantsComponent implements OnInit {

  warrants$: Observable<any>;

  constructor(
    private apiService: ApiService,
    private dataService: DataService,
    private confirmationService: ConfirmationService
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

  deleteWarrant(warrant, event){
    console.log(event);

      this.confirmationService.confirm({
          target: event.target,
          message: 'Jeste li sigurni da želite obrisati nalog?',
          icon: 'pi pi-exclamation-triangle',
          acceptLabel: 'Da',
          rejectLabel: 'Ne',
          accept: () => {
            this.apiService.deleteWarrant(warrant.id)
          },
          reject: () => {
              //reject action
          }
      });
  }

}
