// REGRAS PARA CRIAÇÃO DE UM COMPONENTE

// 1 - A primeira letra do componete deve ser Maiúscula
// 2 - Todo componente deve ser uma Função
// 3 - Todo componente DEVE RETORNAR APENAS UM elemento HTML
// 4 - Todo componente deve ser exportado

function ComponenteExemplo(){
    return(
        <div>
            <h1>Primeiro Post</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas itaque repellat assumenda? Ullam nesciunt quisquam molestiae veritatis,
            recusandae facilis! Animi minima tempore dolorem eos? Saepe natus obcaecati quis magni sint.</p>
        </div>
    );
}

export default ComponenteExemplo;
