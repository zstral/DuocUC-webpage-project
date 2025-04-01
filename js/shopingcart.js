$(document).ready(function() {
    cargarCarrito();

    $('#vaciar').on('click', function() {
      vaciarCarrito();
    });

    function cargarCarrito() {
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      let $listaCarrito = $('#lista-carrito');
      let $totalElemento = $('#total');

      $listaCarrito.empty();

      let total = 0;
      carrito.forEach((producto, index) => {

        let $item = $('<li></li>').text(`${producto.name} | $${producto.price}`);
        
        let $botonEliminar = $('<button class="boton-eliminar"></button>')
          .text('❌')
          .on('click', () => eliminarDelCarrito(index));
        
        $item.append($botonEliminar);
        
        $listaCarrito.append($item);
        
        total += producto.price;
      });

      $totalElemento.text(total.toFixed(0));
    }

    function eliminarDelCarrito(index) {
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.splice(index, 1);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      cargarCarrito();
    }

    function vaciarCarrito() {
      localStorage.removeItem("carrito");
      cargarCarrito();
    }
  });