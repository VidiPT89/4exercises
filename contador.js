function contador() {
    // lê o texto do input e passa tudo para minúsculas
    let texto = document.getElementById("texto").value.toLowerCase();
    // agarra o elemento onde será mostrado o resultado
    let resultado = document.getElementById("resultado");
    // string com todas as vogais
    let vogais = "aeiou";
    // contador de vogais
    let total = 0;

    // percorre cada letra do texto
    for (let i = 0; i < texto.length; i++) {
        // verifica se a letra está dentro da string 'vogais'
        if (vogais.includes(texto[i])) {
            total++; // se for vogal, soma 1
        }
    }

    // mostra o total de vogais
    document.getElementById("resultado").textContent =
        "O total de vogais: " + total;
}

// limpa o input do texto e do resultado
function clean() {
    document.getElementById("texto").value = "";
    document.getElementById("resultado").textContent = "";
}
