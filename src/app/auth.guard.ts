import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from './firebase.config';

export const authGuard: CanActivateFn = async () => {

  const router = inject(Router);

  return new Promise<boolean>((resolve) => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {

      unsubscribe();

      if (user) {
        resolve(true);
      } else {
        router.navigate(['/admin-login']);
        resolve(false);
      }

    });

  });

};