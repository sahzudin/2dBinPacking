import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateWarrantRequest } from '../requestModels/CreateWarrantRequest';

const HOST = environment.apiHost;

const CREATE_WARRANT = HOST + '/api/warrants/createwarrant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  createWarrant(request: CreateWarrantRequest){
    this.http.post(CREATE_WARRANT, request).subscribe(res => {
      console.log(res);
      
    });
  }

}
