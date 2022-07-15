import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { CityServiceService } from 'src/app/Services/city-service.service';
import { CountrySeviceService } from 'src/app/Services/country-sevice.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {
  cities: City[] = [];
  countries: Country[] = [];
  constructor(private cityService: CityServiceService, private countrySevice: CountrySeviceService) { }

  ngOnInit(): void {
    this.countrySevice.getAllCountries()
      .subscribe(
        {
          next: (countries) => {
            this.countries = countries;
            console.log("countries: ", this.countries);
          },
          error: (response) => {
            console.log(response);
          }

        }
      );

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

}
