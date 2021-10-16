import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Item } from 'src/Packer/Item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  items: BehaviorSubject<Item[]> = new BehaviorSubject([]);
  items$: Observable<Item[]> = this.items.asObservable();

  itemCount: BehaviorSubject<number> = new BehaviorSubject(0);
  itemCount$: Observable<number> = this.itemCount.asObservable();

  constructor() { }

  addItem(item){
    let newItem = new Item(item.width, item.height)

    this.items.next([...this.items.getValue(), newItem])

    this.itemCount.next(this.items.getValue().length)
  }

  removeItem(item){
    let index = this.items.getValue().indexOf(item)
    let newList = this.items.getValue().splice(index, 1)
    this.items.next(newList)
    this.itemCount.next(this.items.getValue().length)
  }

  removeAll(){
    this.items.next([]);
  }
}
