import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.baseApiUrl + '/api/Customers');
  }

  addCustomers(addCustomerRequest: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.baseApiUrl + '/api/Customers', addCustomerRequest);
  }

  getCustomer(id: any): Observable<Customer> {
    return this.http.get<Customer>(this.baseApiUrl + '/api/Customers/' + id);
  }

  updateCustomer(id: number, updateCustomerRequest: Customer): Observable<Customer> {
    return this.http.put<Customer>(this.baseApiUrl + '/api/Customers/' + id, updateCustomerRequest);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(this.baseApiUrl + '/api/Customers/' + id);
  }
}
