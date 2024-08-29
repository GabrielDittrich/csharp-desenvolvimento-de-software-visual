var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.MapGet("/items", () => "Obter todos os itens");
app.MapPost("/items", () => "Adicionar um novo item");
// ... outros endpoints




app.Run();
