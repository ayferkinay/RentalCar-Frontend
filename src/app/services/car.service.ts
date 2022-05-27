
import { HttpClient } from '@angular/common/http'; //backende istekte bulunup verileri çekeceğiz
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';

@Injectable({ 
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44334/api/cars/getall" //data başka bir adresten çekiliyorsa o adersin url kısmı kullanılır
  
  constructor(private httpClient: HttpClient) { }

  getCar():Observable<CarResponseModel>{  //subscirbe olunabilir bir response model döndü
    return this.httpClient.get<CarResponseModel>(this.apiUrl);
  }

}
