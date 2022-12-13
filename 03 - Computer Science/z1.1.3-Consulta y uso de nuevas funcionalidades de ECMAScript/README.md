# Consulta y uso de nuevas funcionalidades de ECMAScript

## ES6

Es la versión en la que se incorporaron grandes cambios y mejoras al lenguaje.

## Mejoras que surgieron en ES6

### 1 → Nueva forma para declarar variables

**Variable** → Las variables son espacios donde podemos guardar un valor y asociarlo a un determinado nombre, con el fin de poder reusarlo, actualizarlo o simplemente registrarlo.

Anteriormente utilizábamos la palabra reservada `var` para declarar variables; a partir de ES6 surgen nuevas formar de declarar variables `let` y `const` resolviendo varios problemas que se tenían con var como el scope, hoisting, variables globales, re-declaración y re-asignación de variables.

**Variables re-declaradas y re-asignadas**

**Re-asignación de una variable →** Volver a asignar un valor a una variable. 

**Re-declaración de una variable →** Volver a declarar una variable.

Cada palabra reservada tiene una forma diferente de manejar varibales:

- Una variable declarada con `var` puede ser re-declarada y re-asignada.
- Una variable declarada con `let` puede ser re-asignada, pero no re-declarada.
- Una variable declarada con `const` no puede ser re-declarada, ni re-asignada. Su declaración y asignación debe ser en una línea, caso contrario habrá un error.

**Ejemplo de declaración y asignación de una variable.**

```jsx
// Declaración de una variable
//Cuando no le asginamos un valor a una variable cuando la declaramos, JavaScript
// le asigna un valor de undefined
var nombre;
let animal;

// Asignación de una variable
nombre = 'Pedro';
animal = 'Mapache';

// Declaración y asignación en una línea
let comida = 'Chocolate';
```

**Ejemplo de re-asignación de una variable**

```jsx
// Re-asignación de variables
var apellido = 'Hamilton';
apellido = 'Verstappen';
console.log(apellido) // 'Verstappen'

let color = 'Azúl';
color = 'Verde';
console.log(color) // 'Verde'

const pelicula = 'The avengers';
pelicula = 'X-men';
console.log(pelicula) // TypeError: Assignment to constant variable.
```

**Ejemplo de re-declaración de una variable**

```jsx
// Re-declaración de variables
var apellido = 'Hamilton';
let color = 'Azúl';
const pelicula = 'The avengers';

var apellido = 'Verstappen';
console.log(apellido) // 'Verstappen'

let color = 'Verde';
console.log(color) // SyntaxError: Identifier 'color' has already been declared

const pelicula = 'X-men';
console.log(pelicula) // SyntaxError: Identifier 'pelicula' has already been declared
```

**Scope**

`let` y `const` tienen un scope de bloque y `var` no.

```jsx
// SCOPE

function frutas() {
  if(true){
    var fruta1 = "manzana"; // function scope
    let fruta2 = "uva"; // block scope
    const fruta3 = "naranja" // block scope
  }
  console.log(fruta1);
  console.log(fruta2);
  console.log(fruta3);
}

frutas()
// 'manzana'
// ReferenceError: fruta2 is not defined
// ReferenceError: fruta3 is not defined
```

### 2 → Funciones flecha - Arrow function

Las funciones flecha, son funciones anónimas con la siguiente estructura:

```jsx
// ARROW FUNCTIONS

//Función tradicional
function pelicula (parámetros) {
  return valorRetornado
}

//Función flecha
const pelicula = (parámetros) => {
  return valorRetornado
}

// Omitir paréntesis en las funciones flecha
// Cuando solo tengamos un parámetro podemos omitir los paréntesis
const numPorDos = num => {
  return num * 2
}

// Retorno implícito
// Se puede omitir la palabra reservada return, para escribir nuestra función en una sola línea.

//Función tradicional
function suma (num1, num2) {
  return num1 + num2
}

//Función flecha
const suma = (num1, num2) => num1 + num2
```

### 3 → Strings

Los **templete literals o plantillas literales**, nos ayudan a crear cadenas de caracteres que puedan contener variables sin recurrir a la concatenación. Mejorando la legibilidad y la mantenibilidad del código.

**Concatenación de caracteres**

Antes de ES6, la concatenación de caracteres consiste en unir uno o varios caracteres con el signo +; como si fuera una suma.

Esta concatenación se vuelve compleja cuando creamos mensajes grandes, ya que debemos tener mas atención al agregar espacios antes o después de cada variable concatenada.

```jsx
var nombre = "Felipe";
var edad = 20;
var color = 'rojo'
var mensaje = "Mi nombre es " + nombre + ",  tengo " + edad + " años; el " + color + " es mi color favorito."

console.log(mensaje)
// 'Mi nombre es Felipe,  tengo 20 años; el rojo es mi color favorito.'
```

P**lantillas literales**

En las plantillas literales utilizamos caracter acento grave ( ` ), que no es una comilla simple ( ’ ), para envolver el mensaje; y para incluir variables utilizamos la sintaxis `${variable}`.

```jsx
let nombre = "Felipe";
let edad = 20;
let color = 'rojo'
let mensaje = `Mi nombre es ${nombre}, tengo ${edad} años; el ${color} es mi color favorito.`

console.log(mensaje)
// 'Mi nombre es Felipe,  tengo 20 años; el rojo es mi color favorito.'
```

**Plantilla multilínea**

Cuando queremos crear mensajes con varias líneas separadas entre sí dentro de una plantilla literal, utilizamos las plantillas multilínea. Para crear una plantilla multilínea antes de ES6 agregaremos  `\n` al `string`.

```jsx
var mensaje = "Inicio del mensaje \n" + "fin del mensaje"

console.log(mensaje1)
// 'Inicio del mensaje
// fin del mensaje'
```

Con ES6 solamente necesitamos utilizar las plantillas literales.

```jsx
const mensaje = `Inicio del mensaje
fin del mensaje`

console.log(mensaje)
// 'Inicio del mensaje
// fin del mensaje'
```

### 4 → Parámetros por defecto

Los default params *o* parámetros por defecto **consisten en establecer un valor por defecto a los parámetros de una función, con el fin de asegurarnos que el código se ejecute correctamente en el caso de que no se pasen los argumentos correspondientes en la invocación de la función.

**Cómo era utilizar valores por defecto antes de ES6**

Antes de ES6, se tenia que establecer una variable y utilizar el operador OR `(||)` con el valor por defecto que requiramos. 

```jsx
function sumar(numero1, numero2){
  return numero1 + numero2
}

sumar(5,4) // 9
sumar(5)   // NaN  
sumar()    // NaN

function sumar(numero1, numero2){
  var numero1 = numero1 || 0;
  var numero2 = numero2 || 0;
  return numero1 + numero2
}

sumar(5,4) // 9
sumar(5)   // 5  
sumar()    // 0
```

**Cómo utilizar los parámetros por defecto con ES6**

Con ES6, eliminamos las declaraciones mejorando la legibilidad y el mantenimiento del código.

```jsx
function sumar(number1 = 0, number2 = 0){
  return number1 + number2
}

sumar(5,4) // 9
sumar(5)   // 5  
sumar()    // 0

/* 

Si solo requerimos de un valor por defecto en nuestra función,
Deberemos acomodar nuestros argumentos de tal forma que el parametro por defecto 
siempre se encuentre en la última posición 
 
 */

// Mal
function sumar(number1 = 0, number2){
  return number1 + number2
}

sumar(5) // number1 = 5 y number2 = undefined 

// Correcto
function sumar(number1, number2 = 0){
  return number1 + number2
}

sumar(5) // number1 = 5 y number2 = 0
```

### 5 → Desestructuración

La desestructuración consiste en extraer valores de arrays o propiedades de objetos en distintas variables.

**Desestructuración de objetos**

Antes de ES6, necesitabas acceder al objeto con notación de punto o corchetes por cada propiedad que necesites y asignar ese valor a una variable diferente.

```jsx
var carro = { marca: "Volvo", year: 2020, color: "Negro" }

var marca = carro.marca
var year = carro.year
var color = carro["color"]

console.log(marca)  // 'Volvo'
console.log(year)  // 2020
console.log(color)  // 'Negro'
```

Con ES6 ya no necesitas crear variables para cada propiedad del objeto. Ahora se puede hacer en una sola línea.

**→ Cambiar el nombre de las variables con desestructuración**

Si algún nombre de la propiedad del objeto no te gusta o la quieres cambiar, puedes hacerlo con la siguiente sintaxis:

```jsx
let usuario = { nombre: "Andres", edad: 23, color: "Verde" }

let { nombre: firstName, edad: age, color: favoriteColor } = usuario

console.log(firstName)  // 'Andres' 
console.log(age)  // 23
console.log(favoriteColor)  // 'Verde'

console.log(nombre)   // Uncaught ReferenceError: nombre is not defined
```

→ **Desestructuración en parámetros de una función**

Si envías como argumento un objeto en la invocación a la declaración de una función, puedes utilizar la desestructuración en los parámetros para obtener los valores directamente. Debes tener en cuenta que el nombre debe ser igual a la propiedad del objeto.

```jsx
const usuario = { nombre: "Andres", edad: 23, color: "Verde" }

function mostrarDatos( { nombre, edad, color } ){
    console.log(nombre, edad, color) 
}

mostrarDatos(usuario) // 'Andres', 23, 'Verde'
```

**Desestructuración de *arrays***

La desestructuración consiste en extraer valores de arrays en distintas variables, utilizando la misma posición del array.

```jsx
const numeros = [ 1, 2, 3, 4, 5 ]

// Desestructuración
const [uno, dos, tres ] = numeros

console.log(uno) // 1
console.log(dos) // 2
console.log(tres) // 3
```

→ **Desestructuración para valores retornados de una función**

Cuando una función retorna un array, puedes guardar la función en una variable.

```jsx
function useState(value){
  return [value, updateValue()]
}

//Sin desestructuración 
const estado = useState(3)
const valor = estado[0]
const actualizador = estado[1]

//Con desestructuración 
const [valor, actualizador] = useState(3)
```

### 6 → Spread operator

El operador de propagación o spread operator, consiste en propagar los elementos de un iterable, ya sea un array o string utilizando tres puntos (...) dentro de un array.

```jsx
// Para strings
const array = [ ..."Hola"]    // [ 'H', 'o', 'l', 'a' ]

// En arrays
const otroArray = [ ...array]   //[ 'H', 'o', 'l', 'a' ]
```