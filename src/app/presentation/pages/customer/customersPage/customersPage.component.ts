import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-customers-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './customersPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CustomersPageComponent { }
