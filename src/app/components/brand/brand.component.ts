import { BrandService } from './../../services/brand.service';
import { Brand } from './../../models/brand';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

brands:Brand[]=[];
dataLoaded=false;

  constructor(private brandService:BrandService) { }


  ngOnInit(): void {
    this.brandService.getBrand().subscribe(response=>{
      this.brands=response.data;
      this.dataLoaded=true;
    })
  }

}
