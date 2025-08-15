let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

/**
 * Verifica se um número está entre 1 e 100.
 * @param {string} n - O número a ser verificado (em formato de string).
 * @returns {boolean} - True se o número for válido, false caso contrário.
 */
function isNumero(n) {
    return Number(n) >= 1 && Number(n) <= 100;
}

/**
 * Verifica se um número já está na lista de valores.
 * @param {string} n - O número a ser verificado (em formato de string).
 * @param {Array<number>} l - A lista de números.
 * @returns {boolean} - True se o número já estiver na lista, false caso contrário.
 */
function inlista(n, l) {
    // Usamos indexOf para verificar se o número já existe na array.
    // Se o indexOf retornar -1, significa que o elemento não foi encontrado.
    return l.indexOf(Number(n)) !== -1;
}

/**
 * Adiciona um número à lista, se for válido e não estiver duplicado.
 */
function adicionar() {
    if (isNumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
        res.innerHTML = ''; // Limpa a área de resultado quando um novo valor é adicionado
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }
    num.value = ''; // Limpa o campo de entrada
    num.focus(); // Coloca o foco de volta no campo de entrada
}

/**
 * Finaliza a análise dos números, calculando e exibindo estatísticas.
 */
function finalizar() {
    if (valores.length === 0) {
        window.alert('Adicione valores antes de finalizar!'); // Mensagem mais clara
    } else {
        let tot = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;

        // Itera sobre os valores para calcular soma, maior e menor
        for (let pos in valores) {
            soma += valores[pos]; // Adiciona o valor atual à soma

            if (valores[pos] > maior) {
                maior = valores[pos];
            }
            if (valores[pos] < menor) {
                menor = valores[pos];
            }
        }

        let media = soma / tot; // Calcula a média

        res.innerHTML = ''; // Limpa o conteúdo anterior
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}.</p>`; // Formata a média para 2 casas decimais
    }
}
