using Microsoft.AspNetCore.Mvc;
using MinimalApiAula04.Models;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

//Lista de Produtos
List<Produto> produtos = new List<Produto>
{
    new Produto
    {
        Id = "1",
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
app.MapGet("/produto/buscar/{id}", ([FromRoute] string id) =>
{
    // Expresssão lambda em c#
    Produto? produto = produtos.Find(x => x.Id == id);

    if (produto == null)
    {
        return Results.NotFound();
    }
    return Results.Ok(produto);
});

app.MapPost("/produto/cadastrar", ([FromBody] Produto produto) =>
{
    produtos.Add(produto);
    return Results.Created(" ", produtos);
});

// PUT: http://localhost:5163/produto/alterar/{id}
app.MapPut("/produto/alterar/{id}", ([FromRoute] string id, [FromBody] Produto produtoAlterado) =>
{
    // Encontrar o produto a ser alterado pelo ID
    Produto produtoExistente = produtos.FirstOrDefault(p => p.Id == id);

    if (produtoExistente != null)
    {
        // Atualizar os dados do produto
        produtoExistente.Nome = produtoAlterado.Nome;
        produtoExistente.Preco = produtoAlterado.Preco;
        produtoExistente.Quantidade = produtoAlterado.Quantidade;

        return Results.Ok($"Produto com Id {id} atualizado com sucesso!");
    }

    return Results.NotFound($"Produto com Id {id} não encontrado.");
});


// DELETE: http://localhost:5163/produto/deletar/{id}
app.MapDelete("/produto/deletar/{id}", ([FromRoute] string id) =>
{
    Produto produtoParaRemover = produtos.FirstOrDefault(p => p.Id == id);

    if (produtoParaRemover != null)
    {
        produtos.Remove(produtoParaRemover);
        return Results.Ok($"Produto com Id {id} removido com sucesso!");
    }
    return Results.NotFound($"Produto com Id {id} não encontrado.");
});

/* Em java
Produto produto = new Produto();
produto.setPreco(8800);
System.out.println("O produto custa "+ produto.getPreco()); */


app.Run();