import { useEffect, useState } from "react";
import { Categoria } from "../models/Categoria";
import { useParams } from "react-router-dom";
import { Produto } from "../models/Produto";
import { error, log } from "console";

function ProdutoAlterar() {
    const { id } = useParams();
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [quantidade, setQuantidade] = useState(0);
    const [preco, setPreco] = useState(0);
    const [categoriaId, setCategoriaId] = useState(0);
  
    useEffect(() => {
      if (id) {
        axios
          .get<Produto>(
            `http://localhost:5008/api/produto/buscar/${id}`
          )
          .then((resposta) => {
            setNome(resposta.data.nome);
            setDescricao(resposta.data.descricao);
            setQuantidade(resposta.data.quantidade);
            setPreco(resposta.data.preco);
            setCategoriaId(resposta.data.categoriaId);
            buscarCategorias();
          });
      }
    }, []);
  
    function buscarCategorias() {
      axios
        .get<Categoria[]>("http://localhost:5008/api/categoria/listar")
        .then((resposta) => {
          setCategorias(resposta.data);
          console.table(resposta.data);
        })
        .catch((erro) => {
          console.log("erro ao listar categoria", erro);
        });
    }
  
    function enviarProduto(e: any) {
      e.preventDefault();
  
      const produtoAlterado: Produto = {
        nome: nome,
        descricao: descricao,
        quantidade: Number(quantidade),
        preco: Number(preco),
        categoriaId: categoriaId,
      };
  
      axios
        .put(`http://localhost:5008/api/produto/alterar/${id}`, produtoAlterado)
        .then((resposta) => {
          console.log(resposta.data);
        })
        .catch((erro) => {
          console.log("Erro", erro);
        });
    }
  
    return (
      <div id="alterar-produto" className="container">
        <h1>Alterar Produto</h1>
        <form onSubmit={enviarProduto}>
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={nome}
              required
              onChange={(e: any) => setNome(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="descricao">Descrição</label>
            <input
              type="text"
              id="descricao"
              value={descricao}
              name="descricao"
              onChange={(e: any) => setDescricao(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="preco">Preço</label>
            <input
              type="number"
              id="preco"
              value={preco}
              name="preco"
              onChange={(e: any) => setPreco(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="quantidade">Quantidade</label>
            <input
              type="number"
              id="quantidade"
              value={quantidade}
              name="quantidade"
              onChange={(e: any) => setQuantidade(e.target.value)}
            />
          </div>
  
          <div>
            <label htmlFor="quantidade">Categorias</label>
            <select
              onChange={(e: any) => setCategoriaId(e.target.value)}
            >
              {categorias.map((categoria) => (
                <option
                  value={categoria.categoriaId}
                  key={categoria.categoriaId}
                >
                  {categoria.nome}
                </option>
              ))}
            </select>
          </div>
  
          <button type="submit">Cadastrar Produto</button>
        </form>
      </div>
    );
  }
  
  export default ProdutoAlterar;