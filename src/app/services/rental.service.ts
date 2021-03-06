import { Observable } from 'rxjs';
import { RentalResponseModel } from './../models/rentalResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44334/api/rentals/getrentaldetails"

  constructor(private httpClient:HttpClient) {}

    getRental():Observable<RentalResponseModel>{
      return this.httpClient.get<RentalResponseModel>(this.apiUrl);
    }
  
}
