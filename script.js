// // Carne - 500 gr por pessoa + de 6 horas - 650 gr
// // Cerveja - 1200 ml por Pessoa + 6 horas - 2000 ml
// // Refrigerante/agua - 1000 ml por pessoa + 6 horas 1500ml
// // Crianças valem por 0,5


function calcular() {
    let adultos = Number(document.getElementById("adultos").value);
    let criancas = Number(document.getElementById("criancas").value);
    let duracao = Number(document.getElementById("duracao").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(adultos) || isNaN(criancas) || isNaN(duracao) || (adultos <= 0 && criancas <= 0)) {
        resultado.innerHTML = "<p>Por favor, preencha os campos corretamente.</p>";
        document.querySelector('.resultados').style.display = "block";
        return;
    }

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${(qdtTotalCarne / 1000).toFixed(2)} Kg de Carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de Refrigerante de 2L</p>`;

    // Mostra a div de resultados
    document.querySelector('.resultados').style.display = "block";
}

function limpar(){
    document.getElementById("adultos").value = '';
    document.getElementById("criancas").value = '';
    document.getElementById("duracao").value = '';
    document.querySelector('.resultados').style.display = "none";
}

function carnePP(duracao) {
    return duracao >= 6 ? 750 : 600;
}

function cervejaPP(duracao) {
    return duracao >= 6 ? 2000 : 1200;
}

function bebidasPP(duracao) {
    return duracao >= 6 ? 1500 : 1000;
}
