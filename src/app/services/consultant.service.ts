import { Injectable, signal, computed } from '@angular/core';
import { Consultant } from '../interfaces/consultant.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  
  // Dados fictícios dos consultores
  private consultants = signal<Consultant[]>([
    { 
      name: 'Lucas Ryan', 
      specialization: 'TI', 
      bio: 'Especialista em desenvolvimento web e mobile, com foco em frameworks front-end como Angular e React.' 
    },
    { 
      name: 'João Santos', 
      specialization: 'Marketing', 
      bio: 'Consultor de marketing digital com vasta experiência em SEO, SEM e estratégias de conteúdo.' 
    },
    { 
      name: 'Carla Oliveira', 
      specialization: 'Finanças', 
      bio: 'Analista financeira certificada, com expertise em planejamento estratégico e gestão de riscos.' 
    },
    { 
      name: 'Pedro Souza', 
      specialization: 'TI', 
      bio: 'Engenheiro de software especializado em backend, utilizando Java e Python para soluções escaláveis.' 
    },
    { 
      name: 'Mariana Lima', 
      specialization: 'Marketing', 
      bio: 'Estrategista de conteúdo e mídias sociais, com foco em engajamento e branding.' 
    },
    { 
      name: 'Fernando Costa', 
      specialization: 'Finanças', 
      bio: 'Consultor de investimentos, auxiliando clientes na construção de portfólios robustos e diversificados.' 
    }
  ]);

  // Computed para obter as especializações únicas
  private specializations = computed(() => {
    const allSpecializations = this.consultants().map(c => c.specialization);
    return ['Todos', ...new Set(allSpecializations)];
  });

  // Métodos públicos
  getAllConsultants(): Consultant[] {
    return this.consultants();
  }

  getSpecializations(): string[] {
    return this.specializations();
  }

  getFilteredConsultants(filter: string): Consultant[] {
    if (filter === 'Todos') {
      return this.consultants();
    }
    return this.consultants().filter(c => c.specialization === filter);
  }

  // Método para adicionar novos consultores (para futuras expansões)
  addConsultant(consultant: Consultant): void {
    this.consultants.update(current => [...current, consultant]);
  }

  // Método para remover consultores (para futuras expansões)
  removeConsultant(name: string): void {
    this.consultants.update(current => current.filter(c => c.name !== name));
  }
}