import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Warrant } from '../components/dialogs/importer-dialog/importer-dialog.component';
import { CreateItemRequest, CreateWarrantRequest } from '../requestModels/CreateWarrantRequest';
import { NotificationsService } from './notifications.service';

const HOST = environment.apiHost;

const CREATE_WARRANT = HOST + '/api/warrants/createwarrant';
const GET_WARRANTS = HOST + '/api/warrants/getwarrants';

const CREATE_ITEM = HOST + '/api/item/createitem';
const GET_ITEMS = HOST + '/api/item/getallitems';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private notificationService: NotificationsService
  ) { }

  createWarrant(request: CreateWarrantRequest){
    this.notificationService.toggleProgress()

    this.http.post(CREATE_WARRANT, request).subscribe(
      res => {
        this.notificationService.toggleProgress();
        this.notificationService.showSuccess("Nalog sačuvan")
      },
      error => {
        this.notificationService.toggleProgress();
        this.notificationService.showError(error.message)
      }
    );
  }

  getWarrants(){
    this.notificationService.toggleProgress();

    return this.http.get(GET_WARRANTS).pipe(
      map( (items: any[]) => {
        return items.map( item => {
          item.items = JSON.parse(item.items)
          return item;
        })
      }),
      catchError( error => {
        this.notificationService.toggleProgress();
        this.notificationService.showError(error.message)
        return of(0);
      })
    )
  }

  createItem(item: CreateItemRequest){
    this.notificationService.toggleProgress();

    this.http.post(CREATE_ITEM, item).subscribe(
      res => {
        this.notificationService.toggleProgress();
        this.notificationService.showSuccess("Element sačuvan")
      },
      error => {
        this.notificationService.toggleProgress();
        this.notificationService.showError(error.message)
      }
    );
  }

  getItems(){
    this.notificationService.toggleProgress();

    return this.http.get(GET_ITEMS).pipe(
      catchError( error => {
        this.notificationService.toggleProgress();
        this.notificationService.showError(error.message)
        return of(0)
      })
    )
  }

}
