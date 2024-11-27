import { useEffect, useState } from "react";
import { Produto } from "../../models/Produto";
import "./CadastroProduto.css";
import axios from "axios";
import { Categoria } from "../../models/Categoria";

function CadastrarProduto() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");

  const [categoriaId, setCategoriaId] = useState(0);
  //Criar a interface de categoria e realizar a tipagem
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    axios.get<Categoria[]>("http://localhost:5020/api/categoria/listar")
      .then((resposta) => {
      setCategorias(resposta.data);
    });
  });

  function enviarProduto(e: any) {
    const produto: Produto = {
      nome: nome,
      descricao: descricao,
      preco: Number(preco),
      quantidade: Number(quantidade),
      categoriaId: categoriaId,
    };

    //AXIOS - Biblioteca para requisições HTTP - Recomendação

    fetch("http://localhost:5020/api/produto/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    })
      .then((resposta) => {
        if (!resposta.ok) {
          return Promise.reject("Erro na resposta da API");
        }
        return resposta.json();
      })
      .then((produto) => {
        console.log(produto);
      })
      .catch((erro) => {
        console.error("Erro ao cadastrar produto:", erro);
      });
    e.preventDefault();
  }

  return (
    <div>
      <h1>Cadastrar Produto</h1>
      <form onSubmit={enviarProduto}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            onChange={(e: any) => setNome(e.target.value)}
            type="text"
            id="nome"
            name="nome"
            required
            placeholder="Digite o nome do produto"
          />
        </div>

        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea
            onChange={(e: any) => setDescricao(e.target.value)}
            id="descricao"
            name="descricao"
            required
            placeholder="Digite a descrição do produto"
          ></textarea>
        </div>

        <div>
          <label htmlFor="quantidade">Quantidade</label>
          <input
            onChange={(e: any) => setQuantidade(e.target.value)}
            type="number"
            id="quantidade"
            name="quantidade"
            required
            placeholder="Digite a quantidade disponível"
          />
        </div>

        <div>
          <label htmlFor="preco">Preço</label>
          <input
            onChange={(e: any) => setPreco(e.target.value)}
            type="number"
            id="preco"
            name="preco"
            required
            step="0.01"
            placeholder="Digite o preço do produto"
          />
        </div>

        <div>
          <label htmlFor="categorias">Categorias</label>
          <select
            id="categoria"
            onChange={(e: any) => setCategoriaId(Number(e.target.value))}
          >
            <option value="" disabled selected>
              Selecione uma categoria
            </option>
            {categorias.map((categoria) => (
              <option key={categoria.categoriaId} value={categoria.categoriaId}>
                {categoria.nome}
              </option>
            ))}
          </select>
        </div>

        <div>
          <button type="submit">Cadastrar Produto</button>
        </div>
      </form>
    </div>
  );
}

export default CadastrarProduto;
