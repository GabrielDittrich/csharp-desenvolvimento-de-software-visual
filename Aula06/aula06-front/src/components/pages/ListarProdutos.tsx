import { useEffect, useState } from "react";
import "./ListarProdutos.css";
import { Produto } from "../../models/Produto";

function ListarProdutos() {
    const [produtos, setProdutos] = useState<Produto[]>([]);

    useEffect(() => {
        consultarProdutos();
    }, []);

    function consultarProdutos() {
        fetch("http://localhost:5020/produto/listar")
            .then((resposta) => resposta.json())
            .then((produtos) => {
                setProdutos(produtos);
                console.table(produtos);
            });
    }

    return (
        <div id="listar-produtos">
            <h1>Listar Produtos</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nome</th>
                        <th>Criado em</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr>
                            <td>{produto.id}</td>
                            <td>{produto.nome}</td>
                            <td>{produto.criadoEm}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListarProdutos;