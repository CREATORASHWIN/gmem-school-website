import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../firebase.config';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

  email: string = '';
  password: string = '';

  errorMessage: string = '';
  loading: boolean = false;

  constructor(private router: Router) {}

  async login(): Promise<void> {

    // Clear previous error
    this.errorMessage = '';

    // Validate fields
    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter your email and password.';
      return;
    }

    this.loading = true;

    try {

      // Firebase login
      await signInWithEmailAndPassword(
        auth,
        this.email.trim(),
        this.password
      );

      console.log('Admin login successful');

      // Go to Admin Dashboard
      await this.router.navigate(['/admin-dashboard']);

    } catch (error: any) {

      console.error('Firebase Login Error:', error);

      switch (error.code) {

        case 'auth/invalid-credential':
          this.errorMessage = 'Invalid email or password.';
          break;

        case 'auth/wrong-password':
          this.errorMessage = 'Invalid email or password.';
          break;

        case 'auth/user-not-found':
          this.errorMessage = 'Invalid email or password.';
          break;

        case 'auth/invalid-email':
          this.errorMessage = 'Please enter a valid email address.';
          break;

        case 'auth/too-many-requests':
          this.errorMessage =
            'Too many failed attempts. Please try again later.';
          break;

        case 'auth/user-disabled':
          this.errorMessage =
            'This administrator account has been disabled.';
          break;

        default:
          this.errorMessage =
            'Unable to sign in. Please try again.';
          break;
      }

    } finally {

      this.loading = false;

    }
  }
}