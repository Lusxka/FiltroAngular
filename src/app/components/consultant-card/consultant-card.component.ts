import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Consultant } from '../../interfaces/consultant.interface';

@Component({
  selector: 'app-consultant-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './consultant-card.component.html',
  styleUrl: './consultant-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConsultantCardComponent {
  @Input({ required: true }) consultant!: Consultant;
}