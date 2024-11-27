using System;

namespace Aula07.Models;

public class Categoria
{
    public int Id { get; set; }
    public string? Nome { get; set; }
    public DateTime CriadoEm { get; set; } = DateTime.Now;
    // public List<Produto> Produtos { get; set; }
}
