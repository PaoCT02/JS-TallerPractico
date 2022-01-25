const precio = document.getElementById("precio");
const cupon = document.getElementById("cupon");
const resultado = document.getElementById("precioFinal");


const coupons = [
    {
        name: "Visitas",
        discount: 15,
    },
    {
        name: "Recomendacion",
        discount: 30,
    },
    {
        name: "Regalo",
        discount: 25,
    },
    {
        name: "Otros",
        discount: 100,
    },
]


function calcularPrecioFinal() {
    
    const precioValue = precio.value;
    const cuponValue = cupon.value;
    

    const cuponValido = function (coupon) {
        return coupon.name === cuponValue;
    };

    const userCoupon = coupons.find(cuponValido);
    
    if (!userCoupon) {
        alert("El cupón " + cuponValue + " no es válido");
    } else {

        const cuponValue = userCoupon.discount;
        const porcentaje = 100 - cuponValue;
        const precioConDescuento = (precioValue * porcentaje) / 100;
        resultado.innerText = "$ " + precioConDescuento;
    }


}

function cuponera(obj) {
    var objetos = ["Visitas", "Recomendacion", "Regalo", "Otros"];
    const valor = document.getElementById('cupon').value =  objetos[obj];
    return valor;
}