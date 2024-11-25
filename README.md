# Desenvolvimento de Software Visual - Universidade Positivo

Este repositório contém os projetos desenvolvidos na disciplina **Desenvolvimento de Software Visual**, que abordou o desenvolvimento de aplicações frontend e backend utilizando tecnologias modernas como C#, .NET Core, React e TypeScript.

## 🛠️ Tecnologias Utilizadas

### Backend:
- **C#**: Linguagem de programação para desenvolvimento da API.
- **.NET Core**: Framework para criação de aplicações robustas e escaláveis.
- **Minimal API**: Abordagem simplificada para criar APIs RESTful.
- **Entity Framework**: Framework ORM utilizado para manipulação de dados no banco de dados.
- **SQLite**: Banco de dados leve e eficiente utilizado nos projetos.

### Frontend:
- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **TypeScript**: Superset do JavaScript, usado para maior tipagem e escalabilidade do código.
- **Fetch**: Para consumo de APIs no frontend.

## 📚 Conteúdo Aprendido

Na disciplina, foram abordados os seguintes tópicos:

### Backend:
- **Minimal API**: Criação de APIs simples e performáticas.
- **Criação de Endpoints**: Implementação de endpoints com:
  - Métodos HTTP (GET, POST, PUT, DELETE).
  - Códigos de resposta HTTP e URL.
  - Recebimento de dados pela URL e pelo corpo da requisição.
- **Banco de Dados**:
  - Uso do Entity Framework para integração com SQLite.
  - Modelagem e implementação de relacionamento entre tabelas.
  - Operações de CRUD.

### Frontend:
- **React**:
  - Criação de componentes reutilizáveis.
  - Implementação de navegação entre páginas.
  - Integração com a API utilizando Fetch.
  - Interação com elementos HTML e estados.
- **TypeScript**:
  - Desenvolvimento com tipagem forte para maior robustez do código.

## 🚀 Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter instalado:
- **Node.js** (para rodar o React com TypeScript)
- **.NET SDK** (para rodar o backend)
- **SQLite** (para banco de dados, caso necessário)

### Passos
1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/csharp-desenvolvimento-de-software-visual.git
2. Configure o banco de dados SQLite e verifique as strings de conexão no backend.
3. Inicie o backend:
   ```bash
   cd backend
   dotnet run
4. Inicie o frontend:
   ```bash
    cd frontend
    npm install
    npm start
5. Acesse a aplicação no navegador:

Frontend: http://localhost:3000
API Endpoints: http://localhost:5000

## 📂 Estrutura do Projeto
- /backend: Contém a API desenvolvida com Minimal API em C#. </br>
- /frontend: Contém a aplicação frontend desenvolvida em React com TypeScript.</br>
