# Operadores

Tenemos diferentes tipos de operadores

1. Asignación
2. Matemáticos
3. Operadores Comparación
4. Operadores Lógicos (NOT, AND Y OR)
5. Incremento y Decremento

### Operadores de asignación

Un **operador de asignación** signa un **valor** al operando de la izquierda basado en el valor el operando de la derecha

![Untitled](Operadores%209d39592c1fb84fdca0b74d951a861efd/Untitled.png)

```jsx
// Pequeño repaso con operadores de asignación y tipos de datos
/* Number */
var numero = 7;
var decimal = 4.14;

/* String */ 
var nombre = 'Daniel';
var numeroTexto = '50';

/* Boolean */ 
var verdadero = true;
var falso = false;

/* Undefined -> Indefinido */
var indefinido;

/* Null -> vacio o nulo */
var nulo = null;

/* Objeto */ 
var animal = {
    nombre: "Perro",
    color: "cafe",
    tieneDueño: true,
    edad: 10
}
```

### Operadores aritméticos o matemáticos

Los **operadores aritméticos** toman valores **numéricos** (ya sean literales o variables) como sus operadnos y retornan un valor numérico **único**.

```jsx
var numero1 = 10;
var numero2 = 5;

var resultado = numero1 + numero2;
var resultado = numero1 - numero2;
var resultado = numero1 * numero2;
var resultado = numero1 / numero2;
var resultado = numero1 % numero2;

// Concatenar string a través de sumas
var nombreCompleto

var nombre = "Edwin"
var apellido = "Salgado"

nombreCompleto = nombre + " " + apellido
```

![Untitled](Operadores%209d39592c1fb84fdca0b74d951a861efd/Untitled%201.png)

### Operadores de comparación

Los **operadores de comparación** comparan dos expresiones y devuelven un valor **Boolean** que representa la **relación** de sus valores.

- `==`  igual a
- `===` igual en valor y tipo
- `!=`  No iguales -> ¿Es diferente?
- `!==` No iguales en valor y tipo
- `>`   Mayor que
- `<`   Menor que
- `>=`  Mayor o igual que
- `<=`  Menor o igual que

Los operadores relacionales definidos por JavaScript son idénticos a los que definen las matemáticas: mayor que (`>`), menor que (`<`), mayor o igual (`>=`), menor o igual (`<=`), igual que (`==`) y distinto de (`!=`).

Los operadores que relacionan variables son imprescindibles para realizar cualquier aplicación compleja, como se verá en el siguiente capítulo de programación avanzada. El resultado de todos estos operadores siempre es un valor booleano:

```jsx
var numero1 = 3;
var numero2 = 5;
resultado = numero1 > numero2; *// resultado = false
resultado = numero1 < numero2; *// resultado = true

numero1 = 5;
numero2 = 5;
resultado = numero1 >= numero2; *// resultado = true
resultado = numero1 <= numero2; *// resultado = true
resultado = numero1 == numero2; *// resultado = true
resultado = numero1 != numero2; *// resultado = false

var edad =  prompt('Ingresa tu edad')
var numericaInt = parseInt(edad);

mayorEdad = numericaInt > 18
console.log('¿Es mayor de edad?', mayorEdad)
```

Se debe tener especial cuidado con el operador de igualdad (`==`), ya que es el origen de la mayoría de errores de programación, incluso para los usuarios que ya tienen cierta experiencia desarrollando scripts. El operador `==` se utiliza para comparar el valor de dos variables, por lo que es muy diferente del operador `=`, que se utiliza para asignar un valor a una variable:

```jsx
*// El operador "=" asigna valores*
var numero1 = 5;
resultado = numero1 = 3; *// numero1 = 3 y resultado = 3

// El operador "==" compara variables*
var numero1 = 5;
resultado = numero1 == 3; *// numero1 = 5 y resultado = false*
```

Los operadores relacionales también se pueden utilizar con variables de tipo cadena de texto:

```jsx
var texto1 = "hola";
var texto2 = "hola";
var texto3 = "adios";

resultado = texto1 == texto3; *// resultado = false*
resultado = texto1 != texto2; *// resultado = false*
resultado = texto3 >= texto2; *// resultado = false*

var nombreFelipe =  prompt('Ingresa el nombre Felipe')
console.log(nombreFelipe.toLowerCase());
console.log(nombreFelipe.toUpperCase());
validacion = 'Felipe' == nombreFelipe
console.log('¿El nombre es Felipe?', validacion)
```

![Untitled](Operadores%209d39592c1fb84fdca0b74d951a861efd/Untitled%202.png)

El operador igual (==), nos compara los valores y no diferencia el tipo de dato, por ejemplo dará true si el valor a comparar es un numero y un numero escrito en string con numero no con letra. Para comparar si no es igual utilizamos el siguiente operador (!=)

![Untitled](Operadores%209d39592c1fb84fdca0b74d951a861efd/Untitled%203.png)

![Untitled](Operadores%209d39592c1fb84fdca0b74d951a861efd/Untitled%204.png)

En cambio el operador de igualdad estrictamente (===), nos compara los valores y ademas nos compara el tipo de dato.  Para comparar si no es estrictamente  igual utilizamos el siguiente operador (!==)

![Untitled](Operadores%209d39592c1fb84fdca0b74d951a861efd/Untitled%205.png)

![Untitled](Operadores%209d39592c1fb84fdca0b74d951a861efd/Untitled%206.png)

### Operadores lógicos

Los **operadores lógicos** nos devuelven un resultado a partir de que se cumpla (o no) una **condición**, el resultado es **booleano**,  y sus operadores son valores lógicos o asimilables a ellos.

![Untitled](Operadores%209d39592c1fb84fdca0b74d951a861efd/Untitled%207.png)

### Operadores Lógicos (NOT, AND Y OR)

### OR

El "**OR**" es un operador lógico binario, el cual significa "**o**" en español, por ende, serián condiciones independientes unas de otras, un ejemplo de esto sería:

En un negoció se puede pagar con sencillo **o** con tarjeta de debito

1. Si el cliente tiene sencillo (TRUE) pero también tiene tarjeta de debito (TRUE), puede pagar en el negocio (TRUE).
2. Si el cliente tiene sencillo (TRUE) pero no tiene tarjeta de debito (FALSE) aun así puede pagar (TRUE).
3. Si el cliente no tiene sencillo (FALSE) pero si tiene tarjeta de debito (TRUE) aun así puede pagar (TRUE).
4. Si el cliente no tiene sencillo (FALSE) pero tampoco tiene tarjeta de debito (FALSE) no podra pagar en el negocio (FALSE).

Por ende, podemos concluir que si al menos una de las variables es **TRUE**, entonces el resultado también lo es.

```jsx

console.log(true || true)
// true

console.log(true || false)
// true

console.log(true || false)
// true

console.log(false || false)
// false
```

Hay que destacar que los valores TRUE y FALSE pueden ser el resultado de una operación logica de comparación, ya que el ejemplo mencionado, esta muy aislado de la realidad.

LLevandolo a un caso práctico, digamos que queremos saber si un número es menor a 3 **o** mayor que 10.
**¿Como podríamos escribir un programa que resolviera el problema?**

```jsx
var numero = parseInt(prompt("Ingrese un numero menor que 3 o mayor que 10"))
var numero_menor_3 = numero < 3
var numero_mayor_10 = numero > 10
console.log(numero_menor_3 || numero_mayor_10)
```

### AND

El "**AND**" es un operador lógico binario, el cual significa "**y**" en español, por ende, serián condiciones dependientes unas de otras, un ejemplo de esto sería:

Para entrar al estadio a ver una partido de futbol se necesita el carnet **y** la entrada

1. Si el hincha tiene el carnet (TRUE) y tiene la entrada (TRUE), puede entrar al estadio (TRUE), por lo cual podrá ver el partido.
2. Si el hincha no tiene el carnet (FALSE) y tiene la entrada (TRUE), no podra entrar al estadio (FALSE), por lo cual no podrá ver el partido.
3. Si el hincha tiene el carnet (TRUE) y  no tiene la entrada (FALSE), no podra entrar al estadio (FALSE), por lo cual no podrá ver el partido.
4. Si el hincha no tiene el carnet (FALSE) y tampoco tiene la entrada (FALSE), no podra entrar al estadio (FALSE), por lo cual no podrá ver el partido.

Por ende, podemos concluir que si al menos una de las variables es **FALSE**, resultado también lo será.

```jsx
console.log(true && true)
//true

console.log(true && false)
//false

console.log(false && true)
//false

console.log(false && false)
//false
```

Es importante considerar que en este operador lógico binario se tienen que cumplir las dos condiciones, por ende, tenemos que leer bien un ejercicio antes de desarrollarlo, nos referimos que si nos plantean un numero que sea menor a 3 y mayor a 10, este no tendría resultado.

```jsx
var numero = parseInt(prompt("Ingrese el número que desea comprobar que sea menor que 3 o mayor que 10\n"))
var menor_que_3 = numero > 3
var mayor_que_10 = numero < 10
console.log(menor_que_3 && mayor_que_10)
```

## **Nullish coalescing operator (??)**

**Compatible desde la version Node 14**

Este operador retorna el valor del lado derecho cuando su operador del lado Izquierdo es nulo o indefinido, podría parecer que tienen el mismo comportamiento del operador OR (||) 

Lo que lo diferencia es que el operador Nullish no se ve afectado por valores falsy, como lo suele ser con el operador OR

Ejemplo: 

Supongamos que estamos evaluando los valores iniciales de un formulario:

![Untitled](Operadores%209d39592c1fb84fdca0b74d951a861efd/Untitled%208.png)

En este ejemplo el valor inicial se seria afectado por usar el OR ya que el cero es un valor falsy, pero es un valor verdadero para ser un valor inicial de un contador

Ahora veamos el ejemplo anterior con el operador Nullish

![Untitled](Operadores%209d39592c1fb84fdca0b74d951a861efd/Untitled%209.png)

### **Logical nullish assignment**

Este operador también mas reciente **(Node 15)** y que poco a poco se deben ir incorporando para dejar de usar el operador OR 

Este operador asigna el valor establecido si el mismo es nulo o indefinido

Ejemplo:

![Untitled](Operadores%209d39592c1fb84fdca0b74d951a861efd/Untitled%2010.png)

como podemos ver, este operador “acorta” no solo la sintaxis si no es es ligeramente mas optimo y no se ve afectado por valores falsy como lo mencionado con el operador Nullish (??)

![Untitled](Operadores%209d39592c1fb84fdca0b74d951a861efd/Untitled%2011.png)

### Incremento y Decremento

```jsx
var numero = 5;
var resultado1 = numero - 1;
// 4
// Esto se puede escribir asi tambien

// El -- restar -1 
// El ++ suma +1

var resultado2 = --numero;
// 4

var resultado3 = ++numero;
// 6

// Este puede ir al inicio o al final (--  ++), dependiendo donde se encuentre
// sera lo primero en compilar o lo ultimo al compilar

var resultado4 = numero++;
// 6
```

# Lecturas en campus

- Kata JavaScript - Operadores y estructuras

# Presentaciones

[](https://docs.google.com/presentation/d/16OYPMJEzpe3lJL20Gjzhc2vboTgBsC7qE-gnSnIQzWM/edit#slide=id.p)