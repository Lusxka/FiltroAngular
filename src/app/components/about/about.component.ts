import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white rounded-lg shadow-xl p-6 sm:p-8">
          <h1 class="text-4xl font-extrabold text-gray-900 mb-6">Sobre o Sistema</h1>
          
          <div class="space-y-6 text-gray-700">
            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-3">Nossa Missão</h2>
              <p class="leading-relaxed">
                Conectar profissionais especializados com projetos que fazem a diferença. 
                Nosso sistema de gestão de consultores foi desenvolvido para facilitar o 
                encontro entre expertise e necessidades empresariais.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-3">Funcionalidades</h2>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">✓</span>
                  <span>Sistema de autenticação com diferentes perfis de acesso</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">✓</span>
                  <span>Gerenciamento completo de consultores (CRUD)</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">✓</span>
                  <span>Filtros por especialização para facilitar a busca</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">✓</span>
                  <span>Interface responsiva e intuitiva</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">✓</span>
                  <span>Comunicação eficiente entre componentes</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-3">Tecnologias Utilizadas</h2>
              <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div class="bg-blue-50 p-4 rounded-lg text-center">
                  <p class="font-semibold text-blue-900">Angular 18+</p>
                  <p class="text-sm text-blue-700">Framework</p>
                </div>
                <div class="bg-purple-50 p-4 rounded-lg text-center">
                  <p class="font-semibold text-purple-900">TypeScript</p>
                  <p class="text-sm text-purple-700">Linguagem</p>
                </div>
                <div class="bg-green-50 p-4 rounded-lg text-center">
                  <p class="font-semibold text-green-900">Tailwind CSS</p>
                  <p class="text-sm text-green-700">Estilização</p>
                </div>
                <div class="bg-yellow-50 p-4 rounded-lg text-center">
                  <p class="font-semibold text-yellow-900">Signals</p>
                  <p class="text-sm text-yellow-700">Reatividade</p>
                </div>
                <div class="bg-pink-50 p-4 rounded-lg text-center">
                  <p class="font-semibold text-pink-900">Reactive Forms</p>
                  <p class="text-sm text-pink-700">Formulários</p>
                </div>
                <div class="bg-indigo-50 p-4 rounded-lg text-center">
                  <p class="font-semibold text-indigo-900">Router</p>
                  <p class="text-sm text-indigo-700">Navegação</p>
                </div>
              </div>
            </section>

            <section>
              <h2 class="text-2xl font-bold text-gray-900 mb-3">Arquitetura</h2>
              <p class="leading-relaxed mb-3">
                O sistema foi desenvolvido seguindo as melhores práticas do Angular:
              </p>
              <ul class="space-y-2">
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">•</span>
                  <span><strong>Standalone Components:</strong> Arquitetura moderna sem módulos</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">•</span>
                  <span><strong>Services:</strong> Gerenciamento de estado e lógica de negócio</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">•</span>
                  <span><strong>Guards:</strong> Proteção de rotas baseada em autenticação</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">•</span>
                  <span><strong>Signals:</strong> Sistema reativo moderno do Angular</span>
                </li>
                <li class="flex items-start">
                  <span class="text-blue-600 mr-2">•</span>
                  <span><strong>@Input/@Output:</strong> Comunicação entre componentes</span>
                </li>
              </ul>
            </section>

            <section class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h2 class="text-2xl font-bold text-gray-900 mb-3">Desenvolvido com ❤️</h2>
              <p class="leading-relaxed">
                Este projeto foi desenvolvido como parte de um módulo de aprendizado, 
                demonstrando conceitos avançados de Angular incluindo autenticação, 
                CRUD completo, navegação entre páginas e gerenciamento de estado.
              </p>
            </section>
          </div>
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
export class AboutComponent {}
