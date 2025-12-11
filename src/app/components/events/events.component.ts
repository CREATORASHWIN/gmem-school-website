import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
})
export class EventsComponent {
  events = [
    {
      title: 'Annual Sports Day',
      date: '10 Dec 2025',
      description: 'A day full of sports activities and competitions for all students.'
    },
    {
      title: 'Science Exhibition',
      date: '5 Nov 2025',
      description: 'Students present innovative science projects and experiments.'
    },
    {
      title: 'Cultural Fest',
      date: '20 Oct 2025',
      description: 'Music, dance, drama performances showcasing student talent.'
    }
  ];
}