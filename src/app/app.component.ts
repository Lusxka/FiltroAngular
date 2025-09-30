import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent
  ],
  template: `
    @if (isAuthenticated()) {
      <app-header></app-header>
    }
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    :host {
      display: block;
      min-height: 100vh;
    }
    
    main {
      min-height: calc(100vh - 64px);
    }
  `]
})
export class AppComponent {
  isAuthenticated = computed(() => this.authService.isAuthenticated());

  constructor(private authService: AuthService) {}
}
