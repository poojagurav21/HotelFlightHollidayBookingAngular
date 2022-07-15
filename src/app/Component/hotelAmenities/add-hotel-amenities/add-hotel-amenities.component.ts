import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Amenities } from 'src/app/models/amenities';
import { Hotel } from 'src/app/models/hotel';
import { HotelAmenitiesLink } from 'src/app/models/hotelAmenities';
import { AmenitiesServiceService } from 'src/app/Services/amenities-service.service';
import { HotelAmenitiesServiceService } from 'src/app/Services/hotel-amenities-service.service';
import { HotelServiceService } from 'src/app/Services/hotel-service.service';

@Component({
  selector: 'app-add-hotel-amenities',
  templateUrl: './add-hotel-amenities.component.html',
  styleUrls: ['./add-hotel-amenities.component.css']
})
export class AddHotelAmenitiesComponent implements OnInit {
  addHotelAmenitiesLinkRequest:HotelAmenitiesLink={
    id:0,
    hotelRefId:0,
    hotelName:'',
    amenitiesRefId:0,
    amenitiesName:''
  };
hotels:Hotel[]=[];
amenities:Amenities[]=[];

  constructor(private hotelService: HotelServiceService,
              private amenitiesService:AmenitiesServiceService,
              private hotelAmenitiesService:HotelAmenitiesServiceService,
              private router: Router) { }

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
  }
  addHotelAmenities() {
    this.hotelAmenitiesService.addHotelAmenitiesLinks(this.addHotelAmenitiesLinkRequest)
      .subscribe({
        next: (hotel) => {
          this.router.navigate(['hotelAmenities']);
        }
      });
  }
}
