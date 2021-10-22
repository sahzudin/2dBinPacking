import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutStateService {

  itemFormDialog: BehaviorSubject<boolean> = new BehaviorSubject(false);
  itemFormDialog$: Observable<boolean> = this.itemFormDialog.asObservable();
  
  itemInfoDialog: BehaviorSubject<boolean> = new BehaviorSubject(false);
  itemInfoDialog$: Observable<boolean> = this.itemInfoDialog.asObservable();
  
  configDialog: BehaviorSubject<boolean> = new BehaviorSubject(false);
  configDialog$: Observable<boolean> = this.configDialog.asObservable();


  constructor() { }

  openItemFormDialog(){
    this.itemFormDialog.next(true);
  }

  openItemInfoDialog(){
    this.itemInfoDialog.next(true)
  }

}
