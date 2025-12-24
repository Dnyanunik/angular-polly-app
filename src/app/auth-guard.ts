// guards/auth.guard.ts
import { inject, PLATFORM_ID } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  if (isPlatformBrowser(platformId)) {
    const user = localStorage.getItem('user');

    if (user) {
      // Permission granted: The user is logged in
      return true;
    } else {
      // Permission denied: Redirect to login
      alert('Login first to access this page.');
      router.navigate(['/login']);
      return false;
    }
  }
  return true; // Fallback for SSR
};
