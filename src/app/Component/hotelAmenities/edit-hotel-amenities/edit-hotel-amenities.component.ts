import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Amenities } from 'src/app/models/amenities';
import { Hotel } from 'src/app/models/hotel';
import { HotelAmenitiesLink } from 'src/app/models/hotelAmenities';
import { AmenitiesServiceService } from 'src/app/Services/amenities-service.service';
import { HotelAmenitiesServiceService } from 'src/app/Services/hotel-amenities-service.service';
import { HotelServiceService } from 'src/app/Services/hotel-service.service';

@Component({
  selector: 'app-edit-hotel-amenities',
  templateUrl: './edit-hotel-amenities.component.html',
  styleUrls: ['./edit-hotel-amenities.component.css']
})
export class EditHotelAmenitiesComponent implements OnInit {
 hotelAmenitiesDetails:HotelAmenitiesLink={
    id:0,
    hotelRefId:0,
    hotelName:'',
    amenitiesRefId:0,
    amenitiesName:''
  };
hotels:Hotel[]=[];
amenities:Amenities[]=[];
  constructor(private route: ActivatedRoute,
    private hotelService: HotelServiceService,
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

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          this.hotelAmenitiesService.getHotelAmenitiesLink(id)
            .subscribe({
              next: (response) => {
                this.hotelAmenitiesDetails = response;
              }
            });
        }
      }
    });
  }
  updateHotelAmenities() {
    this.hotelAmenitiesService.updateHotelAmenitiesLink(this.hotelAmenitiesDetails.id, this.hotelAmenitiesDetails)
      .subscribe({
        next: (response) => {
          this.router.navigate(['hotelAmenities']);
        }
      });
  }

  deleteHotelAmenities(id: number) {
    this.hotelAmenitiesService.deleteHotelAmenitiesLink(id)
      .subscribe({
        next: (response) => {
          this.router.navigate(['hotelAmenities']);
        }
      });
  }
}
