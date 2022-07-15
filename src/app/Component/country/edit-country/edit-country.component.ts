import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/models/country';
import { CountrySeviceService } from 'src/app/Services/country-sevice.service';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.css']
})
export class EditCountryComponent implements OnInit {

  countryDetails: Country = {
    id: 0,
    code: '',
    name: ''
  };


  constructor(private route: ActivatedRoute, private countryService: CountrySeviceService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.countryService.getCountry(id)
            .subscribe({
              next: (response) => {
                this.countryDetails = response;
              }
            });
        }
      }
    })
  }
  updateCountry() {
    this.countryService.updateCountry(this.countryDetails.id, this.countryDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['country']);
        }
      });


  }
  deleteCountry(id: number) {
    this.countryService.deleteCountry(id)
      .subscribe({
        next: (response) => {
          this.router.navigate(['country']);
        }
      })
  }
}
