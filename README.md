# 🎓 Desenvolvimento de Software Visual - Universidade Positivo

Este repositório reúne os projetos desenvolvidos na disciplina **Desenvolvimento de Software Visual**, parte do curso de **Análise e Desenvolvimento de Sistemas da Universidade Positivo**.

Durante a disciplina, foram exploradas tecnologias modernas para o desenvolvimento de aplicações **frontend e backend**, utilizando **C# com .NET Core** no servidor e **React com TypeScript** na interface.

---

## 👨‍🏫 Professor

Diogo Steinnke Deconto  
[📘 Conteúdo da disciplina no Notion](https://careful-bite-81a.notion.site/Desenvolvimento-Web-Avan-ado-f752a914be3c4d09acb1acedb74bff21?pvs=143)

---

## 🛠️ Tecnologias Utilizadas

### 🔧 Backend
- **C#** – Linguagem de programação para desenvolvimento da API
- **.NET Core** – Framework para criação de aplicações robustas e escaláveis
- **Minimal API** – Abordagem simplificada para criação de APIs RESTful
- **Entity Framework Core** – ORM para manipulação de dados
- **SQLite** – Banco de dados leve e eficiente

### 🎨 Frontend
- **React** – Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript** – Superset do JavaScript com tipagem estática
- **Fetch API** – Comunicação com a API via HTTP

---

## 📚 Conteúdos Abordados

### 🔙 Backend
- Criação de **endpoints** RESTful (GET, POST, PUT, DELETE)
- Utilização de códigos de status HTTP apropriados
- Recebimento de dados via **URL** e **body**
- Integração com **Entity Framework** e **SQLite**
- Modelagem de banco de dados e operações CRUD

### 🔜 Frontend
- Criação de **componentes reutilizáveis** em React
- Navegação entre páginas (React Router)
- Integração com a API usando **Fetch**
- Manipulação de estados com `useState`, `useEffect`, etc.
- Tipagem de props e dados com **TypeScript**

---

## 🚀 Como Executar o Projeto

### ✔️ Pré-requisitos

- [.NET SDK](https://dotnet.microsoft.com/)  
- [Node.js + npm](https://nodejs.org/)  
- SQLite (opcional: usado pelo EF Core)

### ▶️ Passos

```bash
# Clone o repositório
git clone https://github.com/GabrielDittrich/csharp-desenvolvimento-de-software-visual.git

# BACKEND
cd backend
dotnet restore
dotnet run

# FRONTEND
cd ../frontend
npm install
npm start
```
## 🌐 Acesse no navegador:
Frontend: http://localhost:3000

API: http://localhost:5000

## 📁 Estrutura do Projeto
<pre>
  csharp-desenvolvimento-de-software-visual/
├── backend/      # API em .NET Core com Minimal API + EF Core
│   ├── Controllers/
│   ├── Models/
│   ├── Data/
│   └── Program.cs
├── frontend/     # Frontend em React com TypeScript
│   ├── src/
│   ├── public/
│   └── package.json
</pre>

### 📝 Observações
Este projeto foi desenvolvido com fins educacionais como parte da disciplina Desenvolvimento de Software Visual na Universidade Positivo. Os conhecimentos adquiridos foram fundamentais para compreender o ciclo completo de desenvolvimento web moderno, incluindo integração entre front e back-end.


