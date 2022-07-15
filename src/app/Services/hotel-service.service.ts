import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Hotel } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.baseApiUrl + '/api/Hotels');
  }

  addHotels(addHotelRequest: Hotel): Observable<Hotel> {
    return this.http.post<Hotel>(this.baseApiUrl + '/api/Hotels', addHotelRequest);
  }

  getHotel(id: any): Observable<Hotel> {
    return this.http.get<Hotel>(this.baseApiUrl + '/api/Hotels/' + id);
  }

  updateHotel(id: number, updateHotelRequest: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(this.baseApiUrl + '/api/Hotels/' + id, updateHotelRequest);
  }

  deleteHotel(id: number): Observable<Hotel> {
    return this.http.delete<Hotel>(this.baseApiUrl + '/api/Hotels/' + id);
  }
}
