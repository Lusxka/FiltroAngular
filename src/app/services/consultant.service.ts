import { Injectable, signal, computed } from '@angular/core';
import { Consultant } from '../interfaces/consultant.interface';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {
  
  private consultants = signal<Consultant[]>([
    { 
      id: '1',
      name: 'Lucas Ryan', 
      specialization: 'TI', 
      bio: 'Especialista em desenvolvimento web e mobile, com foco em frameworks front-end como Angular e React.' 
    },
    { 
      id: '2',
      name: 'João Santos', 
      specialization: 'Marketing', 
      bio: 'Consultor de marketing digital com vasta experiência em SEO, SEM e estratégias de conteúdo.' 
    },
    { 
      id: '3',
      name: 'Carla Oliveira', 
      specialization: 'Finanças', 
      bio: 'Analista financeira certificada, com expertise em planejamento estratégico e gestão de riscos.' 
    },
    { 
      id: '4',
      name: 'Pedro Souza', 
      specialization: 'TI', 
      bio: 'Engenheiro de software especializado em backend, utilizando Java e Python para soluções escaláveis.' 
    },
    { 
      id: '5',
      name: 'Mariana Lima', 
      specialization: 'Marketing', 
      bio: 'Estrategista de conteúdo e mídias sociais, com foco em engajamento e branding.' 
    },
    { 
      id: '6',
      name: 'Fernando Costa', 
      specialization: 'Finanças', 
      bio: 'Consultor de investimentos, auxiliando clientes na construção de portfólios robustos e diversificados.' 
    }
  ]);

  private specializations = computed(() => {
    const allSpecializations = this.consultants().map(c => c.specialization);
    return ['Todos', ...new Set(allSpecializations)];
  });

  getAllConsultants(): Consultant[] {
    return this.consultants();
  }

  getConsultantById(id: string): Consultant | undefined {
    return this.consultants().find(c => c.id === id);
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

  addConsultant(consultant: Omit<Consultant, 'id'>): void {
    const newConsultant: Consultant = {
      ...consultant,
      id: Date.now().toString()
    };
    this.consultants.update(current => [...current, newConsultant]);
  }

  updateConsultant(id: string, consultant: Omit<Consultant, 'id'>): void {
    this.consultants.update(current => 
      current.map(c => c.id === id ? { ...consultant, id } : c)
    );
  }

  removeConsultant(id: string): void {
    this.consultants.update(current => current.filter(c => c.id !== id));
  }
}