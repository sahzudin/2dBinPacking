import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutStateService {

  configDialog: BehaviorSubject<boolean> = new BehaviorSubject(false);
  configDialog$: Observable<boolean> = this.configDialog.asObservable();

  itemFormDialog: BehaviorSubject<boolean> = new BehaviorSubject(false);
  itemFormDialog$: Observable<boolean> = this.itemFormDialog.asObservable();

  constructor() { }

  openItemFormDialog(){
    this.itemFormDialog.next(true);
  }

}
