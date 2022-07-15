import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airline } from 'src/app/models/airline';
import { City } from 'src/app/models/city';
import { AirlineServiceService } from 'src/app/Services/airline-service.service';
import { CityServiceService } from 'src/app/Services/city-service.service';

@Component({
  selector: 'app-edit-airline',
  templateUrl: './edit-airline.component.html',
  styleUrls: ['./edit-airline.component.css']
})
export class EditAirlineComponent implements OnInit {

  airlineDetails:Airline={
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
    constructor(private route: ActivatedRoute,
      private airlineService:AirlineServiceService,
      private cityService: CityServiceService,
      private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.airlineService.getAirline(id)
            .subscribe({
              next: (response) => {
                this.airlineDetails = response;
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
  }
  updateAirline() {
    this.airlineService.updateAirline(this.airlineDetails.id, this.airlineDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['airline']);
        }
      });
  }
  deleteAirline(id: number) {
    this.airlineService.deleteAirline(id)
      .subscribe({
        next: (respose) => {
          this.router.navigate(['airline']);
        }
      });
  }
}
