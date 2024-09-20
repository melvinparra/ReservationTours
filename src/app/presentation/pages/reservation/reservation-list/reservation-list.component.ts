import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reservation-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './reservation-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationListComponent { }
