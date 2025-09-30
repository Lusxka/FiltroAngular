import { Routes } from '@angular/router';
import { authGuard, adminGuard } from './components/guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { ConsultantsPageComponent } from './components/consultant-page/consultants-page.component';
import { ConsultantFormComponent } from './components/consultant-form/consultant-form.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'consultants',
    component: ConsultantsPageComponent,
    canActivate: [authGuard]
  },
  {
    path: 'consultants/new',
    component: ConsultantFormComponent,
    canActivate: [authGuard, adminGuard]
  },
  {
    path: 'consultants/edit/:id',
    component: ConsultantFormComponent,
    canActivate: [authGuard, adminGuard]
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: '/login'
  }
];