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
    
    //set item id
    if(this.items.getValue().length > 0){
      newItem.id = this.items.getValue().slice(-1)[0].id + 1;
    }else{
      newItem.id = 1;
    }
    
    this.items.next([...this.items.getValue(), newItem])

    this.itemCount.next(this.items.getValue().length)
  }

  removeItem(item){
    let newList = this.items.getValue().filter( x => {
      return item.id != x.id
    })
    
    this.items.next(newList)
    this.itemCount.next(this.items.getValue().length)
  }

  removeAll(){
    this.items.next([]);
  }
}
