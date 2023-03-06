

function CalcularIMC(){
    debugger;
    var altura = document.getElementById('txtAltura').value;
    var peso = document.getElementById('txtPeso').value;

if (!ValidaDadosPreenchidos(peso, altura)){
    alert("Os campos Altura e Peso devem ser preenchidos")
}
else{
    var imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

    var mensagemIMC =  AvaliaIMC(imc);
    alert("Seu IMC eh: " + imc  + mensagemIMC);

}
}

function ValidaDadosPreenchidos(peso, altura){
var camposPreenchidos = true;

    if (peso == "" || altura == "")
    {
        camposPreenchidos = false;
    }
    return camposPreenchidos;
}

function AvaliaIMC(imc){

if (imc < 18.5){
    return " (Magreza)";
} else if ( imc >= 18.5 && imc < 24.9) {
    return " (Normal)";
} else if ( imc >= 24.9 && imc < 30) {
    return " (Sobrepeso)";
} else {
    return " (Obesidade)";
}
}

window.onload = function () {
    document
        .querySelector("button")
        .addEventListener("click", CalcularIMC);
}

