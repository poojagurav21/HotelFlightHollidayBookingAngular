import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/models/country';
import { CountrySeviceService } from 'src/app/Services/country-sevice.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countries:Country[]=[];


  constructor(private countryService:CountrySeviceService) { }

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

}
