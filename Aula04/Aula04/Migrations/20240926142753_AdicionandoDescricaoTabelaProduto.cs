using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Aula04.Migrations
{
    /// <inheritdoc />
    public partial class AdicionandoDescricaoTabelaProduto : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Descricao",
                table: "Produtos",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Descricao",
                table: "Produtos");
        }
    }
}
