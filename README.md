💻 Estrutura e Execução
🔹 Pré-requisitos

Certifique-se de ter Node.js e Angular CLI instalados globalmente:

# Verificar versão do Node.js
node -v

# Instalar Angular CLI (se necessário)
npm install -g @angular/cli

🔹 1. Instalação de Dependências
# Na pasta raiz do projeto Angular
npm install

🔹 2. Execução do Projeto
# Inicia o servidor de desenvolvimento
ng serve


O projeto estará acessível em: http://localhost:4200/
 🌐

🔑 Credenciais de Acesso (Mock)

A aplicação utiliza um serviço de autenticação mock para alternar entre papéis:

Papel	E-mail	Senha	Acesso
Administrador	admin@empresa.com
	admin123	Criação, Edição e Exclusão de Consultores
Usuário Comum	user@empresa.com
	user123	Apenas Visualização e Filtro de Consultores
🗺️ Rotas da Aplicação
Rota	Componente	Descrição
/login	LoginComponent	Tela inicial de acesso
/consultants	ConsultantsPageComponent	Listagem e filtro de consultores
/consultants/new	ConsultantFormComponent	Cadastro de novo consultor (Admin)
/consultants/edit/:id	ConsultantFormComponent	Edição de consultor existente (Admin)
/about	AboutComponent	Informações sobre a empresa ConsultHub
/**	(Redirecionamento)	Qualquer rota inválida é redirecionada
📄 Componentes Organizados

Os principais componentes estão organizados em arquivos separados (.ts, .html, .css) seguindo boas práticas:

AboutComponent

ConsultantCardComponent

ConsultantFormComponent

ConsultantFilterComponent

ConsultantsPageComponent

HeaderComponent

LoginComponent

✨ Obrigado por conferir este projeto!
Se gostou, não esqueça de deixar uma ⭐ no repositório! 🚀