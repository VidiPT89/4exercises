// codigo de identificar
function converter() {
    let valor = parseFloat(document.getElementById("valor").value);
    let tipo = document.getElementById("tipo").value;
    let resultado = document.getElementById("resultado");

    // codigo para escrever o que utilizador quer
    if (!valor && valor !== 0) {
        resultado.textContent = "Escreve um numero";
        return;
    }

    // codigo da formula
    if (tipo === "cf") {
        resultado.textContent = ((valor * 9) / 5 + 32).toFixed(2) + " ºF";
    } else if (tipo === "fc") {
        resultado.textContent = (((valor - 32) * 5) / 9).toFixed(2) + " ºC";
    }
}

// codigo para limpar o que estiver em valor e resultado
function limpar() {
    document.getElementById("valor").value = "";
    document.getElementById("resultado").textContent = "";
}
