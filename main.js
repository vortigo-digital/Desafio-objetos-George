const pessoas = [
    {
        nome: "Bruna",
        codou: 0
    },
    {
        nome: "Daniela",
        codou: 0
    },
    {
        nome: "Eduardo",
        codou: 0
    },
    {
        nome: "Franklyn",
        codou: 0
    },
    {
        nome: "George",
        codou: 0
    },
    {
        nome: "Gian",
        codou: 0
    },
    {
        nome: "Guilherme Barcelos",
        codou: 0
    },
    {
        nome: "João Luft",
        codou: 0
    },
    {
        nome: "João Krampe",
        codou: 0
    },
    {
        nome: "Murilo",
        codou: 0
    },
    {
        nome: "Pedro",
        codou: 0
    },
    {
        nome: "Raul",
        codou: 0
    },
    {
        nome: "Victor",
        codou: 0
    },
    {
        nome: "Guilherme Filheiro",
        codou: 0
    },
    {
        nome: "Julia",
        codou: 0
    }
];

let pessoasRestantes = [...pessoas];

function realizarSorteio() {
    if (pessoasRestantes.length === 0) {      
        pessoasRestantes = [...pessoas];
    }
    
    const indiceSorteado = Math.floor(Math.random() * pessoasRestantes.length);
    const pessoaSorteada = pessoasRestantes[indiceSorteado];
    
    pessoaSorteada.codou++;
    const resultadoDiv = document.getElementById("resultadoSorteio");
    resultadoDiv.textContent = `${pessoaSorteada.nome}, codou ${pessoaSorteada.codou} vezes.`;
    
    pessoasRestantes.splice(indiceSorteado, 1);
    
    const divResultado = document.querySelector('.result');
    divResultado.style.display = 'block';
}


//Inicialização das variáveis: Começamos definindo um array chamado pessoas que contém objetos representando pessoas com seus nomes e contadores de vezes que foram sorteadas (codou). Também temos uma variável pessoasRestantes que inicialmente é uma cópia do array pessoas.

//Sorteio: Quando o botão de sorteio é clicado, a função realizarSorteio() é chamada.

//Verificação de disponibilidade de pessoas: Primeiro, verificamos se ainda há pessoas disponíveis para serem sorteadas. Se não houver, resetamos a lista de pessoas disponíveis.

//Escolha aleatória: Calculamos um índice aleatório dentro do array pessoasRestantes para escolher uma pessoa aleatória.

//Atualização do contador: Incrementamos o contador codou da pessoa sorteada.

//Exibição do resultado: Atualizamos o texto na div de resultado com o nome da pessoa sorteada e quantas vezes ela foi sorteada até agora.

//Remoção da pessoa sorteada: Removemos a pessoa sorteada da lista pessoasRestantes, garantindo que ela não seja sorteada novamente até que todas as outras pessoas tenham sido sorteadas.

//Exibição da div de resultado: Exibimos a div de resultado para mostrar o resultado do sorteio.

//Nesta implementação, quando você clica no botão "Sorteio", a função realizarSorteio() é chamada. Ele escolhe aleatoriamente uma pessoa da lista pessoasRestantes, aumenta o contador codou, exibe o resultado na div e remove a pessoa da lista pessoasRestantes. Quando todas as pessoas foram sorteadas, a lista é resetada.