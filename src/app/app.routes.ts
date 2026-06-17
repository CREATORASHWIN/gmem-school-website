import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NewsComponent } from './components/news/news.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { EventsComponent } from './components/events/events.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Gandhi Memorial English High School' },
  { path: 'about', component: AboutComponent, title: 'About | Gandhi Memorial English High School' },
  { path: 'gallery', component: GalleryComponent, title: 'Gallery | Gandhi Memorial English High School' },
  { path: 'news', component: NewsComponent, title: 'News | Gandhi Memorial English High School' },
  { path: 'achievements', component: AchievementsComponent, title: 'Achievements | Gandhi Memorial English High School' },
  { path: 'events', component: EventsComponent, title: 'Events | Gandhi Memorial English High School' },
  { path: 'contact', component: ContactComponent, title: 'Contact | Gandhi Memorial English High School' },
  { path: '**', redirectTo: '' },
];
