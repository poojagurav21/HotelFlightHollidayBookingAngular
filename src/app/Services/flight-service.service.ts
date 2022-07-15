import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Flight } from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.baseApiUrl + '/api/Flights');
  }

  addFlights(addFlightRequest: Flight): Observable<Flight> {
    return this.http.post<Flight>(this.baseApiUrl + '/api/Flights', addFlightRequest);
  }

  getFlight(id: any): Observable<Flight> {
    return this.http.get<Flight>(this.baseApiUrl + '/api/Flights/' + id);
  }

  updateFlight(id: number, updateFlightRequest: Flight): Observable<Flight> {
    return this.http.put<Flight>(this.baseApiUrl + '/api/Flights/' + id, updateFlightRequest);
  }

  deleteFlight(id: number): Observable<Flight> {
    return this.http.delete<Flight>(this.baseApiUrl + '/api/Flights/' + id);
  }
}
