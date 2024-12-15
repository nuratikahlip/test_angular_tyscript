import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Ensure the path is correct
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'; // Import your routes
import { importProvidersFrom } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule

// The ApplicationConfig with the necessary providers
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Add the router
    importProvidersFrom(ReactiveFormsModule), // Import ReactiveFormsModule
  ]
}).catch((err) => console.error(err));
