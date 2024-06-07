alert("¡Bienvenidos a credifacil!");
alert("Ingrese sus datos");
//ingreso de datos
function pedirNombre(){
    let ingreseSuNombre= prompt ("Ingrese su nombre");
let ingreseSuApellido= prompt ("Ingrese su apellido");
const VACIO = "";
if(ingreseSuNombre != VACIO && ingreseSuApellido != VACIO) {
    alert("Su nombre es " + ingreseSuNombre + " " + ingreseSuApellido)
}else{
    alert("Falta ingresar informacion")
    return pedirNombre();
}
}
pedirNombre ();
// Función para solicitar el préstamo
function calcularPrestamo() {
    const montoDelPrestamo = parseFloat(document.getElementById('montoDelPrestamo').value);
    const interesAnual = parseFloat(document.getElementById('interesAnual').value) / 100;
    const cantidadCuotas = parseInt(document.getElementById('cantidadCuotas').value);

    const interesMensual = interesAnual / 12;
    const cantidadPagos = cantidadCuotas;

    const pagoMensual = (montoDelPrestamo * interesMensual) / (1 - Math.pow(1 + interesMensual, -cantidadPagos));
    const pagoTotal = pagoMensual * cantidadPagos;

    document.getElementById('pagoMensual').innerText = `Pago mensual: $${pagoMensual.toFixed(2)}`;
    document.getElementById('pagoTotal').innerText = `Monto total pagado: $${pagoTotal.toFixed(2)}`;
}
