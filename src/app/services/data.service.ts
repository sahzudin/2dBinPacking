import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Item } from 'src/Packer/Item';
import { Packer } from 'src/Packer/Packer';
import { NotificationsService } from './notifications.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  defaultWarrant: Warrant = {
    items: [],
    unusedItems: []
  }

  warrant: BehaviorSubject<Warrant> = new BehaviorSubject(this.defaultWarrant);
  warrant$: Observable<Warrant> = this.warrant.asObservable();

  itemCount: BehaviorSubject<number> = new BehaviorSubject(0);
  itemCount$: Observable<number> = this.itemCount.asObservable();

  constructor(
    private notificationService: NotificationsService
  ) { }

  addItem(item){
    let newItem = new Item(item.width, item.height)

    let warrant = this.warrant.getValue();

    if(warrant.items.length > 0){
      newItem.id = Math.random().toString(36).slice(2)
    }else{
      newItem.id = 1;
    }

    warrant.items = [newItem, ...warrant.items]

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
    this.notificationService.showSuccess("Nalog učitan")
  }
}

export interface Warrant{
  id?: number,
  owner?: string,
  created_at?: string,
  items?: Item[],
  unusedItems?: Item[]
}
