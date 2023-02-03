// => ¡BIENVENIDOS! ÉSTA ES LA 1RA ETAPA DE UN E-COMMERCE DE TURISMO. <= //
// => FAVOR DE ABRIR LA CONSOLA EN EL NAVEGADOR ANTES DE EJECUTAR EL SIGUIENTE CÓDIGO. ¡MUCHAS GRACIAS! <= //

// PAQUETES//

function paquete (tipo, zona, actividad) {
    this.tipo = tipo;
    this.zona = zona;
    this.actividad = actividad;
}

const paquete1 = new paquete ("Tour=$7500", "altaMontagna", "Caminata")
const paquete2 = new paquete ("Bodega=$2500", "valleDeUco", "visitaGuiada")
const paquete3 = new paquete ("Restaurant=$5000", "ciudadMendoza", "Almuerzo")
const paquete4 = new paquete ("Globo=$10000", "Este", "paseoEnGlobo")


console.table(paquete1)
console.table(paquete2)
console.table(paquete3)
console.table(paquete4)

// PROMOCIONES //

const info = [
    "Tenés descuento por compra mayor a $20000",
    "Te buscamos gratis por compra mayor a $15000",
    "Podés pagar en 3, 6 o 12 cuotas",
];

for (let i = 0; i < info.length; i++) {
    console.table(info[i]);
}

// INICIO //

alert("¡BIENVENIDOS A MENDOZA TOURS & WINES! En este momento nuestro sitio web se encuentra en reparación, por lo que nuestro asistente virtual te guiará en el proceso de compra. EN LA TABLA DE LA CONSOLA DEL NAVEGADOR PODRÁS VER NUESTRAS OPCIONES Y PROMOS ACTUALES.")

const comprarPack = () => {
    let pack = ""
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = false
    do {
        pack = prompt("¿Qué te gustaría adquirir: Tour, Bodega, Restaurant o Globo?")
        cantidad = parseInt(prompt("¿Para cuántas personas?"))

        switch (pack) {
            case "Tour":
                precio = 7500
                break;
            case "Bodega":
                precio = 2500
                break;
            case "Restaurant":
                precio = 5000
                break;
            case "Globo":
                precio = 10000
                break;
            default:
                alert("Actualmente sólo contamos con Tours, Bodegas, Restaurantes o Globos")
                precio = 0
                cantidad = 0             
        }
        subtotal += precio * cantidad
        seguirComprando = confirm("¿Querés agregar algo más a tu viaje?")
    } while (seguirComprando);
        return subtotal
};

// DESCUENTOS //

const aplicarDescuento = (subtotal) => {
    if (subtotal >= 20000) {
        const totalConDescuento = subtotal * 0.85
        alert("Tenés un descuento por el valor de la compra, lo verás al finalizar la operación. Subtotal de la compra: $"+subtotal)
        return totalConDescuento
    } else {
        return subtotal
    }
};

// TRANSFER //

const calcularTransfer = (subtotal) => {
    const quiereTransfer = confirm("¿Querés que te busquemos en el Aeropuerto o Terminal?")
    if (quiereTransfer && subtotal >= 15000) {
        alert("Te buscamos gratis. El subtotal de tu compra es: $"+subtotal)
    } else if (quiereTransfer && subtotal < 15000) {
        subtotal += 5000
        alert("El subtotal de tu compra más el costo del transporte es: $"+subtotal)
    } else {
        alert("El subtotal de tu compra es: $"+subtotal)
    }
        return subtotal
};

// PAGO EN CUOTAS //

const calcularCantidadCuotas = () => {
    let cuotas = 1
    let escogerCuotas =  false
    const quiereCuotas = confirm("Querés pagar en cuotas tu compra?")
    if (quiereCuotas) {
        do {
            cuotas = parseInt(prompt("Podés hacerlo en 3, 6 o 12 cuotas"))
            switch (cuotas) {
                case 3:
                case 6:
                case 12:
                    return cuotas
                default:
                     alert("La cantidad de cuotas no es posible")
        }
        escogerCuotas = true
        } while (escogerCuotas);
    } else {
        return cuotas
    }
};

// DETALLE FINAL //

const mostrarDetalleCompra = (total, cuotas) => {
    let valorCuota = total / cuotas
    alert("¡MUCHAS GRACIAS POR ELEGIRNOS! Nos vemos pronto. El total a pagar es: $"+total+" en "+cuotas+" cuotas de: $"+valorCuota.toFixed(2))
}

const subtotal = comprarPack()
const subtotalConDescuento = aplicarDescuento(subtotal)
const subtotalConTransfer = calcularTransfer(subtotalConDescuento)
const cuotas = calcularCantidadCuotas()
    mostrarDetalleCompra(subtotalConTransfer, cuotas)