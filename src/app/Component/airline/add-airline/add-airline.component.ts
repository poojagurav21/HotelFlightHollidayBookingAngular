import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airline } from 'src/app/models/airline';
import { City } from 'src/app/models/city';
import { AirlineServiceService } from 'src/app/Services/airline-service.service';
import { CityServiceService } from 'src/app/Services/city-service.service';

@Component({
  selector: 'app-add-airline',
  templateUrl: './add-airline.component.html',
  styleUrls: ['./add-airline.component.css']
})
export class AddAirlineComponent implements OnInit {
addAirlineRequest:Airline={
  id:0,
  name:'',
  shortName:'',
  logo:'',
  address1: '',
  cityRefId: 0,
  cityName: '',
  pincode: 0,
  telephone1:'',
  email1: ''
};
cities: City[] = [];
  constructor(private airlineService:AirlineServiceService,
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
  addAirline() {
    this.airlineService.addAirlines(this.addAirlineRequest)
      .subscribe({
        next: (airline) => {
          this.router.navigate(['airline']);
        }
      });
  }
}
