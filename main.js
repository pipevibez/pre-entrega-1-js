// Pre-Entrega 1: Primeros pasos con JavaScript
// Proyecto: Cotizador Web Básico

const nombreProyecto = "Cotizador Web Básico";
const anioActual = new Date().getFullYear();
const precioBase = 400;
const precioPorPagina = 80;

let nombreUsuario = prompt("¿Cuál es tu nombre?");
let anioNacimiento = Number(prompt("¿En qué año naciste?"));
let tipoProyecto = prompt("¿Qué tipo de proyecto web querés cotizar?");
let cantidadPaginas = Number(prompt("¿Cuántas páginas tendrá el sitio?"));

let edadUsuario = anioActual - anioNacimiento;
let presupuestoEstimado = precioBase + cantidadPaginas * precioPorPagina;

let mensajeFinal =
  "Hola " + nombreUsuario + ". " +
  "Tenés aproximadamente " + edadUsuario + " años. " +
  "El presupuesto estimado para tu proyecto de tipo " + tipoProyecto +
  " es de USD " + presupuestoEstimado + ".";

console.log("Proyecto:", nombreProyecto);
console.log("Nombre del usuario:", nombreUsuario);
console.log("Año de nacimiento:", anioNacimiento);
console.log("Edad aproximada:", edadUsuario);
console.log("Tipo de proyecto:", tipoProyecto);
console.log("Cantidad de páginas:", cantidadPaginas);
console.log("Presupuesto estimado:", presupuestoEstimado);
console.log("Mensaje final:", mensajeFinal);

alert(mensajeFinal);