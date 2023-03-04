const paqueteContenedor = document.getElementById('paquete-contenedor')

let carrito = []

paqueteContenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('agregar')) {
        validarPaqueteEnCarrito(e.target.id)
    }
})

const validarPaqueteEnCarrito = (paqueteId) => {
    const estaRepetido = carrito.some(paquete => paquete.id == paqueteId)

    if (estaRepetido) {
        const paquete = carrito.find(paquete => paquete.id == paqueteId)
        paquete.cantidad++
        const cantidad = document.getElementById(`cantidad${paquete.id}`)
        cantidad.innerText = `Cantidad: ${paquete.cantidad}`
        actualizarTotalesCarrito(carrito)
    } else {
        const paquete = paquetes.find(paquete => paquete.id == paqueteId)
        carrito.push(paquete)
        pintarPaqueteEnCarrito(paquete)
        actualizarTotalesCarrito(carrito)
    }
};

const pintarPaqueteEnCarrito = (paquete) => {
    const contenedor = document.getElementById('carrito-contenedor')
    const div = document.createElement('div')
    div.classList.add('paqueteEnCarrito')
    div.innerHTML = `
        <p>${paquete.nombre}</p>
        <p>Precio: ${paquete.precio}</p>
        <p id=cantidad${paquete.id}>Cantidad: ${paquete.cantidad}</p>
        <button class="btn waves-effect waves-ligth boton-eliminar" value="${paquete.id}">X</button>
    `
    contenedor.appendChild(div)
};

const pintarCarrito = (carrito) => {
    const contenedor = document.getElementById('carrito-contenedor')

    contenedor.innerHTML = ''

    carrito.forEach(paquete => {
        const div = document.createElement('div')
        div.classList.add('paqueteEnCarrito')
        div.innerHTML = `
            <p>${paquete.nombre}</p>
            <p>Precio: ${paquete.precio}</p>
            <p id=cantidad${paquete.id}>Cantidad: ${paquete.cantidad}</p>
            <button class="btn waves-effect waves-ligth boton-eliminar" value="${paquete.id}">X</button>
        `
        contenedor.appendChild(div)
    });
};

const eliminarPaqueteCarrito = (paqueteId) => {
    const index = carrito.findIndex(paquete => paquete.id == paqueteId)
    carrito.splice(index, 1)
    pintarCarrito(carrito)
    actualizarTotalesCarrito(carrito)
};

const actualizarTotalesCarrito = (carrito) => {
    const totalCantidad = carrito.reduce((acc, paq) => acc + paq.cantidad, 0)
    const totalCompra = carrito.reduce((acc, paq) => acc + (paq.precio * paq.cantidad), 0)

    const contadorCarrito = document.getElementById('contador-carrito')
    const precioTotal = document.getElementById('precioTotal')

    contadorCarrito.innerText = totalCantidad
    precioTotal.innerText = totalCompra

    guardarCarritoStorage(carrito)
};

const guardarCarritoStorage = (carrito) => {
    console.log(carrito)
    localStorage.setItem('carrito', JSON.stringify(carrito))
};

const obtenerCarritoStorage = () => {
    const carritoStorage = JSON.parse(localStorage.getItem('carrito'))
    return carritoStorage
};

if (localStorage.getItem('carrito')) {
    carrito = obtenerCarritoStorage()
    pintarCarrito(carrito)
    actualizarTotalesCarrito(carrito)
}