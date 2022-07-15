
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { Customer } from 'src/app/models/customer';
import { CityServiceService } from 'src/app/Services/city-service.service';
import { CustomerServiceService } from 'src/app/Services/customer-service.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  addCustomerRequest: Customer = {
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
  constructor(private customerService: CustomerServiceService,
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
  addCustomer() {
    this.customerService.addCustomers(this.addCustomerRequest)
      .subscribe({
        next: (customer) => {
          this.router.navigate(['customer']);
        }
      });
  }
}
