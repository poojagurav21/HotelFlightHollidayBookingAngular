import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { Country } from 'src/app/models/country';
import { CityServiceService } from 'src/app/Services/city-service.service';
import { CountrySeviceService } from 'src/app/Services/country-sevice.service';

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  addCityRequest:City={
    id:0,
    name:'',
    countryName:'',
    countryRefId:0
  };
  countries:Country[]=[];
  constructor(private cityService:CityServiceService,private countryService:CountrySeviceService,private router:Router) { }

  ngOnInit(): void {
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
addCity()
{
  this.cityService.addCities(this.addCityRequest)
  .subscribe({
    next:(city)=>{
      this.router.navigate(['city']);
    }
  });
  
}
}
