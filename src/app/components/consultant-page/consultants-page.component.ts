import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ConsultantService } from '../../services/consultant.service';
import { AuthService } from '../../services/auth.service';
import { ConsultantFilterComponent } from '../consultant-filter/consultant-filter.component';
import { ConsultantListComponent } from '../consultant-list/consultant-list.component';

@Component({
  selector: 'app-consultants-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink, 
    ConsultantFilterComponent,
    ConsultantListComponent
  ],
  templateUrl: './consultants-page.component.html', // Referência ao arquivo HTML
  styleUrls: ['./consultants-page.component.css'] // Referência ao arquivo CSS
})
export class ConsultantsPageComponent {
  selectedFilter = signal('Todos');

  constructor(
    private consultantService: ConsultantService,
    public authService: AuthService
  ) {}

  specializations = computed(() => this.consultantService.getSpecializations());
  isAdmin = computed(() => this.authService.isAdmin());
  
  filteredConsultants = computed(() => 
    this.consultantService.getFilteredConsultants(this.selectedFilter())
  );

  onFilterChange(filter: string): void {
    this.selectedFilter.set(filter);
  }

  onEdit(id: string): void {
    // Navegação feita pelo componente filho
  }

  onDelete(id: string): void {
    // IMPORTANTE: Foi removido o `confirm()` para usar um modal/dialog
    // se este código estivesse rodando em um ambiente restrito como o Canvas.
    // No seu ambiente local, o `confirm` ainda funciona, mas o ideal seria usar
    // um modal personalizado. Vou manter o `confirm` pois faz parte do seu código original.
    if (confirm('Tem certeza que deseja excluir este consultor?')) {
      this.consultantService.removeConsultant(id);
    }
  }
}
