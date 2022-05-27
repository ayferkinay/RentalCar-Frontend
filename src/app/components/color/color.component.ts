import { ColorService } from './../../services/color.service';
import { Color } from './../../models/color';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit { 

colors:Color[]=[];
dataLoaded=false;

  constructor(private colorSerive:ColorService) { }

  ngOnInit(): void {
    this.colorSerive.getColor().subscribe(response=>{
      this.colors=response.data;
      this.dataLoaded=true
    })
  }

}
