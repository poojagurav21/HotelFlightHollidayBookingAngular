import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Amenities } from '../models/amenities';

@Injectable({
  providedIn: 'root'
})
export class AmenitiesServiceService {
  baseApiUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }
  getAllAmenities():Observable<Amenities[]>
  {
    return this.http.get<Amenities[]>(this.baseApiUrl+'/api/Amenities');
  }
  addAmenities(addAmenitiesRequest:Amenities):Observable<Amenities>
  {
    return this.http.post<Amenities>(this.baseApiUrl+'/api/Amenities',addAmenitiesRequest);
  }

  getAmenities(id:any):Observable<Amenities>
  {
   return this.http.get<Amenities>(this.baseApiUrl+'/api/Amenities/'+id);
  }

  updateAmenities(id:number,updateAmenitiesRequest:Amenities):Observable<Amenities>
  {
    return this.http.put<Amenities>(this.baseApiUrl+'/api/Amenities/'+id,updateAmenitiesRequest);
  }

  deleteAmenities(id:number):Observable<Amenities>
  {
    return this.http.delete<Amenities>(this.baseApiUrl+'/api/Amenities/'+id);
  }
}
