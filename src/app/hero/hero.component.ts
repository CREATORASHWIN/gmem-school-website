import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="relative bg-blue-50">
      <!-- Background Image -->
      <div class="absolute inset-0">
        <img 
          src="school-building.jpg" 
          alt="Gandhi Memorial English High School" 
          class="w-full h-full object-cover brightness-75"
        />
      </div>

      <!-- Overlay Content -->
      <div class="relative z-10 text-center py-32 px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Gandhi Memorial English High School
        </h1>
        <p class="text-lg sm:text-xl text-gray-100 mb-6">
          Inspiring Excellence Through Quality Education
        </p>
        <a 
          href="#admissions" 
          class="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
        >
          Admissions 2025 – Apply Now
        </a>
      </div>
    </section>
  `,
  styles: []
})
export class HeroComponent {}