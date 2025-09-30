import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Consultant } from '../../interfaces/consultant.interface'; // Assume que esta interface existe

@Component({
  selector: 'app-consultant-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './consultant-card.component.html', // Referência ao HTML
  styleUrls: ['./consultant-card.component.css'] // Referência ao CSS
})
export class ConsultantCardComponent {
  // Recebe os dados do consultor
  @Input() consultant!: Consultant;
  // Flag para habilitar os botões de Admin (Editar/Excluir)
  @Input() isAdmin = false;
  
  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  /**
   * Gera as iniciais do nome do consultor para o avatar.
   */
  getInitials(name: string): string {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .substring(0, 2)
      .toUpperCase();
  }

  /**
   * Retorna classes CSS dinâmicas baseadas na especialização.
   */
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

  /**
   * Emite o evento de exclusão com o ID do consultor.
   */
  onDelete(): void {
    this.delete.emit(this.consultant.id);
  }
}
