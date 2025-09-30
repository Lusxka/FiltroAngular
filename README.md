🚀 ConsultHub: Sistema de Gestão de Consultores (Angular)
Este é um projeto de aplicação web desenvolvido em Angular 17+ utilizando Componentes Standalone e Tailwind CSS para gestão e listagem de consultores. O foco é na organização do código, reatividade com Signals e um design responsivo.

🛠️ Tecnologias Utilizadas
Framework: Angular (v17+)

Estilização: Tailwind CSS (configurado para a compilação via ambiente de desenvolvimento)

Gerenciamento de Estado: Signals (signal() e computed())

Rotas: @angular/router

Formulários: Reactive Forms

💻 Estrutura e Execução
Pré-requisitos
Certifique-se de ter o Node.js e o Angular CLI instalados globalmente em sua máquina.

# Verificar Node.js
node -v

# Instalar Angular CLI (se necessário)
npm install -g @angular/cli

1. Instalação de Dependências
Navegue até a pasta raiz do projeto e instale as dependências.

# Na pasta raiz do projeto Angular
npm install

2. Execução do Projeto
Utilize o comando padrão do Angular CLI para iniciar o servidor de desenvolvimento. O aplicativo estará acessível em http://localhost:4200/.

# Inicia o servidor de desenvolvimento
ng serve

🔑 Credenciais de Acesso (Mock)
A aplicação utiliza um serviço de autenticação de mock (simulação) para alternar entre os papéis de "Administrador" e "Usuário Comum".

Papel

E-mail

Senha

Acesso

Administrador

admin@empresa.com

admin123

Criação, Edição e Exclusão de Consultores.

Usuário Comum

user@empresa.com

user123

Apenas visualização e filtro de consultores.

🗺️ Rotas da Aplicação
Rota

Componente

Descrição

/login

LoginComponent

Tela inicial de acesso.

/consultants

ConsultantsPageComponent

Listagem e filtro de todos os consultores.

/consultants/new

ConsultantFormComponent

Cadastro de novo consultor (Acesso Admin).

/consultants/edit/:id

ConsultantFormComponent

Edição de consultor existente (Acesso Admin).

/about

AboutComponent

Informações sobre a empresa Consulthub.

/**

(Redirecionamento)

Qualquer rota inválida é redirecionada.

📄 Componentes Organizados
Todos os componentes principais foram organizados em arquivos separados (.ts, .html, .css) seguindo as boas práticas para facilitar a manutenção:

AboutComponent

ConsultantCardComponent

ConsultantFormComponent

ConsultantFilterComponent

ConsultantsPageComponent

HeaderComponent

LoginComponent

Agradecemos o seu tempo e análise.