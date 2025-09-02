import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultant-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultant-filter.component.html',
  styleUrl: './consultant-filter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultantFilterComponent {
  @Input() specializations: string[] = [];
  @Input() selectedFilter: string = 'Todos';
  @Output() filterChange = new EventEmitter<string>();

  onFilterChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.filterChange.emit(target.value);
  }
}