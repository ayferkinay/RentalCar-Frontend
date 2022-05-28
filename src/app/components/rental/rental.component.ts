import { RentalService } from './../../services/rental.service';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Component, OnInit } from '@angular/core';
import { Rental} from 'src/app/models/rental';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals: Rental[] = [];
  dataLoaded = false

  constructor(private rentalService: RentalService) { }


  ngOnInit(): void {
    this.rentalService.getRental().subscribe(response => {
      this.rentals = response.data;
      this.dataLoaded = true;
    })
  }

}
