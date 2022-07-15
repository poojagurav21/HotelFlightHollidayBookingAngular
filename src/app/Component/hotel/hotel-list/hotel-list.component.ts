import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/city';
import { Hotel } from 'src/app/models/hotel';
import { CityServiceService } from 'src/app/Services/city-service.service';
import { HotelServiceService } from 'src/app/Services/hotel-service.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit {
  hotels: Hotel[] = [];
  cities: City[] = [];

  constructor(private hotelService: HotelServiceService, 
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

    this.hotelService.getAllHotels()

      .subscribe(
        {
          next: (hotels) => {
            this.hotels = hotels;
            console.log("hotels: ", this.hotels);
          },
          error: (response) => {
            console.log(response);
          }

        }
      );
  }

}
