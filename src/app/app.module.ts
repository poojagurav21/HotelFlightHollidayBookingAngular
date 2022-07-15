import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { CityListComponent } from './Component/city/city-list/city-list.component';
import { AddCityComponent } from './Component/city/add-city/add-city.component';
import { EditCityComponent } from './Component/city/edit-city/edit-city.component';
import { AmenitiesListComponent } from './Component/Amenities/amenities-list/amenities-list.component';
import { AddAmenitiesComponent } from './Component/Amenities/add-amenities/add-amenities.component';
import { EditAmenitiesComponent } from './Component/Amenities/edit-amenities/edit-amenities.component';
import { HotelListComponent } from './Component/hotel/hotel-list/hotel-list.component';
import { AddHotelComponent } from './Component/hotel/add-hotel/add-hotel.component';
import { EditHotelComponent } from './Component/hotel/edit-hotel/edit-hotel.component';
import { CustomerListComponent } from './Component/customer/customer-list/customer-list.component';
import { AddCustomerComponent } from './Component/customer/add-customer/add-customer.component';
import { EditCustomerComponent } from './Component/customer/edit-customer/edit-customer.component';
import { AirportListComponent } from './Component/airport/airport-list/airport-list.component';
import { AddAirportComponent } from './Component/airport/add-airport/add-airport.component';
import { EditAirportComponent } from './Component/airport/edit-airport/edit-airport.component';
import { HotelAmenitiesListComponent } from './Component/hotelAmenities/hotel-amenities-list/hotel-amenities-list.component';
import { AddHotelAmenitiesComponent } from './Component/hotelAmenities/add-hotel-amenities/add-hotel-amenities.component';
import { EditHotelAmenitiesComponent } from './Component/hotelAmenities/edit-hotel-amenities/edit-hotel-amenities.component';
import { CountryListComponent } from './Component/country/country-list/country-list.component';
import { AddCountryComponent } from './Component/country/add-country/add-country.component';
import { EditCountryComponent } from './Component/country/edit-country/edit-country.component';
import { WelcomeComponent } from './Component/welcome/welcome/welcome.component';
import { AirlineListComponent } from './Component/airline/airline-list/airline-list.component';
import { EditAirlineComponent } from './Component/airline/edit-airline/edit-airline.component';
import { AddAirlineComponent } from './Component/airline/add-airline/add-airline.component';
import { FlightListComponent } from './Component/flight/flight-list/flight-list.component';
import { AddFlightComponent } from './Component/flight/add-flight/add-flight.component';
import { EditFlightComponent } from './Component/flight/edit-flight/edit-flight.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    AddCountryComponent,
    EditCountryComponent,
    CityListComponent,
    AddCityComponent,
    EditCityComponent,
    AmenitiesListComponent,
    AddAmenitiesComponent,
    EditAmenitiesComponent,
    HotelListComponent,
    AddHotelComponent,
    EditHotelComponent,
    CustomerListComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    AirportListComponent,
    AddAirportComponent,
    EditAirportComponent,
    HotelAmenitiesListComponent,
    AddHotelAmenitiesComponent,
    EditHotelAmenitiesComponent,
    WelcomeComponent,
    AirlineListComponent,
    EditAirlineComponent,
    AddAirlineComponent,
    FlightListComponent,
    AddFlightComponent,
    EditFlightComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
