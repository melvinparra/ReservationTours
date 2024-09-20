// src/app/core/entities/tour.model.ts
export interface Tour {
    tourId: number;               // ID del tour
    tourName: string;             // Nombre del tour
    description?: string;         // Descripción del tour (opcional)
    location?: string;            // Ubicación del tour (opcional)
    durationHours: number;        // Duración del tour en horas
    price: number;                // Precio del tour
    maxCapacity: number;          // Capacidad máxima
    createdAt?: Date;             // Fecha de creación (opcional)
  }
  