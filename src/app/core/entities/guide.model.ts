// src/app/core/entities/guide.model.ts
export interface Guide {
    guideId: number;              // ID del guía
    firstName: string;            // Nombre del guía
    lastName: string;             // Apellido del guía
    email?: string;               // Correo electrónico (opcional)
    phoneNumber?: string;         // Número de teléfono (opcional)
    hireDate?: Date;              // Fecha de contratación (opcional)
    createdAt?: Date;             // Fecha de creación (opcional)
  }
  