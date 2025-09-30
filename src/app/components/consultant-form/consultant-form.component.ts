import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultantService } from '../../services/consultant.service';

@Component({
  selector: 'app-consultant-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './consultant-form.component.html', // Referência ao HTML
  styleUrls: ['./consultant-form.component.css'] // Referência ao CSS
})
export class ConsultantFormComponent implements OnInit {
  consultantForm: FormGroup;
  isEditMode = false;
  consultantId?: string;

  constructor(
    private fb: FormBuilder,
    private consultantService: ConsultantService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.consultantForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      specialization: ['', Validators.required],
      bio: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  ngOnInit(): void {
    this.consultantId = this.route.snapshot.paramMap.get('id') || undefined;
    
    if (this.consultantId) {
      this.isEditMode = true;
      const consultant = this.consultantService.getConsultantById(this.consultantId);
      
      if (consultant) {
        this.consultantForm.patchValue({
          name: consultant.name,
          specialization: consultant.specialization,
          bio: consultant.bio
        });
      } else {
        // Redireciona se o ID for inválido
        this.router.navigate(['/consultants']);
      }
    }
  }

  onSubmit(): void {
    if (this.consultantForm.valid) {
      const consultantData = this.consultantForm.value;
      
      if (this.isEditMode && this.consultantId) {
        this.consultantService.updateConsultant(this.consultantId, consultantData);
      } else {
        this.consultantService.addConsultant(consultantData);
      }
      
      // Volta para a lista de consultores
      this.router.navigate(['/consultants']);
    }
  }

  onCancel(): void {
    this.router.navigate(['/consultants']);
  }
}
