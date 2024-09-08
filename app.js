    function PodeOuNaoComer() {
    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Exibe o valor no console (opcional, para depuração)
    console.log("Valor do campo de pesquisa:", campoPesquisa);

    // Obtém a seção onde os resultados serão exibidos
    const section = document.getElementById("resultados-pesquisa");

    // Se campoPesquisa for uma string vazia
    if (campoPesquisa.trim() === "") {
        section.innerHTML = "Alimento não disponível na base de dados";
        return;
    }

    // Inicializa uma string vazia para armazenar o HTML dos resultados
    let resultado = "";

    // Converte o texto de pesquisa para minúsculas para tornar a pesquisa insensível a maiúsculas e minúsculas
    const campoPesquisaLower = campoPesquisa.toLowerCase();

    // Verifique se a variável dados está definida
    if (typeof dados === 'undefined') {
        console.error("A variável 'dados' não está definida.");
        section.innerHTML = "Erro ao carregar os dados.";
        return;
    }

    // Itera sobre cada item de dado na lista 'dados'
    for (const dado of dados) {
        // Converte os títulos, descrições e tags para minúsculas e compara com o campo de pesquisa
        if (dado.titulo.toLowerCase().includes(campoPesquisaLower) || 
            dado.descrição.toLowerCase().includes(campoPesquisaLower) ||
            dado.tags.toLowerCase().includes(campoPesquisaLower)) {
            // Cria um novo elemento de resultado para o item atual
            resultado += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descrição-meta">${dado.descrição}</p>
                    <a href="${dado.link}" target="_blank">Saiba mais</a>
                </div>
            `;
        }
    }

    // Verifica se algum resultado foi encontrado
    if (resultado === "") {
        section.innerHTML = "Alimento não encontrado na base de dados";
    } else {
        // Insere o HTML gerado na seção de resultados
        section.innerHTML = resultado;
    }
}
