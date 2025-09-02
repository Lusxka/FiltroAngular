import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(CommonModule),
    // Adicione outros providers conforme necessário
  ]
}).catch(err => console.error(err));