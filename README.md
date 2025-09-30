
# 🚀 ConsultHub: Sistema de Gestão de Consultores

![Angular](https://img.shields.io/badge/Angular-17+-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

Aplicação web desenvolvida com **Angular 17+**, utilizando **Componentes Standalone** e **Tailwind CSS**.  
O objetivo é simplificar a **gestão e listagem de consultores**, mantendo **organização do código**, **reatividade com Signals** e **design responsivo**.  

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** Angular (v17+)  
- **Estilização:** Tailwind CSS  
- **Gerenciamento de Estado:** Signals (`signal()` e `computed()`)  
- **Rotas:** @angular/router  
- **Formulários:** Reactive Forms  

---

## 💻 Estrutura e Execução

### 🔹 Pré-requisitos
Certifique-se de ter **Node.js** e **Angular CLI** instalados globalmente:

```bash
# Verificar versão do Node.js
node -v

# Instalar Angular CLI (se necessário)
npm install -g @angular/cli
````

### 🔹 1. Instalação de Dependências

```bash
# Na pasta raiz do projeto Angular
npm install
```

### 🔹 2. Execução do Projeto

```bash
# Inicia o servidor de desenvolvimento
ng serve
```

O projeto estará acessível em: [http://localhost:4200](http://localhost:4200) 🌐

---

## 🔑 Credenciais de Acesso (Mock)

| Papel         | E-mail                                        | Senha    | Acesso                                      |
| ------------- | --------------------------------------------- | -------- | ------------------------------------------- |
| Administrador | [admin@empresa.com](mailto:admin@empresa.com) | admin123 | Criação, Edição e Exclusão de Consultores   |
| Usuário Comum | [user@empresa.com](mailto:user@empresa.com)   | user123  | Apenas Visualização e Filtro de Consultores |

---

## 🗺️ Rotas da Aplicação

| Rota                  | Componente               | Descrição                              |
| --------------------- | ------------------------ | -------------------------------------- |
| /login                | LoginComponent           | Tela inicial de acesso                 |
| /consultants          | ConsultantsPageComponent | Listagem e filtro de consultores       |
| /consultants/new      | ConsultantFormComponent  | Cadastro de novo consultor (Admin)     |
| /consultants/edit/:id | ConsultantFormComponent  | Edição de consultor existente (Admin)  |
| /about                | AboutComponent           | Informações sobre a empresa ConsultHub |
| /**                   | (Redirecionamento)       | Qualquer rota inválida é redirecionada |

---

## 📄 Componentes Organizados

Os principais componentes estão organizados em arquivos separados (`.ts`, `.html`, `.css`) seguindo boas práticas:

* AboutComponent
* ConsultantCardComponent
* ConsultantFormComponent
* ConsultantFilterComponent
* ConsultantsPageComponent
* HeaderComponent
* LoginComponent

---

## 🔗 Links Úteis

* [Documentação Angular](https://angular.io/docs)
* [Tailwind CSS](https://tailwindcss.com/docs)
* [Exemplo de Deploy no GitHub Pages](https://pages.github.com/)

---

✨ Obrigado por conferir este projeto!
Se gostou, não esqueça de deixar uma ⭐ no repositório! 🚀

![footer](https://img.shields.io/badge/Happy_Coding-😎-blue?style=for-the-badge)

```

Se você quiser, posso criar **uma versão ainda mais “incrível”**, com **GIFs animados**, **imagens de preview do app**, e **links de instalação com um clique**, que vai fazer seu README se destacar no GitHub.  

Quer que eu faça isso também?
```
