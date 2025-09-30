import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ConsultantService } from '../../services/consultant.service';

@Component({
  selector: 'app-consultant-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div class="max-w-2xl mx-auto">
        <div class="bg-white rounded-lg shadow-xl p-6 sm:p-8">
          <div class="mb-6">
            <h1 class="text-3xl font-bold text-gray-900">
              {{ isEditMode ? 'Editar Consultor' : 'Novo Consultor' }}
            </h1>
            <p class="text-gray-600 mt-2">
              {{ isEditMode ? 'Atualize as informações do consultor' : 'Preencha os dados do novo consultor' }}
            </p>
          </div>

          <form [formGroup]="consultantForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo *
              </label>
              <input
                id="name"
                type="text"
                formControlName="name"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                placeholder="Ex: João Silva"
              />
              @if (consultantForm.get('name')?.invalid && consultantForm.get('name')?.touched) {
                <p class="text-red-500 text-sm mt-1">Nome é obrigatório (mínimo 3 caracteres)</p>
              }
            </div>

            <div>
              <label for="specialization" class="block text-sm font-medium text-gray-700 mb-2">
                Especialização *
              </label>
              <select
                id="specialization"
                formControlName="specialization"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              >
                <option value="">Selecione uma especialização</option>
                <option value="TI">TI</option>
                <option value="Marketing">Marketing</option>
                <option value="Finanças">Finanças</option>
                <option value="Recursos Humanos">Recursos Humanos</option>
                <option value="Vendas">Vendas</option>
              </select>
              @if (consultantForm.get('specialization')?.invalid && consultantForm.get('specialization')?.touched) {
                <p class="text-red-500 text-sm mt-1">Especialização é obrigatória</p>
              }
            </div>

            <div>
              <label for="bio" class="block text-sm font-medium text-gray-700 mb-2">
                Biografia *
              </label>
              <textarea
                id="bio"
                formControlName="bio"
                rows="5"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                placeholder="Descreva a experiência e habilidades do consultor..."
              ></textarea>
              @if (consultantForm.get('bio')?.invalid && consultantForm.get('bio')?.touched) {
                <p class="text-red-500 text-sm mt-1">Biografia é obrigatória (mínimo 20 caracteres)</p>
              }
            </div>

            <div class="flex gap-4 pt-4">
              <button
                type="submit"
                [disabled]="consultantForm.invalid"
                class="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
              >
                {{ isEditMode ? 'Salvar Alterações' : 'Cadastrar Consultor' }}
              </button>
              <button
                type="button"
                (click)="onCancel()"
                class="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Cancelar
              </button>
            </div>
          </form>
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
      
      this.router.navigate(['/consultants']);
    }
  }

  onCancel(): void {
    this.router.navigate(['/consultants']);
  }
}