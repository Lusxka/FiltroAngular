import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Mantido, pois agora será usado corretamente
import { ConsultantService } from '../../services/consultant.service';
import { AuthService } from '../../services/auth.service';
import { ConsultantFilterComponent } from '../consultant-filter/consultant-filter.component';
import { ConsultantListComponent } from '../consultant-list/consultant-list.component';

@Component({
  selector: 'app-consultants-page',
  standalone: true,
  imports: [
    CommonModule,
    // Os warnings NG8113 sobre Filter e List sumiram porque você os estava
    // usando corretamente no template. A única coisa que faltava era o uso
    // correto do RouterLink, que agora foi corrigido no template abaixo.
    RouterLink, 
    ConsultantFilterComponent,
    ConsultantListComponent
  ],
  template: `
    <div class="bg-gray-100 min-h-screen p-4 sm:p-6 lg:p-8">
      <div class="max-w-6xl mx-auto">
        <div class="bg-white rounded-lg shadow-xl p-6 sm:p-8">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 class="text-4xl font-extrabold text-gray-900 mb-2">Consultores da Empresa</h1>
              <p class="text-gray-600">
                Conheça nossa equipe de especialistas e encontre o profissional ideal para seu projeto.
              </p>
            </div>
            
            @if (isAdmin()) {
              <a 
                routerLink="/consultants/new"
                class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition whitespace-nowrap"
              >
                + Novo Consultor
              </a>
            }
          </div>

          <app-consultant-filter
            [specializations]="specializations()"
            [selectedFilter]="selectedFilter()"
            (filterChange)="onFilterChange($event)">
          </app-consultant-filter>

          <app-consultant-list
            [consultants]="filteredConsultants()"
            [isAdmin]="isAdmin()"
            (edit)="onEdit($event)"
            (delete)="onDelete($event)">
          </app-consultant-list>
        </div>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
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
    if (confirm('Tem certeza que deseja excluir este consultor?')) {
      this.consultantService.removeConsultant(id);
    }
  }
}