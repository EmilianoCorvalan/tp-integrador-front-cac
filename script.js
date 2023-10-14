function calcTotal() {
  const precioTicket = 1000;
  let cantidadTickets = parseInt(
    document.getElementById("cantidadTickets").value
  );
  let descuento = parseInt(document.getElementById("descuento").value);

  totalSinDescuento = precioTicket * cantidadTickets;
  totalConDescuento = totalSinDescuento - (totalSinDescuento * descuento) / 100;

    
  console.log(totalSinDescuento);
  console.log(totalConDescuento);
}

function validarDescuento() {
  var descuentoSeleccionado = parseInt(
    document.getElementById("descuento").value
  );

  if (descuentoSeleccionado > 0) {
      calcTotal();
      var total = document.querySelector(".precioTotal");
      total.classList.add("bg-info", "text-center", "p-2")
      total.innerHTML = "<p>Total con descuento: " + totalConDescuento;
      
  } else {
    alert("Por favor, selecciona un descuento válido.");
  }
}