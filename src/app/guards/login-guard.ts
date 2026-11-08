import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth/auth-service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (!authService.isUserLoggedIn()) {
    return true;
  }

  return router.createUrlTree(['/dashboard']);
};
