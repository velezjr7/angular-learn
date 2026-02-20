import { Routes } from '@angular/router';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home').then((m) => m.Home),
  },
  {
    path: 'formularios',
    loadComponent: () => import('./formularios/formularios').then((m) => m.Formularios),
  },
  {
    path: 'compras',
    canActivate: [authGuard],
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
      {
        path: 'listado',
        loadComponent: () => import('./compra/listado/listado').then((m) => m.Listado),
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
    path: 'ventas',
    canActivate: [authGuard],
    children: [
      {
        path: 'historial',
        loadComponent: () =>
          import('./venta/historial-venta/historial-venta').then((m) => m.HistorialVenta),
      },
      {
        path: 'nueva-venta',
        loadComponent: () => import('./venta/nueva-venta/nueva-venta').then((m) => m.NuevaVenta),
      },
      {
        path: 'listado',
        loadComponent: () => import('./venta/listado/listado').then((m) => m.Listado),
      },
    ],
  },
  {
    path: 'pipes',
    loadComponent: () => import('./pipes/pipes').then((m) => m.Pipes),
  },
];
