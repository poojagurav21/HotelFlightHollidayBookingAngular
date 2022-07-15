import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { HotelAmenitiesLink } from '../models/hotelAmenities';

@Injectable({
  providedIn: 'root'
})
export class HotelAmenitiesServiceService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllHotelAmenitiesLinks(): Observable<HotelAmenitiesLink[]> {
    return this.http.get<HotelAmenitiesLink[]>(this.baseApiUrl + '/api/HotelAmenitiesLinks');
  }

  addHotelAmenitiesLinks(addHotelAmenitiesLinkRequest: HotelAmenitiesLink): Observable<HotelAmenitiesLink> {
    return this.http.post<HotelAmenitiesLink>(this.baseApiUrl + '/api/HotelAmenitiesLinks', addHotelAmenitiesLinkRequest);
  }

  getHotelAmenitiesLink(id: any): Observable<HotelAmenitiesLink> {
    return this.http.get<HotelAmenitiesLink>(this.baseApiUrl + '/api/HotelAmenitiesLinks/' + id);
  }

  updateHotelAmenitiesLink(id: number, updateHotelAmenitiesLinkRequest: HotelAmenitiesLink): Observable<HotelAmenitiesLink> {
    return this.http.put<HotelAmenitiesLink>(this.baseApiUrl + '/api/HotelAmenitiesLinks/' + id, updateHotelAmenitiesLinkRequest);
  }

  deleteHotelAmenitiesLink(id: number): Observable<HotelAmenitiesLink> {
    return this.http.delete<HotelAmenitiesLink>(this.baseApiUrl + '/api/HotelAmenitiesLinks/' + id);
  }
}
