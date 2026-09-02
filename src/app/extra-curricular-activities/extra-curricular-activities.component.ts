import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Activity {
  number: number;
  title: string;
  icon: string;
  description: string;
}

@Component({
  selector: 'app-extra-curricular-activities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './extra-curricular-activities.component.html',
  styleUrl: './extra-curricular-activities.component.css'
})
export class ExtraCurricularActivitiesComponent {

  activities: Activity[] = [
    {
      number: 1,
      title: 'Quiz Competition – General Knowledge',
      icon: '🧠',
      description:
        'Students participate in general knowledge quiz competitions that encourage curiosity, awareness and quick thinking.'
    },
    {
      number: 2,
      title: 'Hand Writing Competition',
      icon: '✍️',
      description:
        'Handwriting competitions encourage students to develop neat, clear and creative handwriting skills.'
    },
    {
      number: 3,
      title: 'Folk Dance Competition',
      icon: '💃',
      description:
        'Students showcase traditional culture and creativity through folk dance performances.'
    },
    {
      number: 4,
      title: 'Story Telling Competition',
      icon: '📖',
      description:
        'Storytelling activities help students improve imagination, communication skills and confidence.'
    },
    {
      number: 5,
      title: 'Homi Baba Science Competition',
      icon: '🔬',
      description:
        'Science competitions encourage students to explore scientific ideas, creativity and practical learning.'
    },
    {
      number: 6,
      title: 'Maharashtra Talent Search Examination',
      icon: '🏅',
      description:
        'Students are encouraged to participate in talent search examinations that help identify and develop academic potential.'
    },
    {
      number: 7,
      title: 'Rangoli Competition',
      icon: '🎨',
      description:
        'Rangoli competitions provide students with an opportunity to express creativity through traditional art.'
    },
    {
      number: 8,
      title: 'National Talent Search Examination',
      icon: '🌟',
      description:
        'Students participate in talent search opportunities that encourage academic excellence and intellectual development.'
    },
    {
      number: 9,
      title: 'Various Sports Competition',
      icon: '🏆',
      description:
        'Students participate in various sports competitions that develop teamwork, discipline and sportsmanship.'
    },
    {
      number: 10,
      title: 'Dream Festival',
      icon: '✨',
      description:
        'Dream Festival provides students with opportunities to showcase their talents, creativity and enthusiasm.'
    },
    {
      number: 11,
      title: 'Spell-Bee Competition – English',
      icon: '🔤',
      description:
        'Spell-Bee competitions help students strengthen English vocabulary, spelling and language skills.'
    },
    {
      number: 12,
      title: 'Elocation Competition – Inter-School',
      icon: '🎤',
      description:
        'Inter-school elocution competitions help students develop public speaking, expression and confidence.'
    }
  ];

}