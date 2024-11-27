import { useEffect, useState } from "react";
import { Produto } from "../models/Produto";
import { Link } from "react-router-dom";
import styles from "./css/ProdutoLista.module.css";

function ListarProdutos() {
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    axios
      .get<Produto[]>("http://localhost:5008/api/produto/listar")
      .then((resposta) => {
        setProdutos(resposta.data);
      })
      .catch((erro) => {
        console.log("Erro ao Listar Produtos", erro);
      })
  });

  function deletar(id: number) {
    axios
      .delete(`http://localhost:5008/api/produto/deletar/${id}`)
      .then((resposta) => {
        console.log(resposta.data);
      })
      .catch((erro) => {
        console.log("Erro ao Deletar o Produto", erro);
      });
  }

  return (
    <div id="listarprodutos" className="container">
      <h1>Listar Produtos</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Criado em</th>
            <th>Deletar</th>
            <th>Alterar</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.nome}</td>
              <td>{produto.criadoEm}</td>
              <td>
                <button onClick={() => deletar(produto.id!)}>Deletar</button>
              </td>
              <td>
                <Link to={`/pages/produto/alterar/${produto.id}`}>Alterar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarProdutos;
