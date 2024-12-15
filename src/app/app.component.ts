import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule here

@Component({
  selector: 'app-root',
  standalone: true,  // Standalone component
  imports: [RouterModule],  // Include RouterModule here
  template: `
    <router-outlet></router-outlet> <!-- Router placeholder for the routed views -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'user-dashboard-app';  // This line defines the 'title' property
}
