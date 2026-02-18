import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const id = localStorage.getItem('id');
  return id === '1234';
};
