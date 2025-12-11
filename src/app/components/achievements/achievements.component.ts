import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
})
export class AchievementsComponent {
  achievements = [
    {
      title: 'Best School Award 2024',
      description: 'Recognized as the Best School in the district for academic excellence.',
      date: 'March 2024'
    },
    {
      title: 'Science Innovation Trophy',
      description: 'Students won the state-level science innovation competition.',
      date: 'July 2024'
    },
    {
      title: 'Sports Championship',
      description: 'Our students won the inter-school sports championship.',
      date: 'December 2024'
    }
  ];
}