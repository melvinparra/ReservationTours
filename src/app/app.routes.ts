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
          icon: 'fa-solid fa-diamond',
          title: 'Customer',
          description: 'Customer Creation',
        },
      },
      {
        path: 'guides',
        loadComponent: () =>
          import('./presentation/pages/guidesPage/guidesPage.component'),
        data: {
          icon: 'fa-solid fa-american-sign-language-interpreting',
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
          icon: 'fa-solid fa-address-book',
          title: 'Reservation',
          description: 'check reservations',
        },
      },
      {
        path: 'tours',
        loadComponent: () =>
          import('./presentation/pages/tours/toursPage/toursPage.component'),
        data: {
          icon: 'fa-solid fa-cubes',
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
