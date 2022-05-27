import { CarService } from './../../services/car.service';
import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';
import { CarResponseModel } from 'src/app/models/carResponseModel';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
 
  cars:Car[] = [];
  dataLoaded = false;


  constructor(private carService:CarService) { } //service kullanabilmek için yapılır

  ngOnInit(): void {
    this.getCar();
    
  }

  getCar(){
    this.carService.getCar().subscribe(response=>{
      this.cars=response.data;
      this.dataLoaded =true;
    })
  }
}
