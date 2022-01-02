import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { Packer } from 'src/Packer/Packer';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  progressBar: BehaviorSubject<boolean> = new BehaviorSubject(false);
  progressBar$: Observable<boolean> = this.progressBar.asObservable();

  constructor(
    private messageService: MessageService
  ) {}

  toggleProgress(){
    this.progressBar.next(!this.progressBar.value)
  }

  showError(message){
    this.messageService.add({severity: 'error', summary: 'Greška', detail: message, life: 5000})
  }

  showSuccess(message){
    this.messageService.add({severity: 'success', summary: 'Uspjeh', detail: message, life: 5000})
  }
}
