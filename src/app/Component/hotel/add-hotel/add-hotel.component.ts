import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { Hotel } from 'src/app/models/hotel';
import { CityServiceService } from 'src/app/Services/city-service.service';
import { HotelServiceService } from 'src/app/Services/hotel-service.service';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})

export class AddHotelComponent implements OnInit 
{
  addHotelRequest: Hotel = {
    id: 0,
    name: '',
    star: 0,
    cityName: '',
    cityRefId: 0
  };
  cities: City[] = [];
  constructor(private hotelService: HotelServiceService,
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
  addHotel() {
    this.hotelService.addHotels(this.addHotelRequest)
      .subscribe({
        next: (hotel) => {
          this.router.navigate(['hotel']);
        }
      });
  }
}
