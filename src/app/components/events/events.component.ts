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
      title: 'Sports Day',
      date: 'Annual event',
      description: 'Track races, team games and house activities that build fitness and sportsmanship.'
    },
    {
      title: 'Science Exhibition',
      date: 'Academic activity',
      description: 'Students explain models, experiments and creative ideas to teachers and parents.'
    },
    {
      title: 'Cultural Fest',
      date: 'School celebration',
      description: 'Music, dance, drama and public speaking opportunities for confident expression.'
    }
  ];
}
