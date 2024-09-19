import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-front-tours-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './frontToursPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FrontToursPageComponent { }
