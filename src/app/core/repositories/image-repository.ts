// src/app/core/repositories/image.repository.ts
import { Observable } from 'rxjs';
import { Image } from '../entities/image.model';

export interface ImageRepository {
  getImageById(imageId: number): Observable<Image>;
  getImagesByTour(tourId: number): Observable<Image[]>;
  createImage(image: Image): Observable<Image>;
  deleteImage(imageId: number): Observable<void>;
}
