import { Component, OnInit } from '@angular/core';
import { Airport } from 'src/app/models/airport';
import { City } from 'src/app/models/city';
import { AirportServiceService } from 'src/app/Services/airport-service.service';
import { CityServiceService } from 'src/app/Services/city-service.service';

@Component({
  selector: 'app-airport-list',
  templateUrl: './airport-list.component.html',
  styleUrls: ['./airport-list.component.css']
})
export class AirportListComponent implements OnInit {
  
  airports: Airport[] = [];
  cities: City[] = [];

  constructor(private airportService: AirportServiceService,
    private cityService: CityServiceService) { }

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

    this.airportService.getAllAirports()

      .subscribe(
        {
          next: (airports) => {
            this.airports = airports;
            console.log("airports: ", this.airports);
          },
          error: (response) => {
            console.log(response);
          }

        }
      );
  }

}
