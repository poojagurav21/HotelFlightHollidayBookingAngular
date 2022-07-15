import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from 'src/app/models/country';
import { CountrySeviceService } from 'src/app/Services/country-sevice.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {
  addCountryRequest:Country={
    id:0,
    code:'',
    name:''
  };
    constructor(private countryService:CountrySeviceService,private router:Router) { }
  
    ngOnInit(): void {
    }
  addCountry()
  {
    this.countryService.addCountry(this.addCountryRequest)
    .subscribe({
      next:(country)=>{
        this.router.navigate(['country']);
      }
    });
  }

}
