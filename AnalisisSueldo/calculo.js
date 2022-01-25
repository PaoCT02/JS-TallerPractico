const ingreso = document.getElementById("sueldo")
const gastos = document.getElementById("gastos")
const endeudamiento = document.getElementById("endeudamiento");

function calcularEndeudamiento() {

    if (ingreso.value === "" || gastos.value === "") {
    alert("Ponga texto valido!");

  } else {

    const ingresoNeto =  ingreso.value  - gastos.value;
    const resultado = ingresoNeto * 0.4 ;
    endeudamiento.innerHTML = "$ " + resultado;
      
    }
        
    ingreso.value = ""; 
    gastos.value = " ";
  }


