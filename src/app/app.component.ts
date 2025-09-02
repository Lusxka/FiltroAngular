import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultantService } from './services/consultant.service';
import { ConsultantFilterComponent } from './components/consultant-filter/consultant-filter.component';
import { ConsultantListComponent } from './components/consultant-list/consultant-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ConsultantFilterComponent,
    ConsultantListComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  selectedFilter = signal('Todos');

  constructor(private consultantService: ConsultantService) {}

  // Computed para obter as especializações disponíveis
  specializations = computed(() => this.consultantService.getSpecializations());

  // Computed para obter consultores filtrados
  filteredConsultants = computed(() => 
    this.consultantService.getFilteredConsultants(this.selectedFilter())
  );

  onFilterChange(filter: string) {
    this.selectedFilter.set(filter);
  }
}