import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type NavItem = {
  label: string;
  section: string;
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  menuOpen = false;

  navItems: NavItem[] = [
    { label: 'Home', section: 'hero' },
    { label: 'About', section: 'about' },
    { label: 'Gallery', section: 'gallery' },
    { label: 'News', section: 'news' },
    { label: 'Achievements', section: 'achievements' },
    { label: 'Events', section: 'events' },
    { label: 'Contact', section: 'contact' },
  ];

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollTo(section: string) {
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    this.menuOpen = false;
  }
}
