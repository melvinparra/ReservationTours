import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { TourService } from '../../../core/services/tour.service';
import { Tour } from '../../../core/entities/tour.model';

@Component({
  selector: 'app-front-tours-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './frontToursPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class FrontToursPageComponent implements OnInit {
  _tours: Tour[] = []
  tours = signal(this._tours)
  private tourService = inject(TourService)

  ngOnInit(): void {
    this.tourService.getAllTours().subscribe(
      data => {
        console.log(data);
        this.tours.set(data);
      },
      error => {
        console.log( error);
      }
    );
} 

}
