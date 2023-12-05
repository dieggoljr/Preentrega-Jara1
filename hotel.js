alert("Bienvenido al Hotel!!");

let nombre = prompt("Decinos tu nombre");
let cant_personas = parseInt(
  prompt(`Hola ${nombre}, ¿cuántas personas se van a estar hospedando?`)
);
if (isNaN(cant_personas)) {
  cant_personas = parseInt(
    prompt(`${nombre}, Ingrese CORRECTAMENTE la edad con un NÚMERO`)
  );
}
let total_edad = 0;
for (let i = 1; i <= cant_personas; i++) {
  let edad = parseInt(prompt(`Ingrese la edad de la ${i} persona`));
  console.log(edad);
  total_edad = total_edad + edad;
}
let promedio = total_edad / cant_personas;
console.log(`El promedio de edad de los visitantes es ${promedio}`);

if (promedio < 60) {
  console.log(`No califican a descuento de jubilados`);
  alert(`No califican a descuento de jubilados`);
} else if (promedio >= 60 && promedio < 70) {
  console.log(`Tienen descuento de jubilados del 10%`);
  alert(`Tienen descuento de jubilados del 10%!!`);
} else if (promedio >= 70 && promedio < 80) {
  console.log(`tienen descuento de jubilados del 20%`);
  alert(`tienen descuento de jubilados del 20%!!`);
} else if ((promedio) => 80) {
  console.log(`Tienen descuento de jubilado del 30%`);
  alert(`Tienen descuento de jubilado del 30%`);
}

function calcular_precio(
  cant_personas,
  cant_dias,
  precio_dia,
  descuento,
  operacion
) {
  switch (operacion) {
    case "*":
      return cant_personas * cant_dias * precio_dia * descuento;
    default:
      console.log("El caracter ingresado no es correcto");
      return "error en el ingreso del tercer parámetro";
  }
}

let result = calcular_precio(2, 2, 30, 0.9, "*");
console.log(`El costo de la estadía es de U$S ${result}`);

function habitación_standar() {
  let desayuno = prompt("Con o sin desayuno");
  let traslado = prompt(
    "¿Desea utilizar nuestro traslado desde y hasta el aeropuerto? Si/No"
  );
  eleccion_standar(desayuno, traslado);
}
function eleccion_standar(desayuno, traslado) {
  console.log(
    `Usted seleccionó una habitación standar ${desayuno} desayuno incluido. Y ${traslado} desea contar con traslado.`
  );
  alert(
    `Usted seleccionó una habitación standar ${desayuno} desayuno incluido. Y ${traslado} desea contar con traslado.`
  );
}

function habitación_suite() {
  let desayuno2 = prompt("Con o sin desayuno");
  let traslado2 = prompt(
    "¿Desea utilizar nuestro traslado desde y hasta el aeropuerto? Si/No"
  );
  eleccion_suite(desayuno2, traslado2);
}
function eleccion_suite(desayuno2, traslado2) {
  console.log(
    `Usted seleccionó una suite ${desayuno2} desayuno incluido. Y ${traslado2} desea contar con traslado.`
  );
  alert(
    `Usted seleccionó una suite ${desayuno2} desayuno incluido. Y ${traslado2} desea contar con traslado.`
  );
}

function menu() {
  let salir_menu = false;

  do {
    let opcion_ingresada = parseInt(
      prompt(`Elija su habitación
      1- Standar 
      2- Suite
      0- Salir del menú`)
    );
    switch (opcion_ingresada) {
      case 1:
        habitación_standar();
        alert("Disfrute su estadía!!");
        break;
      case 2:
        habitación_suite();
        alert("Disfrute su estadía!!");
        break;
      case 0:
        console.log(`Gracias por visitar nuestra página`);
        salir_menu = true;
        break;
      default:
        console.log("Opción no válida, ingrese alguna presente en el menú");
        alert("Opción no válida, ingrese alguna presente en el menú");
    }
  } while (!salir_menu);
  alert("Gracias por su visita!!");
}
menu();

//Me gustaría saber si con lo ya visto en el curso se puede hacer para que al poner la edad y el precio, se pueda calcular automáticamente el total con descuento si corresponde.
//De ser así, al corregir, por favor comentarme cómo lo podría haber hecho. O si todavía no hemos llegado a eso. Gracias.
