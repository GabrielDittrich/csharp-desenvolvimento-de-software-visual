namespace MinimalApiAula04.Models;

public class Produto
{
    //C# - Construtor
    public Produto()
    {
        Id = Guid.NewGuid().ToString();
        CriadoEm = DateTime.Now;
    }

    //C# - Atributos/Propriedade/Característica, get e set    
    public string? Id { get; set; }

    public string? Nome { get; set; }

    public double Preco { get; set; }

    public int Quantidade { get; set; }

    public DateTime CriadoEm { get; set; }

    //Como faria em java
    // atributos , Get e Set

    /*  private double preco;
    
        public double getPreco(){
        return this.preco
        } 
        public double setPreco(){
        this.preco = preco;
        }                              */
}