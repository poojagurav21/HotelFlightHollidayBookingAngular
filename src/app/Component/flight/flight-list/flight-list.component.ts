import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/models/airline';
import { Airport } from 'src/app/models/airport';
import { City } from 'src/app/models/city';
import { Flight } from 'src/app/models/flight';
import { AirlineServiceService } from 'src/app/Services/airline-service.service';
import { AirportServiceService } from 'src/app/Services/airport-service.service';
import { CityServiceService } from 'src/app/Services/city-service.service';
import { FlightServiceService } from 'src/app/Services/flight-service.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  airlines: Airline[] = [];
  cities: City[] = [];
  airports: Airport[] = [];
  flights: Flight[] = [];

  constructor(private airlineService: AirlineServiceService,
    private cityService: CityServiceService,
    private airportService: AirportServiceService,
    private flightService: FlightServiceService) { }

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
    this.flightService.getAllFlights()

      .subscribe(
        {
          next: (flights) => {
            this.flights = flights;
            console.log("flights: ", this.flights);
          },
          error: (response) => {
            console.log(response);
          }

        }
      );
  }

}
