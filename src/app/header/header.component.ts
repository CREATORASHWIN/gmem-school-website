import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule], // enables *ngIf, *ngFor
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  menuOpen = false;

  constructor(private viewportScroller: ViewportScroller) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Scroll to any section by ID
  scrollTo(section: string) {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    this.menuOpen = false; // close mobile menu
  }
}