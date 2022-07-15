import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airline } from 'src/app/models/airline';
import { Airport } from 'src/app/models/airport';
import { City } from 'src/app/models/city';
import { Flight } from 'src/app/models/flight';
import { AirlineServiceService } from 'src/app/Services/airline-service.service';
import { AirportServiceService } from 'src/app/Services/airport-service.service';
import { CityServiceService } from 'src/app/Services/city-service.service';
import { FlightServiceService } from 'src/app/Services/flight-service.service';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.css']
})
export class EditFlightComponent implements OnInit {

  flightDetails:Flight={
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
    
    constructor(private route: ActivatedRoute,
      private airlineService: AirlineServiceService,
      private cityService: CityServiceService,
      private airportService: AirportServiceService,
      private flightService: FlightServiceService,
      private router:Router) { }
  

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.flightService.getFlight(id)
            .subscribe({
              next: (response) => {
                this.flightDetails = response;
              }
            });
        }
      }
    });

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
  updateFlight() {
    this.flightService.updateFlight(this.flightDetails.id, this.flightDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['flight']);
        }
      });
  }
  deleteFlight(id: number) {
    this.flightService.deleteFlight(id)
      .subscribe({
        next: (respose) => {
          this.router.navigate(['flight']);
        }
      });
  }
}
