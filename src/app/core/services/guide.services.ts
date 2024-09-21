// src/app/data/services/guide.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guide } from '../../core/entities/guide.model';
import { GuideRepository } from '../../core/repositories/guide-repository';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GuideService implements GuideRepository {
  private apiUrl = `${environment.apiUrl}/guides`; // URL de la API

  constructor(private http: HttpClient) {}

  getGuideById(guideId: number): Observable<Guide> {
    return this.http.get<Guide>(`${this.apiUrl}/${guideId}`);
  }

  getAllGuides(): Observable<Guide[]> {
    return this.http.get<Guide[]>(this.apiUrl);
  }

  createGuide(guide: Guide): Observable<Guide> {
    return this.http.post<Guide>(this.apiUrl, guide);
  }

  updateGuide(guide: Guide): Observable<Guide> {
    return this.http.put<Guide>(`${this.apiUrl}/${guide.guideId}`, guide);
  }

  deleteGuide(guideId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${guideId}`);
  }
}
