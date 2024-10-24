import { useEffect } from "react";

function ConsultarCep(){
    
    useEffect(() => {
        // Método utilizado para executar qualquer codigo enquanto
        //o componente está sendo aberto/renderizado
        //Biblioteca de requisições - AXIOS
        fetch("https://viacep.com.br/ws/01001000/json/")
            .then(resposta => {
                return resposta.json();
            })
            .then(cep => {
                console.log(cep);
            });
    });

    return(
        <div>
            <h1>Consultar CEP</h1>
        </div>
    );
}

export default ConsultarCep;


