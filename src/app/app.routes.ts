import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';

import { NewsComponent } from './components/news/news.component';
import { AchievementsComponent } from './components/achievements/achievements.component';
import { EventsComponent } from './components/events/events.component';

import { ContactComponent } from './contact/contact.component';
import { SchoolActivitiesComponent } from './school-activities/school-activities.component';
import { AnnualReportComponent } from './annual-report/annual-report.component';
import { OurStaffComponent } from './our-staff/our-staff.component';
import { SchoolInformationComponent } from './school-information/school-information.component';
import { AcademicExcellenceComponent } from './academic-excellence/academic-excellence.component';
import { ExtraCurricularActivitiesComponent } from './extra-curricular-activities/extra-curricular-activities.component';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminNewsComponent } from './admin-news/admin-news.component';

import { authGuard } from './auth.guard';


export const routes: Routes = [

  // ==========================================
  // PUBLIC WEBSITE
  // ==========================================

  {
    path: '',
    component: HomeComponent,
    title: 'Gandhi Memorial English High School'
  },

  {
    path: 'about',
    component: AboutComponent,
    title: 'About Us | Gandhi Memorial English High School'
  },

  {
    path: 'gallery',
    component: GalleryComponent,
    title: 'Gallery | Gandhi Memorial English High School'
  },

  {
    path: 'news',
    component: NewsComponent,
    title: 'News | Gandhi Memorial English High School'
  },

  {
    path: 'achievements',
    component: AchievementsComponent,
    title: 'Achievements | Gandhi Memorial English High School'
  },

  {
    path: 'events',
    component: EventsComponent,
    title: 'Events | Gandhi Memorial English High School'
  },

  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact | Gandhi Memorial English High School'
  },

  {
    path: 'school-activities',
    component: SchoolActivitiesComponent,
    title: 'School Activities | Gandhi Memorial English High School'
  },

  {
    path: 'annual-report',
    component: AnnualReportComponent,
    title: 'Annual Report | Gandhi Memorial English High School'
  },

  {
    path: 'our-staff',
    component: OurStaffComponent,
    title: 'Our Staff | Gandhi Memorial English High School'
  },

  {
    path: 'school-information',
    component: SchoolInformationComponent,
    title: 'School Information | Gandhi Memorial English High School'
  },

  {
    path: 'academic-excellence',
    component: AcademicExcellenceComponent,
    title: 'Academic Excellence | Gandhi Memorial English High School'
  },

  {
    path: 'extra-curricular-activities',
    component: ExtraCurricularActivitiesComponent,
    title: 'Extra Curricular Activities | Gandhi Memorial English High School'
  },


  // ==========================================
  // ADMIN LOGIN
  // ==========================================

  {
    path: 'admin-login',
    component: AdminLoginComponent,
    title: 'Admin Login | Gandhi Memorial English High School'
  },


  // ==========================================
  // ADMIN DASHBOARD
  // ==========================================

  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [authGuard],
    title: 'Admin Dashboard | Gandhi Memorial English High School'
  },


  // ==========================================
  // ADMIN NEWS MANAGEMENT
  // ==========================================

  {
    path: 'admin-news',
    component: AdminNewsComponent,
    canActivate: [authGuard],
    title: 'News Management | Gandhi Memorial English High School'
  },


  // ==========================================
  // UNKNOWN URL
  // ==========================================

  {
    path: '**',
    redirectTo: ''
  }

];