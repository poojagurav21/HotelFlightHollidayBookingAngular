import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { Hotel } from 'src/app/models/hotel';
import { CityServiceService } from 'src/app/Services/city-service.service';
import { HotelServiceService } from 'src/app/Services/hotel-service.service';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.css']
})
export class EditHotelComponent implements OnInit {
  hotelDetails: Hotel = {
    id: 0,
    name: '',
    star: 0,
    cityName: '',
    cityRefId: 0
  };
  
  cities: City[] = [];
  constructor(private route: ActivatedRoute, 
              private cityService: CityServiceService,
              private hotelService: HotelServiceService, 
              private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.hotelService.getHotel(id)
            .subscribe({
              next: (response) => {
                this.hotelDetails = response;
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
  updateHotel() {
    this.hotelService.updateHotel(this.hotelDetails.id, this.hotelDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['hotel']);
        }
      });
  }

  deleteHotel(id: number) {
    this.hotelService.deleteHotel(id)
      .subscribe({
        next: (response) => {
          this.router.navigate(['hotel']);
        }
      });
  }
}
