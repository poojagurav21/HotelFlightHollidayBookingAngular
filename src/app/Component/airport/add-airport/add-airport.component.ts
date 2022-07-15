import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airport } from 'src/app/models/airport';
import { City } from 'src/app/models/city';
import { AirportServiceService } from 'src/app/Services/airport-service.service';
import { CityServiceService } from 'src/app/Services/city-service.service';

@Component({
  selector: 'app-add-airport',
  templateUrl: './add-airport.component.html',
  styleUrls: ['./add-airport.component.css']
})
export class AddAirportComponent implements OnInit {

  addAirportRequest: Airport = {
    id: 0,
    code: '',
    address1: '',
    cityRefId: 0,
    cityName: '',
    pincode: 0,
    telephone1: '',
    email1: ''
  };
  cities: City[] = [];

  constructor(private airportService: AirportServiceService,
    private cityService: CityServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.cityService.getAllCities()
      .subscribe(
        {
          next: (cities) => {
            this.cities = cities;
            console.log("cities: ", this.cities);
          },
          error: (response) => {
            console.log(response);
          }

        }
      );
  }
  addAirport() {
    this.airportService.addAirports(this.addAirportRequest)
      .subscribe({
        next: (airport) => {
          this.router.navigate(['airport']);
        }
      });
  }
  
}
