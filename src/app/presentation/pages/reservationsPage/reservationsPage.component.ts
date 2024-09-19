import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-reservations-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './reservationsPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReservationsPageComponent { }
