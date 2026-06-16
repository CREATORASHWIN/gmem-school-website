import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images = [
    'gallery1.jpg',
    'gallery2.jpg',
    'gallery3.jpg',
    'gallery4.jpg',
    'gallery5.jpg',
    'gallery6.jpg'
  ];

  captions = [
    'Morning assembly and school spirit',
    'Classroom learning moments',
    'Creative student activities',
    'Sports and teamwork',
    'Science and discovery',
    'Celebrations and cultural programs',
  ];
}
