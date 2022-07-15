import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountrySeviceService {
baseApiUrl:string=environment.baseApiUrl;

  constructor(private http:HttpClient) { }

  getAllCountries():Observable<Country[]>
  {
    console.log("countrygetiing");
   return this.http.get<Country[]>(this.baseApiUrl+'/api/Countries');
  }

  addCountry(addCountryRequest:Country):Observable<Country>{
    return this.http.post<Country>(this.baseApiUrl+'/api/Countries',addCountryRequest);
  }

  getCountry(id:any):Observable<Country>
  {
   return this.http.get<Country>(this.baseApiUrl+'/api/Countries/'+id);
  }

  updateCountry(id:number,updateCountryRequest:Country):Observable<Country>
  {
    return this.http.put<Country>(this.baseApiUrl+'/api/Countries/'+id,updateCountryRequest);
  }

  deleteCountry(id:number):Observable<Country>
  {
    return this.http.delete<Country>(this.baseApiUrl+'/api/Countries/'+id);
  }
}
