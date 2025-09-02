import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
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
}