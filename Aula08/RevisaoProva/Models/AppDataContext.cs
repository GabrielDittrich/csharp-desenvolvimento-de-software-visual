using System;
using Microsoft.EntityFrameworkCore;

namespace RevisaoProva.Models;

public class AppDataContext : DbContext
{

    public DbSet<Funcionario> Funcionarios { get; set; }

    public DbSet<Folha> Folhas { get; set; }
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlite("Data source=RevisaoProva.db");
    }
}
