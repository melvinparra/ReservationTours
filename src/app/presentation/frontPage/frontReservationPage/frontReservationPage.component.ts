import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-front-reservation-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './frontReservationPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FrontReservationPageComponent { }
