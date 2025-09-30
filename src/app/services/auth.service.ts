// src/app/services/auth.service.ts
import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  email: string;
  role: 'admin' | 'user';
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser = signal<User | null>(null);
  
  // Usuários mocados
  private readonly users = [
    { email: 'admin@empresa.com', password: 'admin123', role: 'admin' as const, name: 'Administrador' },
    { email: 'user@empresa.com', password: 'user123', role: 'user' as const, name: 'Usuário Comum' }
  ];

  // Computed signals
  isAuthenticated = computed(() => this.currentUser() !== null);
  isAdmin = computed(() => this.currentUser()?.role === 'admin');
  user = computed(() => this.currentUser());

  constructor(private router: Router) {
    // Verificar se há usuário no sessionStorage
    this.loadUserFromStorage();
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    
    if (user) {
      const authUser: User = {
        email: user.email,
        role: user.role,
        name: user.name
      };
      this.currentUser.set(authUser);
      sessionStorage.setItem('currentUser', JSON.stringify(authUser));
      this.router.navigate(['/consultants']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser.set(null);
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  private loadUserFromStorage(): void {
    const userJson = sessionStorage.getItem('currentUser');
    if (userJson) {
      try {
        const user = JSON.parse(userJson) as User;
        this.currentUser.set(user);
      } catch (e) {
        sessionStorage.removeItem('currentUser');
      }
    }
  }
}