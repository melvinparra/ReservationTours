// src/app/core/repositories/payment.repository.ts
import { Observable } from 'rxjs';
import { Payment } from '../entities/payment.model';

export interface PaymentRepository {
  getPaymentById(paymentId: number): Observable<Payment>;
  getPaymentsByReservation(reservationId: number): Observable<Payment[]>;
  createPayment(payment: Payment): Observable<Payment>;
  updatePayment(payment: Payment): Observable<Payment>;
  deletePayment(paymentId: number): Observable<void>;
}
