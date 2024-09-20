// src/app/core/entities/payment.model.ts
export interface Payment {
    paymentId: number;            // ID del pago
    reservationId: number;        // ID de la reserva (relación con Reservation)
    paymentDate: Date;            // Fecha del pago
    amount: number;               // Monto del pago
    paymentMethod?: string;       // Método de pago (opcional)
    paymentStatus: string;        // Estado del pago ('Pending', 'Completed')
    createdAt?: Date;             // Fecha de creación (opcional)
  }
  