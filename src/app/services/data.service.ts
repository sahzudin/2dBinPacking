import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Item } from 'src/Packer/Item';
import { Warrant } from '../components/dialogs/importer-dialog/importer-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  defaultWarrant: Warrant = {
    items: []
  }

  warrant: BehaviorSubject<Warrant> = new BehaviorSubject(this.defaultWarrant);
  warrant$: Observable<Warrant> = this.warrant.asObservable();

  itemCount: BehaviorSubject<number> = new BehaviorSubject(0);
  itemCount$: Observable<number> = this.itemCount.asObservable();

  constructor() { }

  addItem(item){
    let newItem = new Item(item.width, item.height)

    let warrant = this.warrant.getValue();

    if(warrant.items.length > 0){
      newItem.id = warrant.items.slice(-1)[0].id + 1;
    }else{
      newItem.id = 1;
    }

    warrant.items = [...warrant.items, newItem]

    this.warrant.next(warrant)

    this.itemCount.next(warrant.items.length)
  }

  removeItem(item){
    let warrant = this.warrant.getValue()

    let newList = warrant.items.filter( x => {
      return item.id != x.id
    })

    warrant.items = newList

    this.warrant.next(warrant)
    this.itemCount.next(warrant.items.length)
  }

  removeAll(){
    let warrant = this.warrant.getValue();

    warrant.items = [];

    this.warrant.next(warrant);
  }

  loadWarrant(warrant: Warrant){
    this.warrant.next(warrant)
    this.itemCount.next(warrant.items.length)
  }
}
