import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../hero/hero.component';

type Topper = {
  rank: number;
  name: string;
  percentage: string;
};

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  highlights = [
    {
      image: 'gallery1.jpg',
      title: 'Focused classrooms',
      text: 'Strong basics, regular practice and teacher support for every learner.'
    },
    {
      image: 'gallery3.jpg',
      title: 'Activities and creativity',
      text: 'Events, projects and cultural opportunities that build confidence.'
    },
    {
      image: 'gallery4.jpg',
      title: 'Sports and discipline',
      text: 'Teamwork, fitness and leadership through active school life.'
    },
  ];

  locations = [
    {
      title: 'School Office',
      address: 'X-41A, Old RP Nagar, 60 Feet Road, M L Camp, Mumbai - 400019'
    },
    {
      title: 'Primary School',
      address: 'Gandhi Memorial Primary School, Mumbai'
    },
    {
      title: 'High School',
      address: 'Gandhi Memorial English High School, Mumbai'
    },
  ];

  tenthToppers: Topper[] = [
    { rank: 1, name: 'Aarav Sharma', percentage: '96.80%' },
    { rank: 2, name: 'Sara Khan', percentage: '95.60%' },
    { rank: 3, name: 'Rohan Patil', percentage: '94.90%' },
    { rank: 4, name: 'Priya Nair', percentage: '93.80%' },
    { rank: 5, name: 'Kabir Mehta', percentage: '92.70%' },
    { rank: 6, name: 'Anaya Gupta', percentage: '91.90%' },
    { rank: 7, name: 'Ishaan Desai', percentage: '91.20%' },
    { rank: 8, name: 'Meera Shah', percentage: '90.80%' },
    { rank: 9, name: 'Vivaan Rao', percentage: '90.10%' },
    { rank: 10, name: 'Diya Singh', percentage: '89.70%' },
  ];

  twelfthToppers: Topper[] = [
    { rank: 1, name: 'Neha Joshi', percentage: '97.20%' },
    { rank: 2, name: 'Aditya Menon', percentage: '96.40%' },
    { rank: 3, name: 'Fatima Shaikh', percentage: '95.50%' },
    { rank: 4, name: 'Karan Kapoor', percentage: '94.30%' },
    { rank: 5, name: 'Riya Iyer', percentage: '93.60%' },
    { rank: 6, name: 'Arjun Pillai', percentage: '92.90%' },
    { rank: 7, name: 'Sana Ansari', percentage: '92.10%' },
    { rank: 8, name: 'Dev Malhotra', percentage: '91.40%' },
    { rank: 9, name: 'Tara Bose', percentage: '90.80%' },
    { rank: 10, name: 'Yash Chavan', percentage: '90.20%' },
  ];
}
