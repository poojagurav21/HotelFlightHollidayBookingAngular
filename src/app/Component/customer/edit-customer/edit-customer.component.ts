import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { Customer } from 'src/app/models/customer';
import { CityServiceService } from 'src/app/Services/city-service.service';
import { CustomerServiceService } from 'src/app/Services/customer-service.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerDetails: Customer = {
    id: 0,
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address1: '',
    cityName: '',
    cityRefId: 0,
    pincode: 0,
    telephone1: '',
    email1: ''

  };
  cities: City[] = [];

  constructor(private route: ActivatedRoute,
    private cityService: CityServiceService,
    private customerService: CustomerServiceService,
    private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.customerService.getCustomer(id)
            .subscribe({
              next: (response) => {
                this.customerDetails = response;
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
  updateCustomer() {
    this.customerService.updateCustomer(this.customerDetails.id, this.customerDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['customer']);
        }
      });
  }
  deleteCustomer(id: number) {
    this.customerService.deleteCustomer(id)
      .subscribe({
        next: (respose) => {
          this.router.navigate(['customer']);
        }
      });
  }
}
