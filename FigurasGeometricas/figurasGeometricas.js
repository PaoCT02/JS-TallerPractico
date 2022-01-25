




const PI = Math.PI;

//Cuadrado
const lado = document.getElementById("ladoCuadrado");
const resultado = document.getElementById("resultadoCuadrado");

function perimetroCuadrado() {

    const value = parseInt(lado.value);
    const perimetro = value * 4;
    resultado.textContent = perimetro;
}

function areaCuadrado() {
    const value = lado.value;
    const area = value * value;
    resultado.textContent = area;


}

//Triangulo

const ladoT = document.getElementById("ladoTriangulo");
const baseT = document.getElementById("baseTriangulo");
const alturaT = document.getElementById("alturaTriangulo");
const resultadoT = document.getElementById("resultadoTriangulo");

function perimetroTriangulo() {
    const value = parseInt(ladoT.value);
    const valorBase = parseInt(baseT.value);
    const perimetro = value + value + valorBase;
    resultadoT.textContent = perimetro;
}

function areaTriangulo() {
    const valorBase = parseInt(baseT.value);
    const valorAltura = parseInt(alturaT.value);
    const area = (valorBase * valorAltura) / 2;
    resultadoT.textContent = area;
}



//Circulo

const radio = document.getElementById("radio");
const resultadoCirculo = document.getElementById("resultadoCirculo");

function perimetroCirculo() {

    const value = parseInt(radio.value);
    const perimetro = (value * 2) * PI; // Usar funcion diametro * pi
    resultadoCirculo.textContent = perimetro;
}


function areaCirculo() {
        const valorRadio = parseInt(radio.value);
        const area = (valorRadio * valorRadio) * PI;
        resultadoCirculo.textContent = area;
}

function diametroCirculo() {
   
        const diametro = parseInt(radio.value * 2) ;
        resultadoCirculo.textContent = diametro;
}

//Triangulo isoseles

const lado1 = document.getElementById("lado1");
const lado2 = document.getElementById("lado2");
const baseIso = document.getElementById("baseIso");
const resultadoIso = document.getElementById("resultadoIso");

function trianguloIsoseles() {
    if (lado1.value === lado2.value) {
        const ladoPequeño = lado1.value;
        const basePequeño = baseIso.value / 2;

        const ladoPrincipal = ladoPequeño * ladoPequeño;
        const basePrincial = basePequeño * basePequeño;

        const altura = Math.sqrt(ladoPrincipal - basePrincial);
        resultadoIso.textContent = altura

    } else {
        alert("Error ambos lados deben ser iguales");
    }
}

//trianguloIsoseles(5, 5, 8); = 3 (resultado 9 raiz cuadrada 3 (sqrt lo hace))
