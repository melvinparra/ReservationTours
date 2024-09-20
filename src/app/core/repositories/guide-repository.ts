// src/app/core/repositories/guide.repository.ts
import { Observable } from 'rxjs';
import { Guide } from '../entities/guide.model';

export interface GuideRepository {
  getGuideById(guideId: number): Observable<Guide>;
  getAllGuides(): Observable<Guide[]>;
  createGuide(guide: Guide): Observable<Guide>;
  updateGuide(guide: Guide): Observable<Guide>;
  deleteGuide(guideId: number): Observable<void>;
}
