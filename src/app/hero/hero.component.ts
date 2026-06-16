import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="hero" class="scroll-mt-24 bg-slate-100 pt-20">
      <img
        src="/hero-background.png"
        alt="Gandhi Memorial English High School campus"
        class="block w-full"
      />
    </section>

    <section class="bg-white py-6 shadow-sm">
      <div class="mx-auto flex max-w-7xl flex-col gap-5 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p class="text-sm font-black uppercase tracking-wider text-blue-700">Admissions open for the new academic year</p>
          <p class="mt-2 max-w-2xl text-lg font-semibold leading-8 text-slate-700">
            A disciplined, caring and future-ready school community for strong academics, confidence, values and curiosity.
          </p>
        </div>
        <div class="flex flex-col gap-3 sm:flex-row">
          <a href="#contact" class="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-3 text-sm font-black text-white shadow-lg shadow-blue-900/20 transition hover:-translate-y-0.5 hover:bg-blue-700">
            Enquire Now
          </a>
          <a href="#about" class="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-800 transition hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700">
            Explore School
          </a>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {}
