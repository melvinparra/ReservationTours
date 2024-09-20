// src/app/core/entities/customer.model.ts
export interface Customer {
    customerId: number;           // ID del cliente
    firstName: string;            // Nombre
    lastName: string;             // Apellido
    email: string;                // Correo electrónico
    phoneNumber?: string;         // Número de teléfono (opcional)
    dateOfBirth?: Date;           // Fecha de nacimiento (opcional)
    createdAt?: Date;             // Fecha de creación (opcional)
  }
  