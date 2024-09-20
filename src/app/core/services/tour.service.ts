// src/app/data/services/tour.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tour } from '../../core/entities/tour.model';
import { TourRepository } from '../../core/repositories/tour-repository';

@Injectable({
  providedIn: 'root'
})
export class TourService implements TourRepository {
  private apiUrl = 'https://api.example.com/tours'; // URL de la API

  constructor(private http: HttpClient) {}

  getTourById(tourId: number): Observable<Tour> {
    return this.http.get<Tour>(`${this.apiUrl}/${tourId}`);
  }

  getAllTours(): Observable<Tour[]> {
    return this.http.get<Tour[]>(this.apiUrl);
  }

  createTour(tour: Tour): Observable<Tour> {
    return this.http.post<Tour>(this.apiUrl, tour);
  }

  updateTour(tour: Tour): Observable<Tour> {
    return this.http.put<Tour>(`${this.apiUrl}/${tour.tourId}`, tour);
  }

  deleteTour(tourId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${tourId}`);
  }
}
