function calcPorcentaje() {
  alert(
    "Elija un producto usando su letra correspondiente de la siguiente lista para saber el precio con el Dto de la semana: " +
      "\nA- Telvisor Plasma: $20.000 (tiene un 50% dto)" +
      "\nB- Laptop Lenovo: $10.000 (tiene un 30% dto)" +
      "\nC- Teclado Mecanico Nisuta: $5.000 (tiene un 10% dto)" +
      "\nIngrese 'F' para finalizar."
  );

  // Declaro las variables a utilizar dentro del switch.

  let producto;
  let total;
  let telePlasma = 20000;
  let laptopLenovo = 10000;
  let tecladoNisuta = 5000;

  //declaro las const con el Dto que dan como resultado el valor en base a cada producto.

  const DTO_A = telePlasma * 0.5;
  const DTO_B = laptopLenovo * 0.3;
  const DTO_C = tecladoNisuta * 0.1;

  //Aqui creo un bucle para que el usuario pueda elegir entre 1 o mas productos hasta que el mismo introdusca F para salir.
  while (producto !== "F") {
    producto = prompt(
      `Cual producto desea? Escoja la letra correspondiente: \nA- Tele Plasma Samsung \nB- Laptop Lenovo \nC- Teclado Mecanico Nisuta \n si desea salir escriba 'F' o puede oprimir el boton cancelar.`
    );

    //Aqui uso un condicional por si el usuario cancela el prompt.
    if (producto === null) {
      alert("Gracias por utilizar nuestros servicios, hasta la proxima!");
      break;
    }

    /*luego para que no haya errores(ya que me tiraba error cuando usababa el metodo toUpperCase dentro del prompt) 
    llamo a producto y le aplico el metodo correspondiente. */

    producto = producto.toUpperCase();

    //Inicia el bucle despues de que se verifico que el prompt no sea null y con el metodo toUpperCase evito errores de inputs en minusculas.

    switch (producto) {
      case "A":
        total = telePlasma - DTO_A;
        alert(
          `El precio de la Television Plasma Samsung con el descuento es de $${total}. \nEsperamos su compra ¡gracias por elegirnos!`
        );
        break;
      case "B":
        total = laptopLenovo - DTO_B;
        alert(
          `El precio de la Laptop Lenovo con el descuento es de $${total}. \nEsperamos su compra ¡gracias por elegirnos!`
        );
        break;
      case "C":
        total = tecladoNisuta - DTO_C;
        alert(
          `El precio del teclado Nisuta con el descuento es de $${total}. \nEsperamos su compra ¡gracias por elegirnos!`
        );
        break;
      case "F":
        alert("Gracias por utilizar nuestros servicios, hasta la proxima!");
        // Declaro un mensaje de salida para el usuario.
        break;
      default:
        alert(
          `El dato ingresado es incorrecto, ingrese la letra correspondiente al producto deseado.`
          // Declaro un default para cualquier caso que no sea el correspondiente
        );
        break;
    }
  }
}

// Utilizo el metodo setTimeout para cargar el sitio (se que no lo pidieron pero me parecio mas correcto hacerlo de esta manera)
setTimeout(calcPorcentaje, 4000);
