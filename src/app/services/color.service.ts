import { ColorResponseModel } from './../models/colorResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="https://localhost:44334/api/colors/getall"

  constructor(private httpClient:HttpClient) { }

  getColor():Observable<ColorResponseModel>{
    return this.httpClient.get<ColorResponseModel>(this.apiUrl);
  }
}
