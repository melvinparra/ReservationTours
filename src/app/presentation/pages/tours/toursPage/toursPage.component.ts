import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input, OnInit, signal, Signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tour } from '../../../../core/entities/tour.model';
import { TourService } from '../../../../core/services/tour.service';

@Component({
  selector: 'app-tours-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule 
  ],
  templateUrl: './toursPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export default class ToursPageComponent implements OnInit { 
  _tours: Tour[] = []
  tours = signal(this._tours)
  private tourService = inject(TourService)
public tourForm!:FormGroup;

selectedTour: Tour | null = null;

constructor(private fb: FormBuilder) {
   // Definimos el formulario con validaciones
   this.tourForm = this.fb.group({
    tourId: [''],
    tourName: ['', Validators.required],
    description: [''],
    location: [''],
    durationHours: [0, [Validators.required, Validators.min(1)]],
    price: [0, [Validators.required, Validators.min(0)]],
    maxCapacity: [0, [Validators.required, Validators.min(1)]]
  });

}
  ngOnInit(): void {
    this.tourService.getAllTours().subscribe(
      data => {
        console.log(data);
        this.tours.set(data);
      },
      error => {
        console.log( error);
      }
    );
    
    // this.tours = [
    //   { tourId: '1', tourName: 'Tour a la Montaña', durationHours: 5, price: 100, maxCapacity: 20 },
    //   { tourId: '2', tourName: 'City Tour', durationHours: 3, price: 50, maxCapacity: 15 }
    // ];
  }

  // Guardar o actualizar un tour
  onSubmit(): void {
   
    if (this.tourForm.valid) {
      if (this.selectedTour) {
        // Actualizar tour existente
        const index = this.tours().findIndex(tour => tour.tourId === this.selectedTour!.tourId);
        this.tours()[index] = { ...this.selectedTour, ...this.tourForm.value };
        this.selectedTour = null; // Resetear selección
      } else {
        // Crear nuevo tour
        const newTour: Tour = {
          ...this.tourForm.value,
          tourId:this.tours.length + 1,
          createdAt: new Date()
        };

        this.tourService.createTour(newTour).subscribe(
          (value)=> {
            console.log(value);
            newTour.tourId = value
            this.tours.update(() => [...this.tours(),newTour]);
          }
        )
      }
      this.tourForm.reset();
    }
  }

  // Editar un tour
  editTour(tour: Tour): void {
    this.selectedTour = tour;
    this.tourForm.patchValue(tour); // Carga los valores del tour en el formulario
  }

  // Eliminar un tour
  deleteTour(tourId: string): void {
    this.tours.set( this.tours().filter(tour => tour.tourId !== tourId));
  }

}
