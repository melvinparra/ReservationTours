import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-guides-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './guidesPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GuidesPageComponent { }
