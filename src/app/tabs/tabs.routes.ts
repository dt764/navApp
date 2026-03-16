import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./tabs.page').then(m => m.TabsPage),

    children: [

      {
        path: 'clients',
        children: [

          {
            path: '',
            loadComponent: () =>
              import('../clients/clients.page').then(m => m.ClientsPage)
          },

          {
            path: ':id',
            loadComponent: () =>
              import('../client-detail/client-detail.page')
                .then(m => m.ClientDetailPage)
          }

        ]
      },

      {
        path: 'reservations',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('../reservations/reservations.page')
                .then(m => m.ReservationsPage)
          },
          {
            path: 'create',
            loadComponent: () =>
              import('../create-reservation/create-reservation.page')
                .then(m => m.CreateReservationPage)
          }
        ]
      },

      {
        path: 'products',
        loadComponent: () =>
          import('../products/products.page')
            .then(m => m.ProductsPage)
      },

      {
        path: '',
        redirectTo: 'reservations',
        pathMatch: 'full'
      }

    ]
  }
];