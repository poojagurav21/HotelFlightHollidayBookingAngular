import { Component, OnInit } from '@angular/core';
import { Amenities } from 'src/app/models/amenities';
import { Hotel } from 'src/app/models/hotel';
import { HotelAmenitiesLink } from 'src/app/models/hotelAmenities';
import { AmenitiesServiceService } from 'src/app/Services/amenities-service.service';
import { HotelAmenitiesServiceService } from 'src/app/Services/hotel-amenities-service.service';
import { HotelServiceService } from 'src/app/Services/hotel-service.service';

@Component({
  selector: 'app-hotel-amenities-list',
  templateUrl: './hotel-amenities-list.component.html',
  styleUrls: ['./hotel-amenities-list.component.css']
})
export class HotelAmenitiesListComponent implements OnInit {
hotels:Hotel[]=[];
amenities:Amenities[]=[];
hotelAmenities:HotelAmenitiesLink[]=[];
  constructor(private hotelService:HotelServiceService,
              private amenitiesService:AmenitiesServiceService,
              private hotelAmenitiesService:HotelAmenitiesServiceService) { }

  ngOnInit(): void {
    this.hotelService.getAllHotels()
    .subscribe({
      next:(hotels)=>{
        this.hotels=hotels;

      },
      error:(response)=>{
        console.log(response);
      }
    });
    this.amenitiesService.getAllAmenities()
    .subscribe(
      {
        next:(amenities)=>{
          this.amenities=amenities;
        },
        error:(response)=>{
          console.log(response);
        }
      }
    );
    this.hotelAmenitiesService.getAllHotelAmenitiesLinks()
    .subscribe(
      {
        next:(amenities)=>{
          this.hotelAmenities=amenities;
        },
        error:(response)=>{
          console.log(response);
        }
      }
    );
  }

}
