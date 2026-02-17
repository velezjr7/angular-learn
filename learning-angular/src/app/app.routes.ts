import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./compra/historial-compra/historial-compra').then((m) => m.HistorialCompra),
  },
  {
    path: 'listado',
    loadComponent: () => import('./compra/listado/listado').then((m) => m.Listado),
  },
  {
    path: 'nueva-compra',
    loadComponent: () => import('./compra/nueva-compra/nueva-compra').then((m) => m.NuevaCompra),
  },
  {
    path: 'pipes',
    loadComponent: () => import('./pipes/pipes').then((m) => m.Pipes),
  },
  {
    path: 'estructural',
    loadComponent: () => import('./estructural/estructural').then((m) => m.Estructural),
  },
  {
    path: 'atributo',
    loadComponent: () => import('./atributo/atributo').then((m) => m.Atributo),
  },
];
