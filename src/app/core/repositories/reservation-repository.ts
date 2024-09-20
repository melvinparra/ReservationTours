// src/app/core/repositories/reservation.repository.ts
import { Observable } from 'rxjs';
import { Reservation } from '../entities/reservation.model';

export interface ReservationRepository {
  getReservationById(reservationId: number): Observable<Reservation>;
  getAllReservations(): Observable<Reservation[]>;
  createReservation(reservation: Reservation): Observable<Reservation>;
  updateReservation(reservation: Reservation): Observable<Reservation>;
  deleteReservation(reservationId: number): Observable<void>;
}
