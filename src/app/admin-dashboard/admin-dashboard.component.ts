import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { signOut } from 'firebase/auth';

import { auth } from '../firebase.config';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {

  adminEmail = auth.currentUser?.email || 'Super Admin';

  constructor(private router: Router) {}


  // ==========================================
  // OPEN NEWS MANAGEMENT
  // ==========================================

  openNews(): void {
    this.router.navigate(['/admin-news']);
  }


  // ==========================================
  // LOGOUT
  // ==========================================

  async logout(): Promise<void> {

    try {

      await signOut(auth);

      await this.router.navigate(['/admin-login']);

    } catch (error) {

      console.error('Logout error:', error);

    }

  }

}