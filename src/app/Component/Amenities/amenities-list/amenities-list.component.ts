import { Component, OnInit } from '@angular/core';
import { Amenities } from 'src/app/models/amenities';
import { AmenitiesServiceService } from 'src/app/Services/amenities-service.service';

@Component({
  selector: 'app-amenities-list',
  templateUrl: './amenities-list.component.html',
  styleUrls: ['./amenities-list.component.css']
})
export class AmenitiesListComponent implements OnInit {
amenities:Amenities[]=[];

  constructor(private amenitySevice:AmenitiesServiceService) { }

  ngOnInit(): void {
    this.amenitySevice.getAllAmenities()
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

}
