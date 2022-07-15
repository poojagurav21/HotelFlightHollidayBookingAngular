import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Airline } from '../models/airline';

@Injectable({
  providedIn: 'root'
})
export class AirlineServiceService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllAirlines(): Observable<Airline[]> {
    return this.http.get<Airline[]>(this.baseApiUrl + '/api/Airlines');
  }

  addAirlines(addAirlineRequest: Airline): Observable<Airline> {
    return this.http.post<Airline>(this.baseApiUrl + '/api/Airlines', addAirlineRequest);
  }

  getAirline(id: any): Observable<Airline> {
    return this.http.get<Airline>(this.baseApiUrl + '/api/Airlines/' + id);
  }

  updateAirline(id: number, updateAirlineRequest: Airline): Observable<Airline> {
    return this.http.put<Airline>(this.baseApiUrl + '/api/Airlines/' + id, updateAirlineRequest);
  }

  deleteAirline(id: number): Observable<Airline> {
    return this.http.delete<Airline>(this.baseApiUrl + '/api/Airlines/' + id);
  }
}
