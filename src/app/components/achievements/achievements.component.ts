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
      title: 'Academic excellence',
      description: 'Structured teaching and regular evaluation help students build strong fundamentals.',
      date: 'Every term'
    },
    {
      title: 'Science and innovation',
      description: 'Practical projects encourage curiosity, experimentation and confident presentation.',
      date: 'Activity based'
    },
    {
      title: 'Sports and culture',
      description: 'Students participate in competitions, performances and teamwork-driven events.',
      date: 'Throughout the year'
    }
  ];
}
