// Código del cuadrado
//console.group("Cuadrados"); console.groupEnd(); Agrupa resultados en consola
// Aquí interactuamos con el HTML

const lado = document.getElementById("lado");
const base = document.getElementById("base");
const radio = document.getElementById("radio");
const altura = document.getElementById("altura");
const resultado = document.getElementById("resultado");
const PI = Math.PI;
console.log("PI es: " + PI);

function calcularPerimetro() {

    let figura = document.getElementById("figuras");
    let opcion = figura.value;

    if (opcion === 'cuadrado') {

        const value = lado.value;
        const perimetro = value * 4;


        resultado.textContent = perimetro;

    } else if (opcion === 'triangulo') {

        const value = parseInt(lado.value);
        const valorBase = parseInt(base.value);
        const perimetro = value + value + valorBase;
        resultado.textContent = perimetro;

    } else if (opcion === 'circulo') {

        const value = parseInt(radio.value);
        //const valor = diametroCirculo();
        //const perimetro = valor * PI
        const perimetro = (value * 2) * PI; // Usar funcion diametro * pi
        
        resultado.textContent = perimetro;

    } else if (opcion === 'trianguloIsoseles') {
        alert("IOS");

    } else {
        opcion.textContent = 'Nones';
        alert("Ponga algo");
    }

}

//Area

function calcularArea() {
    let figura = document.getElementById("figuras");
    let opcion = figura.value;

    if (opcion === 'cuadrado') {

        const value = lado.value;
        const area = value * value;
        resultado.textContent = area;

    } else if (opcion === 'triangulo') {

        const valorBase = parseInt(base.value);
        const valorAltura = parseInt(altura.value);
        const area = (valorBase * valorAltura) / 2;
        resultado.textContent = area;

    } else if (opcion === 'circulo'){

        const valorRadio = parseInt(radio.value);
        const area = (valorRadio * valorRadio) * PI;
        resultado.textContent = area;
         
    }
}



// Diámetro Circulo
function diametroCirculo() {
    let figura = document.getElementById("figuras");
    let opcion = figura.value;

    const value = radio.value;

    if (opcion === 'circulo') {

        const diametro = value * 2;
        resultado.textContent = diametro;
      
    }

}

//Triangulo isoseles

function trianguloIsoseles(lado1, lado2, base) {
    if (lado1 === lado2) {
        const ladoPequeño = lado1;
        const basePequeño = base / 2;

        const ladoPrincipal = ladoPequeño * ladoPequeño;
        const basePrincial = basePequeño * basePequeño;

        const altura = Math.sqrt(ladoPrincipal - basePrincial);
        return altura;

    } else {
        console.log("Error ambos lados deben ser iguales");
    }
}

trianguloIsoseles(5, 5, 8);

