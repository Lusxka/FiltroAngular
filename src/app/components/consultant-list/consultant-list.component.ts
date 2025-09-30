import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Consultant } from '../../interfaces/consultant.interface';
import { ConsultantCardComponent } from '../consultant-card/consultant-card.component';

@Component({
  selector: 'app-consultant-list',
  standalone: true,
  imports: [CommonModule, ConsultantCardComponent],
  templateUrl: './consultant-list.component.html',
  styleUrl: './consultant-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultantListComponent {
  @Input() consultants: Consultant[] = [];
  @Input() isAdmin = false;
  @Output() edit = new EventEmitter<string>();
  @Output() delete = new EventEmitter<string>();

  onEdit(id: string): void {
    this.edit.emit(id);
  }

  onDelete(id: string): void {
    this.delete.emit(id);
  }
}