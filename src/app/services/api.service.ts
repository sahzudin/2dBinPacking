import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CreateItemRequest, CreatePalleteRequest, CreateWarrantRequest } from '../requestModels/CreateWarrantRequest';
import { NotificationsService } from './notifications.service';

const HOST = environment.apiHost;

const CREATE_WARRANT = HOST + '/api/warrants/createwarrant';
const GET_WARRANTS = HOST + '/api/warrants/getwarrants';
const UPLOAD_WARRANT = HOST + '/api/warrants/uploadwarrant';

const CREATE_ITEM = HOST + '/api/item/createitem';
const GET_ITEMS = HOST + '/api/item/getallitems';

const CREATE_PALLETE = HOST + '/api/pallets/addpallet';
const GET_PALLETES = HOST + '/api/pallets/getlistofpallets';

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

  deleteWarrant(id){
    this.notificationService.toggleProgress()
    const url = HOST + `/api/warrants/delete/${id}`
    this.http.delete(url).subscribe(
      res => {
        this.notificationService.toggleProgress();
        this.notificationService.showSuccess("Nalog obrisan")
      },
      error => {
        this.notificationService.toggleProgress();
        this.notificationService.showError(error.message)
      }
    )
  }

  uploadWarrant(data){
    this.notificationService.toggleProgress();
    this.http.post(UPLOAD_WARRANT, data).subscribe(
      res => {
        this.notificationService.toggleProgress();
        this.notificationService.showSuccess("Nalog učitan")
      },
      error => {
        this.notificationService.toggleProgress();
        this.notificationService.showError(error.message)
      }
    )
  }

  getWarrants(){
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
    return this.http.get(GET_ITEMS).pipe(
      catchError( error => {
        this.notificationService.toggleProgress();
        this.notificationService.showError(error.message)
        return of(0)
      })
    )
  }

  createPallete(pallete: CreatePalleteRequest){
    this.notificationService.toggleProgress();

    this.http.post(CREATE_PALLETE, pallete).subscribe(
      res => {
        this.notificationService.toggleProgress();
        this.notificationService.showSuccess("Paleta sačuvana")
      },
      error => {
        this.notificationService.toggleProgress();
        this.notificationService.showError(error.message)
      }
    );
  }

  getPalletes(){
    return this.http.get(GET_PALLETES).pipe(
      catchError( error => {
        this.notificationService.toggleProgress();
        this.notificationService.showError(error.message)
        return of(0)
      })
    )
  }

}
