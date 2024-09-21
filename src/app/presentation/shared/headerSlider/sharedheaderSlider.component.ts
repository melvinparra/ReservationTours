import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sharedheader-slider',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './sharedheaderSlider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SharedHeaderSliderComponent { slides = [
  {
    imageUrl: 'https://wallpapers.com/images/featured/fondos-de-viajes-y-turismo-3lwu4dhaz92id3es.jpg',
    title: 'Explora lo Extraordinario: Aventuras Únicas en Cada Destino',
    description: 'Aventura en las alturas con vistas impresionantes.',
    buttonText: 'Reserva Ahora'
  }
  // ,
  // {
  //   imageUrl: 'https://via.placeholder.com/1920x800',
  //   title: 'Descubre la Playa',
  //   description: 'Relájate en las playas más paradisíacas.',
  //   buttonText: 'Reserva Ahora'
  // },
  // {
  //   imageUrl: 'https://via.placeholder.com/1920x800',
  //   title: 'Aventura en el Desierto',
  //   description: 'Explora las dunas y paisajes desérticos únicos.',
  //   buttonText: 'Reserva Ahora'
  // }
];

currentIndex = 0;
slideInterval: any;

ngOnInit(): void {
  this.startSlider();
}

startSlider() {
  this.slideInterval = setInterval(() => {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }, 5000); // Cambia cada 5 segundos
}

ngOnDestroy(): void {
  if (this.slideInterval) {
    clearInterval(this.slideInterval);
  }
}
}
