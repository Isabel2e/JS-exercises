let firstName = 'Maria'
let lastName = 'Pablo'
let country = 'México'
let city = 'Solidaridad'
let age = 19
let isMarried = false
let year = 2023

console.log(typeof firstName) //String
console.log(typeof lastName)  //String
console.log(typeof country)   //String
console.log(typeof city)      //String
console.log(typeof age)       //number
console.log(typeof isMarried) //boolean
console.log(typeof year)      //number

// '10' es igual a 10
console.log(typeof '10' == typeof 10)   //False

// parseInt ('9.8') es igual a 10
console.log(parseInt('9.8')==10)      //False ya que 9.8 no se redondea

// Verificar valores Booleanos (true o false).
var booleanValue = true;
console.log(booleanValue); // Devolverá true
// Verdaderos
console.log(20 <= 30)
console.log('Inmortal'.length == 'Disparar'.length)
console.log(undefined == null)

// Falsos
console.log(150 >= 1500)
console.log('Sapo'.length != 'Casa'.length)
console.log(undefined === null)

// Resultado de expresiones.

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')

// Objetos Date


// Obtener la fecha y hora actual
const fechaActual = new Date();

// Obtener el año actual
const añoActual = fechaActual.getFullYear();

// Obtener el mes actual (0 = enero, 1 = febrero, ..., 11 = diciembre)
const mesActual = fechaActual.getMonth() + 1; // Sumamos 1 para obtener un número del 1 al 12.

// Obtener el día del mes actual
const diaActual = fechaActual.getDate();

// Obtener el día de la semana actual (0 = domingo, 1 = lunes, ..., 6 = sábado)
const diaSemanaActual = fechaActual.getDay();

// Obtener la hora actual
const horaActual = fechaActual.getHours();

// Obtener los minutos actuales
const minutosActuales = fechaActual.getMinutes();

// Obtener los segundos transcurridos desde el 1 de enero de 1970
const segundosDesde1970 = fechaActual.getTime() / 1000;

// Imprimir los resultados
console.log("¿Qué año es hoy?", añoActual);
console.log("¿Qué mes es hoy con un número?", mesActual);
console.log("¿Qué fecha es hoy?", diaActual);
console.log("¿Qué día es hoy con un número?", diaSemanaActual);
console.log("¿Cuál es la hora actual?", horaActual);
console.log("¿Cuántos minutos hay actualmente?", minutosActuales);
console.log("Número de segundos transcurridos desde el 1 de enero de 1970 hasta ahora:", segundosDesde1970);




// Área de un triángulo

let base = parseInt(prompt('Ingrese la base.'))
let altura = parseInt(prompt('Ingrese la altura.'))
let area = 0.5 * base * altura

console.log('El área de un triángulo es: '+area)

// Calcular el perimetro de un triangulo

let l1 = parseInt(prompt('Ingrese el lado 1.'))
let l2 = parseInt(prompt('Ingrese el lado 2.'))
let l3 = parseInt(prompt('Ingrese el lado 3.'))
let perimetro = l1 + l2 + l3

console.log('El perimetro de tu triángulo es: '+perimetro)