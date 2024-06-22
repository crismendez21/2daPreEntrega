document.addEventListener('DOMContentLoaded', cargarConfigPrestamo);
document.getElementById('calcularBoton').addEventListener('click', calcularPrestamo);
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    
    const img = document.createElement('img');
    img.src = 'imagen.jpg'; 
    img.alt = 'Logo pagina';

    const title = document.createElement('h1');
    title.textContent = 'BANCO CREDICOOP';

    header.appendChild(img);
    header.appendChild(title);
});

const configuracionPrestamo = [
    {
        montoPrestamo: 100000,
        interesAnual: 90,
        cantidadCuotas: 12
    },
    {
        montoPrestamo: 10000,
        interesAnual: 90,
        cantidadCuotas: 12
    }
];

function cargarConfigPrestamo() {
    const configGuardada = localStorage.getItem('configPrestamo');
    if (configGuardada) {
        const configPrestamo = JSON.parse(configGuardada);
        document.getElementById('montoPrestamo').value = configPrestamo.montoPrestamo;
        document.getElementById('interesAnual').value = configPrestamo.interesAnual;
        document.getElementById('cantidadCuotas').value = configPrestamo.cantidadCuotas;
    } else {
        const configPrestamo = configuracionPrestamo[0];
        document.getElementById('montoPrestamo').value = configPrestamo.montoPrestamo;
        document.getElementById('interesAnual').value = configPrestamo.interesAnual;
        document.getElementById('cantidadCuotas').value = configPrestamo.cantidadCuotas;
    }
}

function calcularPrestamo() {
    const montoPrestamo = parseFloat(document.getElementById('montoPrestamo').value);
    const interesAnual = parseFloat(document.getElementById('interesAnual').value) / 100;
    const cantidadCuotas = parseInt(document.getElementById('cantidadCuotas').value);

    const interesMensual = interesAnual / 12;
    const numeroDeCuotas = cantidadCuotas;

    const pagoMensual = (montoPrestamo * interesMensual) / (1 - Math.pow(1 + interesMensual, -numeroDeCuotas));
    const pagoTotal = pagoMensual * numeroDeCuotas;

    document.getElementById('pagoMensual').innerText = `Pago mensual: $${pagoMensual.toFixed(2)}`;
    document.getElementById('pagoTotal').innerText = `Monto total pagado: $${pagoTotal.toFixed(2)}`;

    document.getElementById('result').style.display = 'block';

    const configPrestamo = {
        montoPrestamo: montoPrestamo,
        interesAnual: interesAnual * 100,
        cantidadCuotas: cantidadCuotas
    };
    localStorage.setItem('configPrestamo', JSON.stringify(configPrestamo));
}

