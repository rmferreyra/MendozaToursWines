const pintarPaquetes = (data) => {
    const contenedor = document.getElementById("paquete-contenedor");

    data.forEach(paquete => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML += `<div class="card-image">
                          <img src=${paquete.imagen}>
                          <span class="card-title">${paquete.nombre}</span>
                          <a class="btn-floating halfway-fab wabes-effect waves-light red"><i id=${paquete.id} class="material-icons agregar">add_shopping_cart</i></a>
                        </div>
                        <div class="card-content">
                            <p>${paquete.descripcion}</p>
                            <p>${paquete.precio}</p>
                        </div>
                       `
      contenedor.appendChild(div);
    });
  };