import { useEffect, useState } from "react";

function ConsultarCep(){
    
    const [cepData, setCepData] = useState<any>(null);

    useEffect(() => {
        // Método utilizado para executar qualquer codigo enquanto
        //o componente está sendo aberto/renderizado
        //Biblioteca de requisições - AXIOS


        fetch("https://viacep.com.br/ws/80020010/json/")
            .then(resposta => {
                return resposta.json();
            })
            .then((data) => {
                // Armazenando os dados da resposta no estado
                setCepData(data);
            });
    });

    return(
        <div>
            <h1>Consultar CEP</h1>
            {cepData? (
                <div>
                    <p><strong>CEP:</strong> {cepData.cep}</p>
                    <p><strong>Logradouro:</strong> {cepData.logradouro}</p>
                    <p><strong>Bairro:</strong> {cepData.bairro}</p>
                    <p><strong>Cidade:</strong> {cepData.localidade}</p>
                    <p><strong>Estado:</strong> {cepData.uf}</p>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
}

export default ConsultarCep;


