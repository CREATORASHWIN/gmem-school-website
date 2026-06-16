import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
})
export class NewsComponent {
  newsItems = [
    {
      title: 'Admissions enquiry desk open',
      date: 'Academic year 2026',
      description: 'Parents can contact the office for admission guidance, campus information and required documents.',
    },
    {
      title: 'Annual sports day preparation',
      date: 'Coming soon',
      description: 'Students are preparing for track events, team games and house-wise competitions.',
    },
    {
      title: 'Science and creativity showcase',
      date: 'School activity update',
      description: 'Learners will present models, experiments and practical ideas through hands-on projects.',
    }
  ];
}
