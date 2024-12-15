import { provideRouter, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApplicationConfig } from '@angular/core';

// Import components
import { RegistrationComponent } from './components/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Define routes
export const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
];

// ApplicationConfig setup
export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(RouterModule, ReactiveFormsModule), // Import RouterModule and ReactiveFormsModule
    provideRouter(routes),  // Provide router with the defined routes
  ]
};
