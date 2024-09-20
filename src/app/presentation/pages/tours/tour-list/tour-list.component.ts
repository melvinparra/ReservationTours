import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-tour-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './tour-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TourListComponent { }
