import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-payment-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './payment-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentListComponent { }
