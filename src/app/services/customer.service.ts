import { CustomerResponseModel } from './../models/customerResponseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl="https://localhost:44334/api/customers/getall"

  constructor(private httpClient:HttpClient) { }

  getCustomer():Observable<CustomerResponseModel>{
    return this.httpClient.get<CustomerResponseModel>(this.apiUrl);
  }

}

