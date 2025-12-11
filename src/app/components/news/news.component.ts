import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Required for *ngFor

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule], // <-- Add this
  templateUrl: './news.component.html',
  // No styleUrls needed
})
export class NewsComponent {
  newsItems = [
    {
      title: 'Annual Sports Day 2025',
      date: '10 Dec 2025',
      description: 'The school celebrated its Annual Sports Day with enthusiasm and participation from all students.',
    },
    {
      title: 'Science Exhibition',
      date: '5 Nov 2025',
      description: 'Students presented innovative science projects at the annual exhibition.',
    },
    {
      title: 'Cultural Fest Highlights',
      date: '20 Oct 2025',
      description: 'The Cultural Fest showcased student talent in music, dance, and drama.',
    }
  ];
}