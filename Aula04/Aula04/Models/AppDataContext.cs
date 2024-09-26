using System;
using Microsoft.EntityFrameworkCore;
using MinimalApiAula04.Models;

namespace Aula04.Models;

// Implementar a herança da classe DbContext
public class AppDataContext : DbContext
{
    // Declarar todas as classes de modelo que vão virar tabelas no banco de dados
    // Classe do produto no singular e A tabela do Produto no plural
    public DbSet<Produto> Produtos { get; set; }

    // Qual bando será utlizado
    // String de conexão
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data Source=Ecommerce.db");
    }

}
