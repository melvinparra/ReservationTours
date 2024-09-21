// src/app/data/services/payment.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../../core/entities/payment.model';
import { PaymentRepository } from '../../core/repositories/payment-repository';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PaymentService implements PaymentRepository {
  private apiUrl = `${environment.apiUrl}/payments`;
  constructor(private http: HttpClient) {}

  getPaymentById(paymentId: number): Observable<Payment> {
    return this.http.get<Payment>(`${this.apiUrl}/${paymentId}`);
  }

  getPaymentsByReservation(reservationId: number): Observable<Payment[]> {
    return this.http.get<Payment[]>(`${this.apiUrl}?reservationId=${reservationId}`);
  }

  createPayment(payment: Payment): Observable<Payment> {
    return this.http.post<Payment>(this.apiUrl, payment);
  }

  updatePayment(payment: Payment): Observable<Payment> {
    return this.http.put<Payment>(`${this.apiUrl}/${payment.paymentId}`, payment);
  }

  deletePayment(paymentId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${paymentId}`);
  }
}
