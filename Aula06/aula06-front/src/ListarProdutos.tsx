import { useEffect, useState } from "react";

function ListarProduto(){
    
    const [bairro, setBairro] = useState("");
    const [localidade, setLocalidade] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [cep, setCep] = useState("");



    useEffect(() => {
    });

    function consultarCep(){
        fetch("http://localhost:5195/api/produto/listar")
        .then(resposta => {
            return resposta.json();
        })
        .then((produtos) => {
            console.log(produtos);
        });
    }

    return(
        <div id="listarprodutos">
          <h1>Listar Produtos</h1>
        </div>
    );
}

export default ListarProduto;


