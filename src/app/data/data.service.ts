import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Item } from 'src/Packer/Item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  items: BehaviorSubject<Item[]> = new BehaviorSubject([]);

  constructor() { }

  addItem(item){
    let newItem = new Item(item.width, item.height)

    this.items.next([...this.items.getValue(), newItem])
  }

  removeItem(item){
    let index = this.items.getValue().indexOf(item)
    let newList = this.items.getValue().splice(index, 1)
    this.items.next(newList)
  }

  removeAll(){
    this.items.next([]);
  }
}
