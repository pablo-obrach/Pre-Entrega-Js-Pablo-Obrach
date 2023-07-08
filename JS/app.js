function calcPorcentaje() {
  alert(
    "Elija un producto usando su letra correspondiente de la siguiente lista para saber el precio con el Dto de la semana: " +
      "\nA-Telvisor Plasma: $20.000 (tiene un 50% dto)" +
      "\nB-Lapto Lenovo: $10.000 (tiene un 30% dto)" +
      "\nC-Teclado Mecanico Nisuta: $5.000 (tiene un 10% dto)" +
      "\nIngrese 'F' para finalizar."
  );

  let producto;
  let total;
  const DTO_A = 20000 * 0.5;
  const DTO_B = 10000 * 0.3;
  const DTO_C = 5000 * 0.1;

  while (producto !== "F") {
    producto = prompt(
      "Cual producto desea? (escoja la letra correspondiente al producto)"
    );

    if (producto === null) {
      break;
    }

    producto = producto.toUpperCase();

    switch (producto) {
      case "A":
        total = 20000 - DTO_A; // Descuento del 50% para A
        alert(
          `El precio con el descuento es de ${total} \n si desea salir escriba "F"`
        );
        break;
      case "B":
        total = 10000 - DTO_B; // Descuento del 30% para B
        alert(
          `El precio con el descuento es de ${total} \n si desea salir escriba "F"`
        );
        break;
      case "C":
        total = 5000 - DTO_C; // Descuento del 10% para C
        alert(
          `El precio con el descuento es de ${total} \n si desea salir escriba "F"`
        );
        break;
      case "F":
        alert("Gracias por utilizar nuestros servicios, hasta la proxima!");
        break;
      default:
        alert(
          "El dato ingresado es incorrecto, ingrese la letra correspondiente al producto deseado"
        );
        break;
    }
  }
}

setTimeout(calcPorcentaje, 5000);
