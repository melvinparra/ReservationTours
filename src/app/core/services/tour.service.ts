// src/app/data/services/tour.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tour } from '../../core/entities/tour.model';
import { TourRepository } from '../../core/repositories/tour-repository';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TourService implements TourRepository {
 private apiUrl = `${environment.apiUrl}/tours`; // URL de la API
private http = inject(HttpClient)
  constructor() {}

  getTourById(tourId: number): Observable<Tour> {
    return this.http.get<Tour>(`${this.apiUrl}/${tourId}`);
  }

  getAllTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.apiUrl);
  }

  createTour(tour: Tour): Observable<string> {
    return this.http.post<string>(this.apiUrl, tour);
  }

  updateTour(tour: Tour): Observable<Tour> {
    return this.http.put<Tour>(`${this.apiUrl}/${tour.tourId}`, tour);
  }

  deleteTour(tourId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${tourId}`);
  }
}
