import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'tabs/reservations',
    pathMatch: 'full'
  },

  {
    path: 'login',
    loadComponent: () => import('./login/login.page')
      .then(m => m.LoginPage)
  },

  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'create-reservation',
    loadComponent: () => import('./create-reservation/create-reservation.page').then( m => m.CreateReservationPage)
  }

];