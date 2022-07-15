import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Amenities } from 'src/app/models/amenities';
import { AmenitiesServiceService } from 'src/app/Services/amenities-service.service';

@Component({
  selector: 'app-edit-amenities',
  templateUrl: './edit-amenities.component.html',
  styleUrls: ['./edit-amenities.component.css']
})
export class EditAmenitiesComponent implements OnInit {
  amenitiesDeatils:Amenities={
    id:0,
    name:'',
    description:''
  };
  constructor(private route: ActivatedRoute, private amenitiesService: AmenitiesServiceService, private router: Router) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id=params.get('id');

        if(id)
        {
          this.amenitiesService.getAmenities(id)
          .subscribe({
            next: (response) => {
              this.amenitiesDeatils = response;
            }
          });
      }
    }
  })
}
updateAmenities() {
  this.amenitiesService.updateAmenities(this.amenitiesDeatils.id, this.amenitiesDeatils)
    .subscribe({
      next: (response) => {
        this.router.navigate(['amenities']);
      }
    });


}
deleteAmenities(id: number) {
  this.amenitiesService.deleteAmenities(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['amenities']);
      }
    })
}
}
