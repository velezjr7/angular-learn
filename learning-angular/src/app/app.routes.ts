import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'compras',
    children: [
      {
        path: 'historial',
        loadComponent: () =>
          import('./compra/historial-compra/historial-compra').then((m) => m.HistorialCompra),
      },
      {
        path: 'nueva-compra',
        loadComponent: () =>
          import('./compra/nueva-compra/nueva-compra').then((m) => m.NuevaCompra),
      },
    ],
  },
  {
    path: 'directivas',
    children: [
      {
        path: 'estructural',
        loadComponent: () => import('./estructural/estructural').then((m) => m.Estructural),
      },
      {
        path: 'atributo',
        loadComponent: () => import('./atributo/atributo').then((m) => m.Atributo),
      },
    ],
  },
  {
    path: 'listado',
    loadComponent: () => import('./compra/listado/listado').then((m) => m.Listado),
  },
  {
    path: 'pipes',
    loadComponent: () => import('./pipes/pipes').then((m) => m.Pipes),
  },
];
