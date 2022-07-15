import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAirlineComponent } from './Component/airline/add-airline/add-airline.component';
import { AirlineListComponent } from './Component/airline/airline-list/airline-list.component';
import { EditAirlineComponent } from './Component/airline/edit-airline/edit-airline.component';
import { AddAirportComponent } from './Component/airport/add-airport/add-airport.component';
import { AirportListComponent } from './Component/airport/airport-list/airport-list.component';
import { EditAirportComponent } from './Component/airport/edit-airport/edit-airport.component';
import { AddAmenitiesComponent } from './Component/Amenities/add-amenities/add-amenities.component';
import { AmenitiesListComponent } from './Component/Amenities/amenities-list/amenities-list.component';
import { EditAmenitiesComponent } from './Component/Amenities/edit-amenities/edit-amenities.component';
import { AddCityComponent } from './Component/city/add-city/add-city.component';
import { CityListComponent } from './Component/city/city-list/city-list.component';
import { EditCityComponent } from './Component/city/edit-city/edit-city.component';
import { AddCountryComponent } from './Component/country/add-country/add-country.component';
import { CountryListComponent } from './Component/country/country-list/country-list.component';
import { EditCountryComponent } from './Component/country/edit-country/edit-country.component';
import { AddCustomerComponent } from './Component/customer/add-customer/add-customer.component';
import { CustomerListComponent } from './Component/customer/customer-list/customer-list.component';
import { EditCustomerComponent } from './Component/customer/edit-customer/edit-customer.component';
import { AddFlightComponent } from './Component/flight/add-flight/add-flight.component';
import { EditFlightComponent } from './Component/flight/edit-flight/edit-flight.component';
import { FlightListComponent } from './Component/flight/flight-list/flight-list.component';
import { AddHotelComponent } from './Component/hotel/add-hotel/add-hotel.component';
import { EditHotelComponent } from './Component/hotel/edit-hotel/edit-hotel.component';
import { HotelListComponent } from './Component/hotel/hotel-list/hotel-list.component';
import { AddHotelAmenitiesComponent } from './Component/hotelAmenities/add-hotel-amenities/add-hotel-amenities.component';
import { EditHotelAmenitiesComponent } from './Component/hotelAmenities/edit-hotel-amenities/edit-hotel-amenities.component';
import { HotelAmenitiesListComponent } from './Component/hotelAmenities/hotel-amenities-list/hotel-amenities-list.component';
import { WelcomeComponent } from './Component/welcome/welcome/welcome.component';



const routes: Routes = [
  { path: '', component:WelcomeComponent },
  { path: 'country', component: CountryListComponent },
  { path: 'country/add', component: AddCountryComponent },
  { path: 'country/edit/:id', component: EditCountryComponent },
  { path: 'city', component: CityListComponent },
  { path: 'city/add', component: AddCityComponent },
  { path: 'city/edit/:id', component: EditCityComponent },
  { path: 'amenities', component: AmenitiesListComponent },
  { path: 'amenities/add', component: AddAmenitiesComponent },
  { path: 'amenities/edit/:id', component: EditAmenitiesComponent },
  { path: 'hotel', component: HotelListComponent },
  { path: 'hotel/add', component: AddHotelComponent },
  { path: 'hotel/edit/:id', component: EditHotelComponent },
  { path: 'customer', component: CustomerListComponent },
  { path: 'customer/add', component: AddCustomerComponent },
  { path: 'customer/edit/:id', component: EditCustomerComponent },
  { path: 'airport', component: AirportListComponent },
  { path: 'airport/add', component: AddAirportComponent },
  { path: 'airport/edit/:id', component: EditAirportComponent },
  { path: 'hotelAmenities', component: HotelAmenitiesListComponent },
  { path: 'hotelAmenities/add', component: AddHotelAmenitiesComponent },
  { path: 'hotelAmenities/edit/:id', component: EditHotelAmenitiesComponent },
  { path: 'airline', component:AirlineListComponent },
  { path: 'airline/add', component:AddAirlineComponent},
  { path: 'airline/edit/:id', component:EditAirlineComponent},
  { path: 'flight', component:FlightListComponent },
  { path: 'flight/add', component:AddFlightComponent},
  { path: 'flight/edit/:id', component:EditFlightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
