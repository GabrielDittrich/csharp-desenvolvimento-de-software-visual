
// Minimal APIs
using MinimalApiAula03.Models;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

//Lista de Produtos
List<Produto> produtos = new List<Produto>
{
    new Produto
    {
        Nome = "Produto A",
        Preco = 19.99,
        Quantidade = 10,
    },
    new Produto
    {
        Nome = "Produto B",
        Preco = 29.99,
        Quantidade = 5,
    },
    new Produto
    {
        Id = "3",
        Nome = "Produto C",
        Preco = 9.99,
        Quantidade = 25,
    }
};

// Endpoints -- Funcionalidades
// Request   -- Requisição -- URL e o método/verbo HTTP
app.MapGet("/", () => "API de Produtos!");

// GET:  http://localhost:5163/produto/listar
app.MapGet("/produto/listar", () =>
{
    return produtos;
});

app.MapPost("/produtos/cadastrar", () =>
{
    return produtos;
});

/* Em java
Produto produto = new Produto();
produto.setPreco(8800);
System.out.println("O produto custa "+ produto.getPreco()); */

Produto produto = new Produto();
produto.Preco = 777;
Console.WriteLine("Preço: " + produto.Preco);
app.Run();