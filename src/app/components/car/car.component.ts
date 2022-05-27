import { Car } from './../../models/car';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  car1 = {
    carId: 1,
    brandId: 1,
    colorId: 1,
    carName:"A",
    modelYear: 2000,
    dailyPrice: 5,
    description: "yeni araç"
  }


  car2 = {
    carId: 2,
    brandId: 1,
    colorId: 1,
    carName:"B",
    modelYear: 2000,
    dailyPrice: 5,
    description: "yeni araç"
  }


  car3 = {
    carId: 3,
    brandId: 1,
    colorId: 1,
    carName:"C",
    modelYear: 2000,
    dailyPrice: 5,
    description: "yeni araç"
  }


  car4 = {
    carId: 4,
    brandId: 1,
    colorId: 1,
    carName:"D",
    modelYear: 2000,
    dailyPrice: 5,
    description: "yeni araç"
  }


  car5 = {
    carId: 5,
    brandId: 1,
    colorId: 1,
    carName:"E",
    modelYear: 2000,
    dailyPrice: 5,
    description: "yeni araç"
  }


  car6 = {
    carId: 6,
    brandId: 1,
    colorId: 1,
    carName:"F",
    modelYear: 2000,
    dailyPrice: 5,
    description: "yeni araç"
  }

  cars:Car[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
