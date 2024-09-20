import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tours-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './toursPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToursPageComponent { }
