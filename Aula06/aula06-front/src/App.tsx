import React from 'react';
import ListarProduto from './components/pages/ListarProdutos';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ListarProdutos from './components/pages/ListarProdutos';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <Link to="/pages/produto/listar">Listar Produtos</Link>
            </li>
            <li>
              <Link to="/pages/produto/cadastrar">Cadastrar Produto</Link>
            </li>
            <li>
              <Link to="/pages/endereco/consultar">Consultar Cep</Link>
            </li>
          </ul>
        </nav>
        <div id='conteudo'>
          <Routes>
            <Route path='/pages/produto/listar' element={<ListarProdutos></ListarProdutos>} />
            <Route path='/pages/produto/cadastrar' element={Cadastro</CadastroProduto>} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
