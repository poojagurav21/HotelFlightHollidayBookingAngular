import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airport } from 'src/app/models/airport';
import { City } from 'src/app/models/city';
import { AirportServiceService } from 'src/app/Services/airport-service.service';
import { CityServiceService } from 'src/app/Services/city-service.service';

@Component({
  selector: 'app-edit-airport',
  templateUrl: './edit-airport.component.html',
  styleUrls: ['./edit-airport.component.css']
})
export class EditAirportComponent implements OnInit {
  airportDetails:Airport={
    id:0,
    code:'',
    address1:'',
    cityRefId:0,
    cityName:'',
    pincode:0,
    telephone1:'',
    email1:''
  };
  cities: City[] = [];
  constructor(private route: ActivatedRoute,
    private cityService: CityServiceService,
    private airportService: AirportServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.airportService.getAirport(id)
            .subscribe({
              next: (response) => {
                this.airportDetails = response;
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
  updateAirport() {
    this.airportService.updateAirport(this.airportDetails.id, this.airportDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['airport']);
        }
      });
  }
  deleteAirport(id: number) {
    this.airportService.deleteAirport(id)
      .subscribe({
        next: (respose) => {
          this.router.navigate(['airport']);
        }
      });
  }
}
