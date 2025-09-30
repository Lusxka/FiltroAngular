import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../services/auth.service'; // Assume que este serviço existe

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html', // Referência ao HTML
  styleUrls: ['./header.component.css'] // Referência ao CSS
})
export class HeaderComponent {
  // Obtém as informações do usuário logado (nome, função)
  user = computed(() => this.authService.user());

  constructor(private authService: AuthService) {}

  /**
   * Encerra a sessão do usuário.
   */
  onLogout(): void {
    this.authService.logout();
  }
}
