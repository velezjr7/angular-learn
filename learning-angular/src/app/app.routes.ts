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
];
