import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Consultant } from '../../interfaces/consultant.interface';

@Component({
  selector: 'app-consultant-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col">
      <div class="flex items-center mb-4">
        <div class="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
          {{ getInitials(consultant.name) }}
        </div>
        <div class="ml-4 flex-1">
          <h3 class="text-xl font-bold text-gray-900">{{ consultant.name }}</h3>
          <span class="inline-block px-3 py-1 text-xs font-semibold rounded-full mt-1"
                [ngClass]="getSpecializationClass(consultant.specialization)">
            {{ consultant.specialization }}
          </span>
        </div>
      </div>
      
      <p class="text-gray-600 text-sm flex-1 mb-4">
        {{ consultant.bio }}
      </p>

      @if (isAdmin) {
        <div class="flex gap-2 pt-4 border-t border-gray-100">
          <a
            [routerLink]="['/consultants/edit', consultant.id]"
            class="flex-1 bg-blue-100 text-blue-700 py-2 px-4 rounded-lg text-center font-medium hover:bg-blue-200 transition"
          >
            Editar
          </a>
          <button
            (click)="onDelete()"
            class="flex-1 bg-red-100 text-red-700 py-2 px-4 rounded-lg font-medium hover:bg-red-200 transition"
          >
            Excluir
          </button>
        </div>
      }
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class ConsultantCardComponent {
  @Input() consultant!: Consultant;
  @Input() isAdmin = false;
  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  }

  getSpecializationClass(specialization: string): string {
    const classes: Record<string, string> = {
      'TI': 'bg-blue-100 text-blue-800',
      'Marketing': 'bg-green-100 text-green-800',
      'Finanças': 'bg-yellow-100 text-yellow-800',
      'Recursos Humanos': 'bg-purple-100 text-purple-800',
      'Vendas': 'bg-pink-100 text-pink-800'
    };
    return classes[specialization] || 'bg-gray-100 text-gray-800';
  }

  onDelete(): void {
    this.delete.emit(this.consultant.id);
  }
}