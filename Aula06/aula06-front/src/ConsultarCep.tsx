import { useEffect, useState } from "react";

function ConsultarCep(){
    
    const [bairro, setBairro] = useState("");
    const [localidade, setLocalidade] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [cep, setCep] = useState("");



    useEffect(() => {
        // Método utilizado para executar qualquer codigo enquanto
        //o componente está sendo aberto/renderizado
        //Biblioteca de requisições - AXIOS
    });

    function consultarCep(){
        fetch("https://viacep.com.br/ws/" + {cep}  + "/json/")
        .then(resposta => {
            return resposta.json();
        })
        .then((endereco) => {
            // Armazenando os dados da resposta no estado
            setBairro(endereco.bairro);
            setLocalidade(endereco.localidade);
            setLogradouro(endereco.logradouro);
        });
    }

    function digitar(event : any){
        setCep(event.target.value); // Mostrar exatamente o que foi digitado
    }

    function clicar(){
        consultarCep()
    }

    function perderCursor(){
        consultarCep()
    };

    return(
        <div>
            <h1>Consultar CEP</h1>
            <input type="text" 
            placeholder="Digite um CEP"
            onBlur={perderCursor}
            onChange={digitar}
            />
            <button type= "button" onClick={clicar}> Consultar Cep</button>
                <div>
                    <p><strong>Cep:</strong> {cep}</p>
                    <p><strong>Logradouro:</strong> {logradouro}</p>
                    <p><strong>Bairro:</strong> {bairro}</p>
                    <p><strong>Cidade:</strong> {localidade}</p>
                </div>
        </div>
    );
}

export default ConsultarCep;


