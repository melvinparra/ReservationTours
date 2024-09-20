// src/app/data/services/customer.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../../core/entities/customer.model';
import { CustomerRepository } from '../../core/repositories/customer-repository'; 
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements CustomerRepository {
  private apiUrl = `${environment.apiUrl}/customers`; // URL de la API
private http = inject(HttpClient)
  constructor() {}

  getCustomerById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.apiUrl}/${customerId}`);
  }

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiUrl);
  }

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>(`${this.apiUrl}/${customer.customerId}`, customer);
  }

  deleteCustomer(customerId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${customerId}`);
  }
}
