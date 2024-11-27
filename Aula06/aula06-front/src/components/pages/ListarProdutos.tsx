import { useEffect, useState } from "react";
import { Produto } from "../../models/Produto";
import "./ListarProdutos.css";

function ListarProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        fetch("http://localhost:5020/api/produto/listar")
          .then((resposta) => {
            return resposta.json();
          })
          .then((produtos) => {
            setProdutos(produtos);
          });
      });
    

    return (
        <div id="listar-produtos">
            <h1>Listar Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Categoria</th>
                        <th>Criado em</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <th>{produto.categoria?.nome}</th>
                            <td>{produto.criadoEm}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListarProdutos;