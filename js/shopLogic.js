//Función que añade un producto al carrito

$(document).ready(function() {
    $('.add').on('click', function() {
      var name = $(this).data('name');
      var price = parseFloat($(this).data('price'));

      var carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push({ name, price });
      localStorage.setItem("carrito", JSON.stringify(carrito));

      alert(`${name} agregado al carrito ✅`);
    });
  });