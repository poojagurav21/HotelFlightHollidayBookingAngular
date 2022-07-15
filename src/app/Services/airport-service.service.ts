import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Airport } from '../models/airport';

@Injectable({
  providedIn: 'root'
})
export class AirportServiceService {
  
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllAirports(): Observable<Airport[]> {
    return this.http.get<Airport[]>(this.baseApiUrl + '/api/Airports');
  }

  addAirports(addAirportRequest: Airport): Observable<Airport> {
    return this.http.post<Airport>(this.baseApiUrl + '/api/Airports', addAirportRequest);
  }

  getAirport(id: any): Observable<Airport> {
    return this.http.get<Airport>(this.baseApiUrl + '/api/Airports/' + id);
  }

  updateAirport(id: number, updateAirportRequest: Airport): Observable<Airport> {
    return this.http.put<Airport>(this.baseApiUrl + '/api/Airports/' + id, updateAirportRequest);
  }

  deleteAirport(id: number): Observable<Airport> {
    return this.http.delete<Airport>(this.baseApiUrl + '/api/Airports/' + id);
  }
}
