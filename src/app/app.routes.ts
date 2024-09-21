import { Routes } from '@angular/router';
import { DashboardLayoutComponent } from './presentation/layouts/dashboardLayout/dashboardLayout.component';
import FrontLayoutComponent from './presentation/layouts/frontLayout/frontLayout.component';

export const routes: Routes = [ 
  {
    path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'customer',
        loadComponent: () =>
          import(
            './presentation/pages/customer/customersPage/customersPage.component'
          ),
        data: {
          icon: 'fa-solid fa-spell-check',
          title: 'Customer',
          description: 'Customer Creation',
        },
      },
      {
        path: 'guides',
        loadComponent: () =>
          import('./presentation/pages/guidesPage/guidesPage.component'),
        data: {
          icon: 'fa-solid fa-code-compare',
          title: 'Guides',
          description: 'Guides creation',
        },
      },
      {
        path: 'reservation',
        loadComponent: () =>
          import(
            './presentation/pages/reservation/reservationsPage/reservationsPage.component'
          ),
        data: {
          icon: 'fa-solid fa-water',
          title: 'Reservation',
          description: 'check reservations',
        },
      },
      {
        path: 'tours',
        loadComponent: () =>
          import('./presentation/pages/tours/toursPage/toursPage.component'),
        data: {
          icon: 'fa-solid fa-language',
          title: 'Tours',
          description: 'Tours creation',
        },
      },      
      {
        path: '**',
        redirectTo: 'tours',
        pathMatch: 'full',
      },
    ],
  },{path: 'front',
    component: FrontLayoutComponent,
    children: [
      {
        path: 'tours',
        loadComponent: () =>
          import(
            './presentation/frontPage/frontToursPage/frontToursPage.component'
          ),
        data: {
          icon: 'fa-solid fa-spell-check',
          title: 'Ortografía',
          description: 'Corregir ortografía',
        }, 
      }, {
        path: 'reservations',
        loadComponent: () =>
          import(
            './presentation/frontPage/frontReservationPage/frontReservationPage.component'
          ),
        data: {
          icon: 'fa-solid fa-spell-check',
          title: 'Ortografía',
          description: 'Corregir ortografía',
        }, 
      },   
        {
          path: '**',
          redirectTo: 'tours',
          pathMatch: 'full',
        }]
      }, {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      }

];


// {
//   path: 'text-to-audio',
//   loadComponent: () =>
//     import(
//       './presentation/pages/textToAudioPage/textToAudioPage.component'
//     ),
//   data: {
//     icon: 'fa-solid fa-podcast',
//     title: 'Texto a audio',
//     description: 'Convertir texto a audio',
//   },
// },
// {
//   path: 'audio-to-text',
//   loadComponent: () =>
//     import(
//       './presentation/pages/audioToTextPage/audioToTextPage.component'
//     ),
//   data: {
//     icon: 'fa-solid fa-comment-dots',
//     title: 'Audio a texto',
//     description: 'Convertir audio a texto',
//   },
// },
// {
//   path: 'image-generation',
//   loadComponent: () =>
//     import(
//       './presentation/pages/imageGenerationPage/imageGenerationPage.component'
//     ),
//   data: {
//     icon: 'fa-solid fa-image',
//     title: 'Imágenes',
//     description: 'Generar imágenes',
//   },
// },
// {
//   path: 'image-tunning',
//   loadComponent: () =>
//     import(
//       './presentation/pages/imageTunningPage/imageTunningPage.component'
//     ),
//   data: {
//     icon: 'fa-solid fa-wand-magic',
//     title: 'Editar imagen',
//     description: 'Generación continua',
//   },
// },

// {
//   path: 'tours',
//   loadComponent: () =>
//     import('./presentation/pages/ToursPage/toursPage.component'),
//   data: {
//     icon: 'fa-solid fa-user',
//     title: 'Asistente',
//     description: 'Información del asistente',
//   },
// },