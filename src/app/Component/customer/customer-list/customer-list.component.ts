import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { Customer } from 'src/app/models/customer';
import { CityServiceService } from 'src/app/Services/city-service.service';
import { CustomerServiceService } from 'src/app/Services/customer-service.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  cities: City[] = [];

  constructor(private customerService: CustomerServiceService,
    private cityService: CityServiceService) { }

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

    this.customerService.getAllCustomers()

      .subscribe(
        {
          next: (customers) => {
            this.customers = customers;
            console.log("customers: ", this.customers);
          },
          error: (response) => {
            console.log(response);
          }

        }
      );
  }

}
