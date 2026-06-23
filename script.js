// Substitua pelas URLs "Raw" dos seus arquivos no GitHub
const urlJson = 'https://githubusercontent.com';
const urlHtml = 'https://githubusercontent.com';

// Função assíncrona para ler os arquivos
async function carregarDadosDoGithub() {
    try {
        // 1. Lendo e processando o JSON
        const respostaJson = await fetch(urlJson);
        const dadosJson = await respostaJson.json(); // Converte para objeto JS
        console.log('Dados do JSON:', dadosJson);

        // 2. Lendo e processando o HTML
        const respostaHtml = await fetch(urlHtml);
        const conteudoHtml = await respostaHtml.text(); // Converte para string
        console.log('Conteúdo do HTML:', conteudoHtml);

        // 3. Exemplo: Injetando o HTML e o JSON na página
        document.getElementById('container-html').innerHTML = conteudoHtml;
        document.getElementById('container-json').innerText = JSON.stringify(dadosJson, null, 2);

    } catch (error) {
        console.error('Erro ao buscar arquivos no GitHub:', error);
    }
}

// Executa a função quando a página carregar
document.addEventListener('DOMContentLoaded', carregarDadosDoGithub);
