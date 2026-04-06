function verificar() {
    // lê a primeira palavra, passa para minúsculas e remove os espaços
    let a = document
        .getElementById("palavra1")
        .value.toLowerCase()
        .replace(/ /g, "");

    // lê a segunda palavra, passa para minúsculas e remove os espaços
    let b = document
        .getElementById("palavra2")
        .value.toLowerCase()
        .replace(/ /g, "");

    // divide em letras, ordena e junta novamente
    a = a.split("").sort().join("");
    b = b.split("").sort().join("");

    // compara as duas palavras
    document.getElementById("resultado").textContent =
        a === b ? "Boa! São anagramas!" : "Ups... Não são anagramas!";
}

// limpa o campo da primeira e segunda palavra, e do resultado
function clean() {
    document.getElementById("palavra1").value = "";
    document.getElementById("palavra2").value = "";
    document.getElementById("resultado").textContent = "";
}
