// src/app/core/repositories/tour.repository.ts
import { Observable } from 'rxjs';
import { Tour } from '../entities/tour.model';

export interface TourRepository {
  getTourById(tourId: number): Observable<Tour>;
  getAllTours(): Observable<Tour[]>;
  createTour(tour: Tour): Observable<string>;
  updateTour(tour: Tour): Observable<Tour>;
  deleteTour(tourId: number): Observable<void>;
}
