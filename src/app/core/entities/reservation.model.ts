// src/app/core/entities/reservation.model.ts
export interface Reservation {
    reservationId: number;        // ID de la reserva
    customerId: number;           // ID del cliente (relación con Customer)
    tourId: number;               // ID del tour (relación con Tour)
    reservationDate: Date;        // Fecha de la reserva
    tourDate: Date;               // Fecha del tour
    numberOfPeople: number;       // Número de personas
    totalAmount: number;          // Monto total de la reserva
    status: string;               // Estado de la reserva ('Pending', 'Confirmed', 'Cancelled')
    createdAt?: Date;             // Fecha de creación (opcional)
  }
  