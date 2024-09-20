// src/app/core/repositories/customer.repository.ts
import { Observable } from 'rxjs';
import { Customer } from '../entities/customer.model';

export interface CustomerRepository {
  getCustomerById(customerId: number): Observable<Customer>;
  getAllCustomers(): Observable<Customer[]>;
  createCustomer(customer: Customer): Observable<Customer>;
  updateCustomer(customer: Customer): Observable<Customer>;
  deleteCustomer(customerId: number): Observable<void>;
}
