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