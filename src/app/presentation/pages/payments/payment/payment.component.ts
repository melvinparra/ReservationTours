import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './payment.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent { }
