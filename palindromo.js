function verificar() {
    // lê o texto do input
    const texto = document.getElementById("texto").value;
    // divide o texto em letras, inverte e junta novamente
    const invertido = texto.split("").reverse().join("");

    // compara o texto inserido com o texto invertido
    if (texto === invertido) {
        // se forem iguais, é palíndromo
        document.getElementById("resultado").textContent = "É sim palíndromo!";
    } else {
        // se forem diferentes, não é palíndromo
        document.getElementById("resultado").textContent = "Não é palíndromo!";
    }
}

// limpa o campo de texto e o resultado
function clean() {
    document.getElementById("texto").value = "";
    document.getElementById("resultado").textContent = "";
}
