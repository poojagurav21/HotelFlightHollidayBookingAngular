import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { CityServiceService } from 'src/app/Services/city-service.service';
import { CountrySeviceService } from 'src/app/Services/country-sevice.service';
import { CityListComponent } from '../city-list/city-list.component';

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.css']
})
export class EditCityComponent implements OnInit {
  cityDetails: City = {
    id: 0,
    name: '',
    countryName: '',
    countryRefId: 0
  };
  
  countries:Country[]=[];
  constructor(private route: ActivatedRoute, private cityService: CityServiceService, private countryService: CountrySeviceService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.cityService.getCity(id)
            .subscribe({
              next: (response) => {
                this.cityDetails = response;
              }
            });
        }
      }
    });
    this.countryService.getAllCountries()
    .subscribe(
      {
        next:(countries)=>{
          this.countries=countries;
        },
        error:(response)=>{
          console.log(response);
        }

      }
    );
  }
  updateCity() {
    this.cityService.updateCity(this.cityDetails.id, this.cityDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['city']);
        }
      });
  }

  deleteCity(id: number) {
    this.cityService.deleteCity(id)
      .subscribe({
        next: (response) => {
          this.router.navigate(['city']);
        }
      });
  }
}
