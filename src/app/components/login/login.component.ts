import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service'; // Assume que este serviço existe

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html', // Referência ao HTML
  styleUrls: ['./login.component.css'] // Referência ao CSS
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage = signal('');

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      const success = this.authService.login(email, password);
      
      if (!success) {
        this.errorMessage.set('E-mail ou senha inválidos');
        this.loginForm.patchValue({ password: '' });
      } else {
        // Sucesso no login, o AuthService deve lidar com a navegação
      }
    }
  }
}
