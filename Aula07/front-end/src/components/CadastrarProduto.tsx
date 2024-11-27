import { useEffect, useState } from "react";
import { Produto } from "../models/Produto";
import styles from "./css/CadastrarProduto.module.css";
import { Categoria } from "../models/Categoria";
import { error } from "console";

function CadastrarProduto() {
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [preco, setPreco] = useState("");
    const [categoriaId, setCategoriaId] = useState(0);
    //Criar a interface de categoria e realizar a tipagem
    const [categorias, setCategorias] = useState<Categoria[]>([]);
  
    useEffect(() => {
      axios
        .get<Categoria[]>("http://localhost:5008/api/categoria/listar")
        .then((resposta) => {
          setCategorias(resposta.data);
        })
        .catch((erro) => {
          console.log("Erro ao listar categoria", erro);
        });
    });
  
    function enviarProduto(e: any) {
      e.preventDefault();

      const produto: Produto = {
        nome: nome,
        descricao: descricao,
        preco: Number(preco),
        quantidade: Number(quantidade),
        categoriaId: categoriaId,
      };
  
      //AXIOS - Biblioteca para requisições HTTP - Recomendação
      axios
        .post("http://localhost:5008/api/produto/cadastrar", produto)
        .then((resposta) => {
          console.log("Sucesso", resposta.data);
        })
        .catch((erro) => {
          console.log("Erro ao cradastrar", error);
        });
    }
  
    return (
      <div id="cadastro-produto" className={styles["cadastro-produto"]}>
        <h1 className={styles.h1}>Cadastrar Produto</h1>
        <form onSubmit={enviarProduto} className={styles.form}>
          <div className={styles["form-group"]}>
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
  
          <div className={styles["form-group"]}>
            <label htmlFor="descricao">Descrição</label>
            <textarea
              onChange={(e: any) => setDescricao(e.target.value)}
              id="descricao"
              name="descricao"
              required
              placeholder="Digite a descrição do produto"
            ></textarea>
          </div>
  
          <div className={styles["form-group"]}>
            <label htmlFor="quantidade">Quantidade</label>
            <input
              onChange={(e: any) => setQuantidade(e.target.value)}
              type="text"
              id="quantidade"
              name="quantidade"
              required
              placeholder="Digite a quantidade disponível"
            />
          </div>
  
          <div className={styles["form-group"]}>
            <label htmlFor="preco">Preço</label>
            <input
              onChange={(e: any) => setPreco(e.target.value)}
              type="text"
              id="preco"
              name="preco"
              required
              step="0.01"
              placeholder="Digite o preço do produto"
            />
          </div>
  
          <div className={styles["form-group"]}>
            <label htmlFor="categorias">Categorias</label>
            <select
              id="categoria"
              onChange={(e: any) => setCategoriaId(e.target.value)}
            >
              {categorias.map((categoria) => (
                <option key={categoria.categoriaId} value={categoria.categoriaId}>
                  {categoria.nome}
                </option>
              ))}
            </select>
          </div>
  
          <div className={styles["form-actions"]}>
            <button type="submit">Cadastrar Produto</button>
          </div>
        </form>
      </div>
    );
  }
  
  export default CadastrarProduto;