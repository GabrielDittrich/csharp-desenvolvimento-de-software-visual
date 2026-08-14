# 🎓 Desenvolvimento de Software Visual

Repositório com projetos, exercícios e atividades desenvolvidos durante a disciplina de **Desenvolvimento de Software Visual**, do curso de **Análise e Desenvolvimento de Sistemas da Universidade Positivo**.

Ao longo da disciplina, os conteúdos evoluem dos fundamentos de **C#** até o desenvolvimento de aplicações web utilizando **.NET 8, ASP.NET Core, Minimal APIs, Entity Framework Core, SQLite, React e TypeScript**, incluindo integração entre frontend e backend.

---

## 📚 Sobre o repositório

O repositório registra a evolução prática dos conteúdos estudados durante a disciplina.

As primeiras atividades trabalham fundamentos de C# e criação de APIs. Conforme o conteúdo avança, são introduzidos conceitos como **endpoints REST, operações CRUD, persistência com Entity Framework Core, relacionamento entre entidades e desenvolvimento de interfaces com React e TypeScript**.

Nas atividades mais avançadas, frontend e backend são integrados através de requisições HTTP, formando aplicações web full stack.

---

## 🛠️ Tecnologias utilizadas

### 🔧 Backend

* **C#**
* **.NET 8**
* **ASP.NET Core**
* **Minimal APIs**
* **Entity Framework Core**
* **SQLite**
* **LINQ**
* **CORS**

### 🎨 Frontend

* **React**
* **TypeScript**
* **React Router**
* **Axios**
* **Fetch API**
* **HTML**
* **CSS**

### 🧰 Ferramentas

* **Visual Studio Code**
* **Git**
* **GitHub**
* Arquivos `.http` para testes de endpoints

---

## ✨ Conceitos praticados

### Backend

* Fundamentos da linguagem C#
* Programação orientada a objetos
* Classes e propriedades
* Criação de APIs com ASP.NET Core
* Minimal APIs
* Endpoints REST
* Métodos HTTP `GET`, `POST`, `PUT` e `DELETE`
* Parâmetros através da URL
* Recebimento de dados através do body
* Códigos de status HTTP
* Operações CRUD
* Expressões Lambda
* LINQ
* Entity Framework Core
* `DbContext` e `DbSet`
* Migrations
* Persistência com SQLite
* Relacionamento entre entidades
* CORS
* Integração entre API e frontend

### Frontend

* Componentes React
* TypeScript
* Interfaces para tipagem de dados
* `useState`
* `useEffect`
* React Router
* Formulários
* Listagem de dados
* Requisições HTTP
* Fetch API
* Axios
* Consumo de APIs REST
* Integração frontend/backend

---

## 📈 Evolução das atividades

### 🟢 Aula 01 — Fundamentos de C#

Introdução à linguagem C# através de uma aplicação de console.

Foram praticados conceitos iniciais como:

* entrada de dados;
* saída no console;
* variáveis;
* manipulação de strings.

---

### 🟢 Aula 02 — Introdução às Minimal APIs

Primeiro contato com desenvolvimento web utilizando **ASP.NET Core Minimal APIs**.

Foram criados endpoints para compreender conceitos como:

* requisições HTTP;
* `GET`;
* `POST`;
* parâmetros de rota;
* endpoints dinâmicos;
* retorno de objetos através da API.

Exemplos de endpoints:

```text
GET /
GET /items
GET /items/{id}
POST /items
GET /retornarendereco
```

---

### 🟢 Aula 03 — API de produtos

Evolução da Minimal API através da criação de uma estrutura de produtos.

Foram praticados:

* criação de classes;
* modelagem da entidade `Produto`;
* listas de objetos;
* cadastro de produtos;
* consulta de dados;
* parâmetros em endpoints;
* manipulação de objetos C#.

---

### 🟢 Aula 04 — API REST e operações CRUD

Implementação de uma API de produtos utilizando os principais métodos HTTP.

Funcionalidades desenvolvidas:

* listar produtos;
* buscar produto por ID;
* cadastrar produto;
* alterar produto;
* excluir produto.

Foram utilizados os métodos:

```text
GET
POST
PUT
DELETE
```

Também foram praticados:

* códigos de status HTTP;
* `Results.Ok`;
* `Results.NotFound`;
* `Results.Created`;
* parâmetros através de `[FromRoute]`;
* dados recebidos através de `[FromBody]`;
* expressões Lambda.

A atividade também introduz a estrutura de **Entity Framework Core, SQLite e migrations**, preparando as próximas aplicações com persistência de dados.

---

### 🟢 Aula 05 — API de tarefas com Entity Framework Core

Desenvolvimento de uma API de gerenciamento de tarefas utilizando persistência de dados.

A aplicação possui operações para:

* cadastrar tarefas;
* listar tarefas;
* buscar tarefa por ID;
* alterar tarefas;
* excluir tarefas.

Nesta etapa foram utilizados:

* **Entity Framework Core**;
* **SQLite**;
* `DbContext`;
* `DbSet`;
* migrations;
* operações CRUD com persistência.

Exemplos de endpoints:

```text
POST   /api/tarefas/cadastrar
GET    /api/tarefas/listar
GET    /api/tarefas/buscar/{id}
PUT    /api/tarefas/alterar/{id}
DELETE /api/tarefas/deletar/{id}
```

---

### 🟢 Aula 06 — Produtos, categorias e integração com React

Nesta etapa o projeto passa a utilizar **backend e frontend separados**, aproximando-se de uma aplicação full stack.

#### Backend

Foi desenvolvida uma API com as entidades:

* `Produto`
* `Categoria`

Os produtos possuem relacionamento com suas respectivas categorias.

Foram praticados:

* Entity Framework Core;
* SQLite;
* relacionamento entre entidades;
* consulta de dados relacionados;
* operações CRUD;
* CORS;
* validação da existência da categoria antes do cadastro de produtos.

Exemplos de endpoints:

```text
GET  /api/categoria/listar
POST /api/categoria/cadastrar

GET    /api/produto/listar
GET    /api/produto/buscar/{id}
POST   /api/produto/cadastrar
PUT    /api/produto/alterar/{id}
DELETE /api/produto/deletar/{id}
```

#### Frontend

Também foi desenvolvido um frontend utilizando:

* React;
* TypeScript;
* React Router;
* componentes;
* interfaces para tipagem de produtos e categorias;
* formulários;
* `useState`;
* `useEffect`;
* Fetch API;
* Axios.

O frontend realiza requisições HTTP para consumir os dados disponibilizados pela API .NET.

Também foram realizados exercícios de consumo de APIs externas, como consultas utilizando a API ViaCEP.

---

### 🟢 Aula 07 — Aplicação full stack de produtos

Continuação e evolução da aplicação de produtos e categorias.

O backend utiliza:

* C#;
* .NET 8;
* Minimal APIs;
* Entity Framework Core;
* SQLite;
* relacionamento entre produtos e categorias;
* CORS.

O frontend utiliza:

* React;
* TypeScript;
* React Router;
* Axios;
* CSS Modules.

Entre as funcionalidades trabalhadas estão:

* cadastro de produtos;
* listagem de produtos;
* seleção de categorias;
* consulta de produto por ID;
* alteração de produtos;
* exclusão de produtos;
* comunicação entre React e API REST.

Essa etapa concentra diversos conceitos trabalhados anteriormente em uma aplicação **full stack**.

---

### 🟢 Aula 08 — API de funcionários e folha de pagamento

Atividade de revisão utilizando uma aplicação para gerenciamento de funcionários e folhas de pagamento.

Foram modeladas as entidades:

* `Funcionario`
* `Folha`

A aplicação trabalha com relacionamento entre funcionário e folha e utiliza **Entity Framework Core + SQLite** para persistência.

Entre as funcionalidades implementadas estão:

* cadastro de funcionários;
* listagem de funcionários;
* cadastro de folhas;
* associação da folha ao funcionário;
* listagem de folhas com dados do funcionário;
* busca de folha por CPF, mês e ano;
* cálculo de salário bruto;
* cálculo de IRRF;
* cálculo de INSS;
* cálculo de FGTS;
* cálculo de salário líquido.

Exemplos de endpoints:

```text
POST /api/funcionario/cadastrar
GET  /api/funcionario/listar

POST /api/folha/cadastrar
GET  /api/folha/listar
GET  /api/folha/buscar/{cpf}/{mes}/{ano}
```

---

## 🗄️ Persistência de dados

A partir das atividades mais avançadas, os projetos passam a utilizar **Entity Framework Core com SQLite**.

Entre os conceitos praticados estão:

* criação de `DbContext`;
* utilização de `DbSet`;
* migrations;
* criação e atualização do banco;
* consultas através do Entity Framework;
* relacionamentos entre entidades;
* inclusão de entidades relacionadas através de `Include`;
* persistência das operações CRUD.

Algumas aulas possuem seus próprios arquivos de banco SQLite, pois cada pasta representa uma atividade independente desenvolvida durante a disciplina.

---

## 📁 Estrutura do repositório

```text
csharp-desenvolvimento-de-software-visual/
│
├── Aula01/                     # Fundamentos de C#
│
├── Aula02/                     # Introdução às Minimal APIs
│   └── MinhaSolucao/
│       └── PrimeiraMinimalAPI/
│
├── Aula03/                     # API inicial de produtos
│   └── MinimalApiAula03/
│
├── Aula04/                     # API REST e CRUD
│   └── Aula04/
│
├── Aula05/                     # API de tarefas + EF Core
│   └── API/
│
├── Aula06/                     # Produtos e categorias + React
│   ├── Back/
│   └── aula06-front/
│
├── Aula07/                     # Aplicação full stack
│   ├── Aula07/
│   └── front-end/
│
├── Aula08/                     # Funcionários e folha de pagamento
│   └── RevisaoProva/
│
└── README.md
```

---

## 🚀 Como executar

As pastas representam **projetos independentes**, portanto não existe um único comando para executar todo o repositório.

Escolha a aula que deseja executar.

### ✔️ Pré-requisitos

Para os projetos backend:

* [.NET SDK 8](https://dotnet.microsoft.com/download/dotnet/8.0)

Para os projetos frontend:

* [Node.js](https://nodejs.org/)
* npm

---

### 🔙 Executando um backend

Por exemplo, para executar a API da Aula 06:

```bash
cd Aula06/Back
dotnet restore
dotnet run
```

Ou a API da Aula 07:

```bash
cd Aula07/Aula07
dotnet restore
dotnet run
```

O endereço utilizado pela aplicação será exibido no terminal após a execução.

---

### 🎨 Executando um frontend

Para executar o frontend da Aula 06:

```bash
cd Aula06/aula06-front
npm install
npm start
```

Para executar o frontend da Aula 07:

```bash
cd Aula07/front-end
npm install
npm start
```

Por padrão, aplicações criadas com React Scripts são disponibilizadas em:

```text
http://localhost:3000
```

---

### 🔗 Integração frontend/backend

Os frontends das atividades utilizam endereços locais para comunicação com suas respectivas APIs.

Na configuração original:

```text
Aula 06 API → http://localhost:5020
Aula 07 API → http://localhost:5008
```

Caso o backend seja executado em outra porta, os endereços utilizados nas requisições do frontend precisam ser ajustados.

---

### 🗄️ Entity Framework Core

Os projetos que utilizam Entity Framework Core já possuem migrations e bancos SQLite utilizados durante as atividades.

Caso seja necessário recriar ou atualizar o banco:

```bash
dotnet ef database update
```

> Pode ser necessário instalar a ferramenta `dotnet-ef` caso ela ainda não esteja disponível no ambiente.

---

## 👨‍🏫 Contexto acadêmico

Projeto desenvolvido durante a disciplina **Desenvolvimento de Software Visual**, do curso de **Análise e Desenvolvimento de Sistemas da Universidade Positivo**.

**Professor:** Diogo Steinnke Deconto

[📘 Conteúdo da disciplina no Notion](https://careful-bite-81a.notion.site/Desenvolvimento-Web-Avan-ado-f752a914be3c4d09acb1acedb74bff21?pvs=143)

O repositório representa a evolução dos conteúdos trabalhados durante a disciplina, desde os fundamentos de C# até o desenvolvimento e integração de aplicações web utilizando **.NET e React**.

---

## ⚠️ Observação

Os projetos deste repositório foram desenvolvidos com **finalidade acadêmica** e representam os conceitos e práticas estudados durante a disciplina.

Por serem atividades de aprendizado realizadas em diferentes momentos do curso, algumas implementações podem utilizar abordagens simplificadas ou configurações locais específicas.

O objetivo do repositório é registrar a evolução prática no desenvolvimento de aplicações com **C#, .NET, APIs REST, Entity Framework Core, React, TypeScript e bancos de dados relacionais**.
