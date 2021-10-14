import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutStateService {

  configDialog: BehaviorSubject<boolean> = new BehaviorSubject(false);
  configDialog$: Observable<boolean> = this.configDialog.asObservable();

  constructor() { }

}
