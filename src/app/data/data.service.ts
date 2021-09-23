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
    let newItems: Item[] = [];
    for(let i = 1; i <= item.quantity; i++){
      let x = new Item(item.width, item.height)
      newItems.push(x);
    }

    this.items.next([...newItems, ...this.items.getValue()])
  }

  removeItem(item){
    let index = this.items.getValue().indexOf(item)
    let newList = this.items.getValue().splice(index, 1)
    this.items.next(newList)
  }
}
