// => ¡BIENVENIDOS! ÉSTA ES LA 2DA ETAPA DE UN E-COMMERCE DE TURISMO. <= //
// => FAVOR DE ABRIR LA CONSOLA EN EL NAVEGADOR ANTES DE EJECUTAR EL SIGUIENTE CÓDIGO. ¡MUCHAS GRACIAS! <= //

// PROMOCIONES //

const info = [
    "Momentáneamente se encuentran suspendidas las promociones, pronto volveremos a activarlas",
];

for (let i = 0; i < info.length; i++) {
    console.log(info[i]);
}

// INICIO //

alert("¡BIENVENIDOS A MENDOZA TOURS & WINES! En este momento nuestro sitio web se encuentra en reparación, por lo que nuestro asistente virtual te guiará en el proceso de compra. EN LA TABLA DE LA CONSOLA DEL NAVEGADOR PODRÁS VER NUESTRAS PROMOS ACTUALES.")

const carrito = [];

// Ordenar productos de menor a mayor $
const ordenarMenorMayor = () => {
    paquetes.sort((a,b)=> a.precio - b.precio);
    mostrarListaOrdenada();
}

// Ordenar productos de mayor a menor $
const ordenarMayorMenor = () => {
    paquetes.sort((a,b)=> b.precio - a.precio);
    mostrarListaOrdenada();
}

const mostrarListaOrdenada = () => {
    const listaOrdenada = paquetes.map(paquete => {
        return '- '+paquete.nombre+' $'+paquete.precio
    });
    alert('Lista de precios:'+'\n\n'+listaOrdenada.join('\n'))
    comprarPaquetes(listaOrdenada)
}

// COMPRA
const comprarPaquetes = (listaDePaquetes) => {
    let otroPaquete;
    let paqueteNombre = '';
    let paqueteCantidad = 0;

    do {
        paqueteNombre = prompt ('¿Qué paquete desea comprar?'+'\n\n'+listaDePaquetes.join('\n'));
        paqueteCantidad = parseInt(prompt('¿Para cuántas personas?'));

        const paquete = paquetes.find(paquete => paquete.nombre.toLowerCase() === paqueteNombre.toLowerCase());

        if (paquete) {
            agregarAlCarrito(paquete, paquete.id, paqueteCantidad)
        } else {
            alert('El paquete no se encuentra en el listado.')
        }

        otroPaquete = confirm('¿Desea agregar otro paquete?');
    } while (otroPaquete)

    confirmarCompra()
};

// Agregar al carrito
const agregarAlCarrito = (paquete, paqueteId, paqueteCantidad) => {
    const paqueteRepetido = carrito.find(paquete => paquete.id === paqueteId)
    if (!paqueteRepetido) {
        paquete.cantidad += paqueteCantidad
        carrito.push(paquete)
    } else {
        paqueteRepetido.cantidad += paqueteCantidad;
    }
}

// Eliminar del carrito
const eliminarPaqueteCarrito = (paqueteNombre) => {
    carrito.forEach((paquete, index) => {
        if (paquete.nombre.toLowerCase() === paqueteNombre) {
            if (paquete.cantidad > 1) {
                paquete.cantidad--
            } else {
                carrito.splice(index, 1);
            }
        }
    });
    confirmarCompra()
};

const confirmarCompra = () => {
    const listaDePaquetes = carrito.map(paquete => {
        return '- '+paquete.nombre+' | Cantidad: '+paquete.cantidad
    });
    const confirmar = confirm('Checkout: '
            +'\n\n'+listaDePaquetes.join('\n')
            +'\n\nPara continuar apretá ACEPTAR. Si querés eliminar productos del carrito, apretá CANCELAR. (Tené en cuenta que se elimina de a 1 unidad por vez)."'
    )
    if (confirmar) {
        finalizarCompra(listaDePaquetes)
    } else {
        const paqueteAEliminar = prompt('Ingrese el nombre del paquete a eliminar:')
        eliminarPaqueteCarrito(paqueteAEliminar)
    }
};

// FINALIZACIÓN
const finalizarCompra = (listaPaquetes) => {
    const cantidadTotal = carrito.reduce((acc, elemento) => acc + elemento.cantidad, 0)
    const precioTotal = carrito.reduce((acc, elemento) => acc + (elemento.precio * elemento.cantidad), 0)
    alert('Detalle de su compra: '
        +'\n\n'+listaPaquetes.join('\n')
        +'\n\nTotal de productos: '+cantidadTotal
        +'\n\nEl total de la compra es: $'+precioTotal
        +'\n\n¡Gracias por tu compra!'
    )
};

const comprar = () => {
    const paquetesBaratos = confirm("A continuación, verás la lista de paquetes disponibles. Si querés verlos del más barato al más caro, apretá ACEPTAR. Si querés las opciones más caras primero, apretá CANCELAR.")
    if (paquetesBaratos){
        ordenarMenorMayor();
    }else{
        ordenarMayorMenor();
    }
}

comprar();