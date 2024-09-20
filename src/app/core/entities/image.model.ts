// src/app/core/entities/image.model.ts
export interface Image {
    imageId: number;              // ID de la imagen
    tourId: number;               // ID del tour (relación con Tour)
    imagePath: string;            // Ruta de la imagen
    description?: string;         // Descripción de la imagen (opcional)
    createdAt?: Date;             // Fecha de creación (opcional)
  }
  