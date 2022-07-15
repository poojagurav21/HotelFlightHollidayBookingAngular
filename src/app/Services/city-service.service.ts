import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityServiceService {
baseApiUrl:string=environment.baseApiUrl;

  constructor(private http:HttpClient) { }

getAllCities():Observable<City[]>
{
  return this.http.get<City[]>(this.baseApiUrl+'/api/Cities');
}

addCities(addCityRequest:City):Observable<City>{
  return this.http.post<City>(this.baseApiUrl+'/api/Cities',addCityRequest);
}

getCity(id:any):Observable<City>
{
 return this.http.get<City>(this.baseApiUrl+'/api/Cities/'+id);
}

updateCity(id:number,updateCityRequest:City):Observable<City>
{
  return this.http.put<City>(this.baseApiUrl+'/api/Cities/'+id,updateCityRequest);
}

deleteCity(id:number):Observable<City>
{
  return this.http.delete<City>(this.baseApiUrl+'/api/Cities/'+id);
}
}
