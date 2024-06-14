import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2>Welcome to {{ title }}!</h2>
    <router-outlet />
  `,
  styles: [],
})
export class AppComponent {
  title = 'lab-remote-one';
}
