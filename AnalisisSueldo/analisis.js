//Helpers

function esPar(numerito){
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const  promedioLista = sumaLista / lista.length;
    return promedioLista;
}

// Calculadora de mediana

function medianaSalarios(lista){
    const mitad  = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    }else{
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

//Mediana Geneal
const salariosCol = peru.map(
    function (personita){
        return personita.salary;
    }
);

const salariosColSorted  = salariosCol.sort(
    function (salaryA,salaryB){
        return salaryA - salaryB;
    }
);

const medianaGeneralCol = medianaSalarios(salariosColSorted);

//Mediana del top 10%

const spliceStar = (salariosColSorted.length * 90) / 100;
const spliceCount = (salariosColSorted.length - spliceStar);

const salarioColTop10 = salariosColSorted.splice(
    spliceStar,
    spliceCount,
);

const medianaTop10Col = medianaSalarios(salarioColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
    salarioColTop10
});

/*

Puedes calcular la mediana de ingresos no fijos, capacidad de 
ahorro, capacidad de endeudamiento, recolección de impuestos, 
diferencia salarial, relación entre formalidad/informalidad y 
pobreza/riqueza…

*/