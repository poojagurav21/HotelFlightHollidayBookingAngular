import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from 'src/app/models/airline';
import { Airport } from 'src/app/models/airport';
import { City } from 'src/app/models/city';
import { Flight } from 'src/app/models/flight';
import { AirlineServiceService } from 'src/app/Services/airline-service.service';
import { AirportServiceService } from 'src/app/Services/airport-service.service';
import { CityServiceService } from 'src/app/Services/city-service.service';
import { FlightServiceService } from 'src/app/Services/flight-service.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {
addFlightRequest:Flight={
  id: 0,
    code:'',
    airlineRefId: 0,
    airlineName: '',
    fromAirportRefId: 0,
    fromAirportName: '',
    toAirportRefId:0,
    toAirportName: '',
    address1: '',
    cityRefId: 0,
    cityName: '',
    pincode: 0,
    telephone1:'',
    email1: ''
};

  airlines: Airline[] = [];
  cities: City[] = [];
  airports: Airport[] = [];
  
  constructor(private airlineService: AirlineServiceService,
    private cityService: CityServiceService,
    private airportService: AirportServiceService,
    private flightService: FlightServiceService,
    private router:Router) { }

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
  }
  addFlight() {
    this.flightService.addFlights(this.addFlightRequest)
      .subscribe({
        next: (flight) => {
          this.router.navigate(['flight']);
        }
      });
  }
}
