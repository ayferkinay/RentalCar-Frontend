import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"; //apiye istekte bulunacağımız zaman module içinde bu importun yapılması gerek. injection yapıyor

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { ColorComponent } from './components/color/color.component';
import { BrandComponent } from './components/brand/brand.component';
import { RentalComponent } from './components/rental/rental.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NaviComponent } from './components/navi/navi.component';

@NgModule({
  declarations: [ //bir componnetn kullanılacağı zaman buraya eklenir
    AppComponent,
    CarComponent,
    ColorComponent,
    BrandComponent,
    RentalComponent,
    CustomerComponent,
    NaviComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
