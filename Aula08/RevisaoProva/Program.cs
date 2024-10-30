using Microsoft.AspNetCore.Mvc;
using RevisaoProva.Models;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<AppDataContext>();
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapPost("/api/funcionario/cadastrar", ([FromBody] Funcionario funcionario, [FromServices] AppDataContext ctx) =>
{
    ctx.Funcionarios.Add(funcionario);
    ctx.SaveChanges();
    return Results.Created("", funcionario);
});

app.MapGet("/api/funcionario/listar", ([FromServices] AppDataContext ctx) =>
{
    if (ctx.Funcionarios.Any())
    {
        return Results.Ok(ctx.Funcionarios.ToList());
    }
    return Results.NotFound();
});

app.MapPost("/api/folha/cadastrar", ([FromBody] Folha folha, [FromServices] AppDataContext ctx) =>
{
    // Validar se o funcionario existe

    Funcionario? funcionario =
    ctx.Funcionarios.Find(folha.FuncionarioId);

    if(funcionario is null)
    return Results.NotFound("Funcionario não encontrado");

    folha.Funcionario = funcionario;

    // Calcular o IRRF
    if (folha.SalarioBruto <= 1903.98)
        folha.ImpostoIRRF = 0;
    if (folha.SalarioBruto <= 2826.65)
        folha.ImpostoIRRF = (folha.SalarioBruto * .075) - 142.80;
    if (folha.SalarioBruto <= 3751.05)
        folha.ImpostoIRRF = (folha.SalarioBruto * .15) - 354.80;
    if (folha.SalarioBruto <= 4664.68)
        folha.ImpostoIRRF = (folha.SalarioBruto * .225) - 636.13;
    else
        folha.ImpostoIRRF = (folha.SalarioBruto * .275) - 869.36;

    // Calcular o INSS
    if (folha.SalarioBruto <= 1603.72)
        folha.INSS = folha.SalarioBruto * .08;
    if (folha.SalarioBruto <= 2822.90)
        folha.INSS = folha.SalarioBruto * .09;
    if (folha.SalarioBruto <= 5645.80)
        folha.INSS = folha.SalarioBruto * .11;
    else
        folha.INSS = 621.04;

    // Calcular o FGTS
    folha.ImpostoFGTS = folha.SalarioBruto * .08;

    // Calcular o salário líquido
    folha.SalarioLiquido = folha.SalarioBruto - folha.ImpostoIRRF - folha.INSS;

    ctx.Folhas.Add(folha);
    ctx.SaveChanges();
    return Results.Created("", folha);
});

app.MapGet("/api/folha/listar", ([FromServices] AppDataContext ctx) =>
{
    if (ctx.Folhas.Any())
    {
        return Results.Ok(ctx.Folhas.ToList());
    }
    return Results.NotFound();
});

app.MapGet("/api/folha/buscar/{mes}/{ano}", ([FromServices] AppDataContext ctx, [FromRoute] int mes, [FromRoute] int ano) =>
{

    Folha? folha = ctx.Folhas.FirstOrDefault(f => f.Mes == mes && f.Ano == ano);

    if (folha is null)
    {
        return Results.NotFound();
    }
    return Results.Ok(folha);
});

app.Run();
