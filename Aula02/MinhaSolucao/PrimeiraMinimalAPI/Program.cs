using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.Hosting;

// Minimal APIs
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// Endpoints -- Funcionalidades
// Request   -- Requisição -- URL e o método/verbo HTTP
app.MapGet("/", () => "Hello, Minimal API!");

// ... outros endpoints
app.MapGet("/items", () => "Obter todos os itens");
app.MapPost("/items", () => "Adicionar um novo item");

app.MapGet("/items/{id}", (int id) => $"Obter item com ID {id}");


app.Run();