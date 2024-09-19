using Microsoft.AspNetCore.Mvc;
using MinimalApiAula04.Models;

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
        Nome = "Produto",
        Preco = 9.99,
        Quantidade = 25,
    }
};

// Endpoints -- Funcionalidades
// Request   -- Requisição -- URL e o método/verbo HTTP
// Response/Resposta - Dados (json ou xml) e código de status HTTP
app.MapGet("/", () => "API de Produtos!");

// GET:  http://localhost:5163/produto/listar
app.MapGet("/produto/listar", () =>
{
    if (produtos.Count > 0)
    {
        return Results.Ok(produtos);
    }
    return Results.NotFound();
});

// GET:  http://localhost:5163/produto/buscar
app.MapGet("/produto/buscar/{nome}", ([FromRoute] string nome) =>
{
    foreach (Produto produtoCadastrado in produtos)
    {
        if (produtoCadastrado.Nome == nome)
        {
            return Results.Ok(produtoCadastrado);
        }
    }
    return Results.NotFound();
});

app.MapPost("/produto/cadastrar", ([FromBody] Produto produto) =>
{
    produtos.Add(produto);
    return Results.Created(" ", produtos);
});


/* Em java
Produto produto = new Produto();
produto.setPreco(8800);
System.out.println("O produto custa "+ produto.getPreco()); */


app.Run();