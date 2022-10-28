# Estructuras de control o Ciclos

La instrucción for...in itera una variable especificada sobre todas las propiedades enumerables de un objeto. Para cada propiedad distinta, JavaScript ejecuta las instrucciones especificadas.
La sentencia for in nos devuelve la posición o indice en la que están los elementos. Se utiliza para recorrer objetos, conocer sus posiciones y operar con esos objetos.

## Definición y usos

Los bucles ofrecen una forma rápida y sencilla de hacer algo repetidamente.

Hay bucles a los que les decimos cuantas vueltas dar y a otros no, por eso existen los bucles determinados y los indeterminados.

Los **bucles determinados** son aquellos que se ejecutan las veces que nosotros le indicamos, como la sentencia for, for in, for of

Los **bucles indeterminados** son aquellos a los que no se les indica cuantas vueltas dar como la sentencia while, do while.

# While

Mientras se cumpla la condición, realiza las acciones.

La condición en lo primero que se evalua antes de ejecutar el código

```jsx
// Sintaxis

/*
while(condición){
  codigo a ejecutar
}
*/

// Ejemplo -> imprimir números del 0 al 10 en la consola.

var indice = 0;

while(indice < 11){
  console.log(indice);
  indice++;
}

// Ejemplo -> revisaremos si el usuario intriduce un valor o no

var arreglo = [];
var userInput;

while(!(userInput == "")){ 
  console.log('userInput antes de prompt',userInput)
  // le pedimos al usuario que ingrese un elemento
  userInput = prompt("Ingresa cualquier caracter");
  // El elemento que nos dio el usuario, lo vamos a agregar al array arreglo con el método push
  arreglo.push(userInput);
  console.log('userInput despues de prompt',userInput)

}

console.log('El usuario me dio estos valores ' + arreglo); // output --> El usuario me dio estos valores h,o,l,a,
```

# Do while

Siempre se ejecuta el código y posteriormente evalua la condición para ver si se vuelve a ejecutar.

La instrucción do...while se repite hasta que una condición especificada se evalúe como falsa.
Primero hago lo que quiero que se haga y después pregunto la condición.

```jsx
// Sintaxis

/*
do{
  codigo a ejecutar
}
while (condicion)
*/

// Ejemplo -> Conteo de números del 1 al 10 en consola

var contador = 0;

do{
  contador++; 
  console.log(contador);
} while (contador < 10);
```

# For

Bucle que repite el bloque de instrucciones un número predeterminado de veces, se repite hasta que la condición especificada se evalúe como `false`.

Es igual a la sentencia while, pero la diferencia es que es un bucle determinado, es decir, que le indicamos cuantas veces repetirse.
El for se compone de tres partes declaración e inicialización, la condición  e iteración (aumento o decremento).

**Contador** → Nos sirve para contar las vueltas que se debe repetir el ciclo

**Acumulador** → Tipo de variable que se incrementa o decrementa con valores. Variable durante la ejecución del programa

**Inicialización** → ejecuta antes de que inicie el bucle

**Condición** → evaluada antes de cada iteración, sale del bucle cuando es falsa

**Incremento o Decremento** → ejecutado al final de cada iteración, el incremento no tiene que ser ++, el decremento no tiene que ser - -; pero lo verás con mayor frecuencia 

```jsx
// Sintaxis

/*

for ([expresiónInicial]; [expresiónCondicional]; [expresiónDeActualización]) {
  Instrucción
}

for( var index = 0; index <= 10; index++ ) {
  codigo de ejecucion
  ejemplo: console.log(index)
}

*/
```

```jsx
const students = [
    {
        name: "Daniel",
        age: 27,
        module: 'kata_intro_web'
    },
    {
        name: "Felipe",
        age: 27,
        module: 'kata_intro_web'
    },
    {
        name: "Johan",
        age: 20,
        module: 'kata_js'
    },
    {
        name: "Saul",
        age: 39,
        module: 'kata_js'
    },
    {
        name: "Darwin",
        age: 26,
        module: 'kata_js'
    },
]
```

![foreach.png](Estructuras%20de%20control%20o%20Ciclos%209f26244c35bf4d208dfa71e9451bd1a2/foreach.png)

## forIn

La instrucción for...in itera una variable especificada sobre todas las propiedades enumerables de un objeto. Para cada propiedad distinta, JavaScript ejecuta las instrucciones especificadas.
La sentencia for in nos devuelve la posición o indice en la que están los elementos. Se utiliza para recorrer objetos, conocer sus posiciones y operar con esos objetos.

```jsx
Sintaxis:
for (variable in objeto){
  instrucción
}
```

## forOf

La declaración for...of crea un bucle que se repite sobre objetos iterables (incluidos Array, Map, Set, objetos arguments y así sucesivamente), invocando un gancho de iteración personalizado con declaraciones que se ejecutarán para el valor de cada distinta propiedad.

```jsx
Sintaxis:
for (variable of objeto){
  instrucción
}
```

## forEach

El primer método que veremos es .`forEach`, este se ejecutará una vez por cada elemento en el arreglo, es decir, si tu arreglo tiene 10 elementos, se ejecutará 10 veces, lo cual lo hace una excelente opción para acceder a cada elemento del arreglo y listarlo; veamos los 2 códigos equivalentes, con for y con .`forEach`

```jsx
// forma nueva con .forEach (ES6)
students.forEach((student)=> {
    console.log('forEach', student.name)
})
```

## map

.`map` y .`forEach` se pueden llegar a confundir, ambos se ejecutarán la misma cantidad de ocasiones que la cantidad de tus elementos en tus arreglos, la diferencia principal es: el **.map crea un nuevo arreglo, mientras que el .`forEach` no.**

```jsx
const studentsNames = students.map((student) => {
    return student.name
})
console.log('map', studentsNames)
```

## filter

**.`filter` creará un nuevo arreglo con los elementos que pasen una condición o prueba de implementación,** en el ejemplo anterior vimos que el código del .map no era el adecuado para filtrar, pero el .`filter` si es el adecuado, veamos el código:

```jsx
const rangoEdad = students.filter((student) => {
    return student.age > 20 && student.age < 29
})

console.log('filter', rangoEdad)
```

```jsx
// Obtener los alumnos que estudian Kata Intro Web
const studentsIntroWeb = students.filter((student) => {
    return student.module === 'kata_intro_web'
})

console.log('filter', studentsIntroWeb)
```

- CONSIDERA A TODOS LOS QUE CUMPLEN LA CONDICIÓN

## find

.`find` **encontrará el primer elemento del arreglo que cumpla la condición** y retornará ese valor, algo importante es que a diferencia de `.filter` que crea un arreglo con todos los valores que cumplen una condición, en el caso de .find solo extraerá el valor del primero que cumpla la condición.

```jsx
const alumnoKataIntroWeb = students.find((student) => {
    return student.module === 'kata_intro_web'
})
console.log('find', alumnoKataIntroWeb)
```

- SOLO CONSIDERA AL PRIMERO QUE CUMPLE LA CONDICIÓN

## reduce

.`reducer` ejecutará una función que retornará un acumulado como valor único.

Antes de ver un ejemplo más práctico, veamos una implementación más simple para conocer las diferentes partes de un .reduce, supongamos que tenemos un arreglo de números y queremos saber su suma:

```jsx
const numeros = [1,2,3];
const total = numeros.reduce((total, numero) => total + numero, 0);
console.log(total)
```

El ejemplo anterior mostrará un 6 en la consola, lo que hace .reduce en el ejemplo anterior es recorrer el arreglo de *numeros* e ir sumando todo en lo que se conoce como un acumulador; es por eso que se pasan 2 valores después de .reduce() e**l total – que es el acumulador** – y el **número – que es el numero actual –** del arreglo llamado numeros que esta en la línea anterior. Finalmente podrás notar que hay un **0 poco antes de cerrar el paréntesis de .reduce, ese es el valor inicial,** que en este caso comenzará en 0, si lo inicias en 5, podrás ver que el total será 11, ya que comenzará a sumar a partir de 5 y sumará 6 (los valores de 1 + 2 + 3 ).

### Caso real

```jsx
const autos = [
    {
        marca: 'BMW',
        precio: 5000
    },
    {
        marca: 'AUDI',
        precio: 1000
    },
    {
        marca: 'NISSAN',
        precio: 1000
    },
]
```

```jsx
//  Necesitamos ver cuanto dinero tendriamos si liquidamos todos nuestros autos
const liquidez = autos.reduce((total, auto) => {
    return total + auto.precio
}, 0)

console.log('la liquidez de la empresa es de:', liquidez)
```

## some

.`some` verificará si un elemento existe o no en el arreglo, a diferencia de los otros métodos que te retornan un arreglo nuevo o el valor, en este caso solo te dirá si existe o no un elemento que cumpla la condición o implementación.

```jsx
const isJohan = students.some((student)=> {
    return student.name === 'Johan'
})

console.log('¿Johan existe? ', isJohan)
```

Si revisamos el resultado del código anterior notarás que la consola solo imprime `true`, debido a que hubo un registro que cumpliera con esa condición.

# Lecturas en campus

- Kata JavaScript - Estructuras de control

# Presentaciones

[6.1.1 - 6.2.1 Estructuras de Control (Ciclos For)](https://docs.google.com/presentation/d/1nhKtBqk7Zv_hsmlGqGMaDembX3jZFDcHL5sRVoyXkjg/edit#slide=id.p)