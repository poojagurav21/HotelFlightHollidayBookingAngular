import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/models/airline';
import { City } from 'src/app/models/city';
import { AirlineServiceService } from 'src/app/Services/airline-service.service';
import { CityServiceService } from 'src/app/Services/city-service.service';

@Component({
  selector: 'app-airline-list',
  templateUrl: './airline-list.component.html',
  styleUrls: ['./airline-list.component.css']
})
export class AirlineListComponent implements OnInit {
  airlines: Airline[] = [];
  cities: City[] = [];


  constructor(private airlineService: AirlineServiceService,
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

    this.airlineService.getAllAirlines()

      .subscribe(
        {
          next: (airlines) => {
            this.airlines = airlines;
            console.log("airlines: ", this.airlines);
          },
          error: (response) => {
            console.log(response);
          }

        }
      );
  }

}
