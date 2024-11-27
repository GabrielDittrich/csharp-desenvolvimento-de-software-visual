import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProdutoAlterar from './components/ProdutoAlterar';
import ConsultarCEP from './components/exemplos/ConsultarCEP';
import CadastrarProduto from './components/CadastrarProduto';
import ListarProdutos from './components/ListarProdutos';

function App() {
  return (
    <div id='App'>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/pages/produto/listar">
                Listar Produtos
              </Link>
            </li>
            <li>
              <Link to="/pages/produto/cadastrar/">
                Cadastrar Produto
              </Link>
            </li>
            <li>
              <Link to="/pages/endereco/consultar">
                Consultar CEP
              </Link>
            </li>
          </ul>
        </nav>
        <div id="conteudo">
          <Routes>
            <Route path="/" element={<ListarProdutos />} />
            <Route
              path="/pages/produto/listar"
              element={<ListarProdutos />}
            />
            <Route
              path="/pages/produto/cadastrar/"
              element={<CadastrarProduto />}
            />
            <Route
              path="/pages/endereco/consultar"
              element={<ConsultarCEP />}
            />
            <Route
              path="/pages/produto/alterar/:id"
              element={<ProdutoAlterar />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;