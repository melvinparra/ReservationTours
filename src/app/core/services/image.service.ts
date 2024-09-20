// src/app/data/services/image.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Image } from '../../core/entities/image.model';
import { ImageRepository } from '../repositories/image-repository';

@Injectable({
  providedIn: 'root'
})
export class ImageService implements ImageRepository {
  private apiUrl = 'https://api.example.com/images'; // URL de la API

  constructor(private http: HttpClient) {}

  getImageById(imageId: number): Observable<Image> {
    return this.http.get<Image>(`${this.apiUrl}/${imageId}`);
  }

  getImagesByTour(tourId: number): Observable<Image[]> {
    return this.http.get<Image[]>(`${this.apiUrl}?tourId=${tourId}`);
  }

  createImage(image: Image): Observable<Image> {
    return this.http.post<Image>(this.apiUrl, image);
  }

  deleteImage(imageId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${imageId}`);
  }
}
