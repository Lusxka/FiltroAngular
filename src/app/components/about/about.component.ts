import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html', // Referencia o arquivo HTML
  styleUrls: ['./about.component.css'] // Referencia o arquivo CSS
})
export class AboutComponent {}
