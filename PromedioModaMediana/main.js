/*Promedio--> o media aritmética (aunque hay varios tipos de promedio) = sumatoria de X cantidad de números dividido entre X cantidad de números
Mediana = ordenar elementos de menor a mayor, y buscar el dato que este justo a la mitad (si es impar, es un número, si es par serán dos números sumados y dividido entre 2)
Moda = el elemento que más se repite
Promedio Pronderado = Este es un promedio muy similar a la media aritmética, pero nos permite definir también el peso, importancia o relevancia de cada elemento en nuestro conjunto de números.
Un caso de uso de la media ponderada es el cálculo de notas académicas cuando cada materia o asignatura otorga diferentes “créditos”.
*/
const resultado = document.getElementById("resultado");

//Promedio



function calcularMediaAritmetica() {

  if (valores.length === 0) {

    alert("Indique lista a Calcular");
  }

  else {
    const sumarLista = valores.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );

    const promedioLista = sumarLista / valores.length;
    resultado.innerHTML = "El resultado es: " + promedioLista;

  }


}


//Mediana


function calcularMediana() {

  if (valores.length === 0) {

    alert("Indique lista a Calcular");
  } else {
    valores.sort((a, b) => a - b);
    const mitadLista1 = parseInt(valores.length / 2);

    function esPar(numero) {
      if (numero % 2 === 0) {
        return true;
      } else {
        return false;
      }
    }

    let mediana;
    if (esPar(valores.length)) {
      const elemento1 = valores[mitadLista1 - 1];
      const elemento2 = valores[mitadLista1];

      const promedioElemento1y2 = (elemento1 + elemento2) / 2
      mediana = promedioElemento1y2;
    } else {
      mediana = valores[mitadLista1];
    }
    resultado.innerHTML = "El resultado es: " + mediana;
  }

}

//Moda

function calcularModa() {

  if (valores.length === 0) {

    alert("Indique lista a Calcular");
  } else {
    const lista1Count = {};
    valores.map(
      function (elemento) {
        if (lista1Count[elemento]) {
          lista1Count[elemento] += 1;
        } else {
          lista1Count[elemento] = 1;
        }
      }
    );

    const listaArray = Object.entries(lista1Count).sort(
      function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
      }
    );

    const moda = listaArray[listaArray.length - 1];
    resultado.innerHTML = "El resultado es: " + moda[0] + " y se repite  " + moda[1] + " veces";;
  }


}


//Promedio Ponderado

const credito = 5;
function calcularPonderado() {
  if (valores.length === 0) {

    alert("Indique lista a Calcular");
  } else {
    const notesWithCredit = valores.map(function (notas) {
      return notas * credito

    });

    const multiplicacion = notesWithCredit.map(function (notesWithCredit) {
      return notesWithCredit = notesWithCredit + credito
    });

    const reducer = (accumulator, curr) => accumulator + curr;
    const resultadoSuma = multiplicacion.reduce(reducer)
    //console.log(resultadoSuma);

    const sumaCreditos = credito * multiplicacion.length
    //console.log(sumaCreditos)

    const resultadoFinal = parseInt(resultadoSuma) / parseInt(sumaCreditos);
    resultado.innerText = "El resultado es: " + resultadoFinal
  }
}


// Lista


valores = [];
function agregarLista() {

  const element = document.getElementById('nota');
  const value = parseInt(element.value);
  element.value = '';

  if (Number.isNaN(value) || value < 0) {
    alert('Ingrese un valor válido para la lista de números');
    return false;
  }

  valores.push(value);
  renderList(valores);
}


function renderList(valores) {
  l = document.getElementById('listaDeValores');
  l.innerHTML = '';

  valores.forEach((element) => {
    const listElement = document.createElement('div');
    listElement.innerHTML = `${element}`;

    l.appendChild(listElement);
    
  });
}

console.log(valores); 


function borrarTodo() {
  const borraBoton = document.getElementById("listaDeValores")
  borraBoton.removeChild(borraBoton.children[0])
  borraBoton.innerHTML = '';
  resultado.innerHTML = "El resultado es: ";
  return valores.length = []
  
}

