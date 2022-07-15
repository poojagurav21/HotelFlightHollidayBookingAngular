import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Amenities } from 'src/app/models/amenities';
import { AmenitiesServiceService } from 'src/app/Services/amenities-service.service';

@Component({
  selector: 'app-add-amenities',
  templateUrl: './add-amenities.component.html',
  styleUrls: ['./add-amenities.component.css']
})
export class AddAmenitiesComponent implements OnInit {
addAmenitiesRequest:Amenities={
  id:0,
  name:'',
  description:''
};
  constructor(private amenitiesService:AmenitiesServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  addAmenities()
  {
    this.amenitiesService.addAmenities(this.addAmenitiesRequest)
    .subscribe({
      next:(amenity)=>{
        this.router.navigate(['amenities']);
      }
    });
  }
}
