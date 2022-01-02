import { Injectable } from '@angular/core';
import { TRISTATECHECKBOX_VALUE_ACCESSOR } from 'primeng/tristatecheckbox';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutStateService {

  darkTheme: BehaviorSubject<boolean> = new BehaviorSubject(false);
  darkTheme$: Observable<boolean> = this.darkTheme.asObservable();

  itemFormDialog: BehaviorSubject<boolean> = new BehaviorSubject(false);
  itemFormDialog$: Observable<boolean> = this.itemFormDialog.asObservable();

  itemInfoDialog: BehaviorSubject<boolean> = new BehaviorSubject(false);
  itemInfoDialog$: Observable<boolean> = this.itemInfoDialog.asObservable();

  configDialog: BehaviorSubject<boolean> = new BehaviorSubject(false);
  configDialog$: Observable<boolean> = this.configDialog.asObservable();

  importerDialog: BehaviorSubject<boolean> = new BehaviorSubject(false);
  importerDialog$: Observable<boolean> = this.importerDialog.asObservable();


  constructor() { }

  openItemFormDialog(){
    this.itemFormDialog.next(true);
  }

  openItemInfoDialog(){
    this.itemInfoDialog.next(true)
  }

}
