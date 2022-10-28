# Array

# Definición

Son un conjunto de datos ordenados por posiciones y todos asociados en una sola variable. Los datos pueden ser de cualquier tipo de dato,  es decir, es posible crear una array que tenga una cadena en la primera posición, un número en el segundo, un objeto en el tercero y así sucesivamente. Podremos acceder a estos distintos datos de manera independiente o agrupándolos. Cabe resaltar que un array es un objeto.

## Características

- Almacena en una misma variable múltiples valores: valores primitivos, objetos, etc.
- Se referencían con un índice numérico.
- Puede almacenar diferentes tipos de datos

# Formas de crear un array

Existen dos formas de crear un Array y son las siguientes:

### **new Array()**

```jsx
var animales = new Array( valores separados por comas )

var animales = new Array ( “perro”, “gato”, “elefante”)
```

### C**orchetes [ ]**

```jsx
var animales = [valores separados por comas ]

var animales = [ “perro”, “gato”, “elefante” ]
```

# Acceder a los elementos de un Array

Esto se logra, a través del indice del elemento, de la siguiente manera:

```jsx
nombreArray[indice del elemento]
```

Recordemos que el primer elemento de un array es 0

Tenemos al siguiente array:

```jsx
var colores = ["rojo", "azul ", " verde "] ;

colores[0]; // --> "rojo" 
colores[1]; // --> "azul" 
colores[2]; // --> "verde" 
```

# Modificar un elemento de un array

Podemos modificar un elemento de un array a travez de su indice

```jsx
var colores = ["rojo", "azul ", " verde "] ;

colores[2]= 'amarillo';

console.log(colores); // --> ["rojo", "azul ", "amarillo"]
```

# Propiedades

**length**: devuelve la longitud del array (número de elementos). Devuelve el número total de elementos en un arreglo.

```jsx
var colores = ["rojo", "azul ", " verde "] ;

console.log(colores.length) // --> 3
```

# Métodos

## Métodos para mostrar un array

### toString()

Convierte el array en una cadena

```jsx
var colores = ["rojo", "azul ", " verde "] ;

document.write("<br> Mostrando el array en tipo String: </br>" + colores.toString())

//output --> Mostrando el array en tipo String: rojo,azul,verde
```

### join()

Convierte el array en una cadena separado por un separador indicad por parámetro

```jsx
var colores = ["rojo", "azul ", " verde "] ;

document.write("<br> Mostrando el array en tipo String usando join: </br>" + colores.join( " * "))

//output --> Mostrando el array en tipo String: rojo * azul * verde
```

## Métodos para modificar un array

### pop()

Extrae el último elemento de un array.  Si queremos podemos guardar el elemento extraido en una variable.

```jsx
var colores = ["rojo", "azul ", " verde "] ;

console.log(colores.pop()) //output --> [" verde "]

console.log(colores) //output --> ["rojo", "azul "]

var colorPop = colores.pop()

console.log(colorPop) //output --> [" verde "]
```

### shift()

Extra  el primer elemento de un array. Si queremos podemos guardar el elemento extraido en una variable.

```jsx
var colores = ["rojo", "azul ", " verde "] ;

console.log(colores.shift()) //output --> ["rojo"] 

console.log(colores) //output --> [ "azul ", " verde "]

var colorShift = colores.shift()

console.log(colorShift) //output --> ["rojo"]
```

### delete()

Elimina el elemento y lo transforma a undefined

La diferencia del método pop() y el método shift(), con el método delete(), es que el método delete() elimina un elemento del array pero deja el espacio del elemento eliminado; por lo tanto ese espacio queda como undefined.

```jsx
var colores = ["rojo", "azul ", " verde "] ;

delete colores[1]

console.log(colores) //output --> ["rojo", undefined, " verde "]
```

![Screen Shot 2022-09-22 at 10.03.39 p.m..png](Array%20e4727846988543aea0f32f4e9a4879e7/Screen_Shot_2022-09-22_at_10.03.39_p.m..png)

### push()

Añade un elemento al final del array. 

```jsx
var colores = ["rojo", "azul ", " verde "] ;

colores.push('amarillo')

console.log(colores) //output --> ["rojo", "azul ", " verde ", "amarillo"]
```

### unshift()

Añade un elemento al inicio del array 

```jsx
var colores = ["rojo", "azul ", " verde "] ;

colores.unshift('rosa');

console.log(colores) //output --> ["rosa", "rojo", "azul" , " verde "]
```

### split()

Divide un string en un array, tomando como referencia donde se encuentre un caracter indicado

```jsx
// Separando el string por comas (,)
var alumnos = 'Deyanira,Cristobal,Marcos,Mezly,Jose';
var arrayDeAlumnos = alumnos.split(',');
console.log(arrayDeAlumnos); // output --> ['Deyanira', 'Cristobal', 'Marcos', 'Mezly', 'Jose']

// Separando el string por diagonales (/)
var alumnos = 'Deyanira/Cristobal/Marcos/Mezly/Jose';
var arrayDeAlumnos = alumnos.split('/'); // output --> ['Deyanira', 'Cristobal', 'Marcos', 'Mezly', 'Jose']

// Separando el string por un espacio ( )
var alumnos = 'Deyanira Cristobal Marcos Mezly Jose';
var arrayDeAlumnos = alumnos.split(' '); // output --> ['Deyanira', 'Cristobal', 'Marcos', 'Mezly', 'Jose']

// Separando el string por la letra M (M)
var alumnos = 'Deyanira,Cristobal,Marcos,Mezly,Jose';
var arrayDeAlumnos = alumnos.split('M'); // output --> ['Deyanira,Cristobal,', 'arcos,', 'ezly,Jose']

```

### slice()

Quita una parte del array y  retorna un nuevo array

Sintaxis

```jsx
nombreDeArray.slice(posición inicial, posición final);
```

```jsx
var colores = ["rojo", "azul ", " verde ", "amarillo", "cafe"] ;

console.log(colores); // output --> ['rojo', 'azul ', ' verde ', 'amarillo', 'cafe']

var quitarColores = colores.slice(2);
console.log(colores); // output --> ['rojo', 'azul ', ' verde ', 'amarillo', 'cafe']
console.log(quitarColores); // output -->[' verde ']

var quitarColores = colores.slice(2,4);
console.log(colores); // output --> ['rojo', 'azul ', ' verde ' , 'amarillo', 'cafe']
console.log(quitarColores); // output -->[' verde ', 'amarillo']

var quitarColores = colores.slice(3);
console.log(colores);// output --> ['rojo', 'azul ', ' verde ' , 'amarillo', 'cafe']
console.log(quitarColores); //output --> ['amarillo', 'cafe']
```

### splice()

Agregar o borrar elementos de un array, este si modifica el arreglo original

Sintaxis

```jsx
nombreDeArray.splice(indice,numero de elementos a eliminar, elementos a agregar);
```

```jsx
var colores = ["rojo", "azul ", " verde ", "amarillo", "cafe"] ;

// No borrando elementos, pero agregando elementos

console.log(colores); // output --> ['rojo', 'azul ', ' verde ', 'amarillo', 'cafe']
console.log(colores.splice(2,0,'Amarillo','Peru'));  // output --> []
console.log(colores); // output --> ['rojo', 'azul ', 'Amarillo', 'Peru', ' verde ', 'amarillo', 'cafe']

// Borrando elementos

console.log(colores); // output --> ['rojo', 'azul ', ' verde ', 'amarillo', 'cafe']
console.log(colores.splice(2,1)); // output --> [' verde ']
console.log(colores); // output --> ['rojo', 'azul ', 'amarillo', 'cafe']

// Borrando un elemento y agregando un elemento
console.log(colores); // output --> ['rojo', 'azul ', ' verde ', 'amarillo', 'cafe']
console.log(colores.splice(2,3,'rosa')); // output -->[' verde ', 'amarillo', 'cafe']
console.log(colores); // output --> ['rojo', 'azul ', 'rosa']
```

### sort()

Ordena la lista de forma ascendente (A-Z) por defecto

```jsx
var verduras =['Cebolla', 'Brocoli', 'Papas', 'Col', 'Zanahoria']

console.log(verduras); // output --> ['Cebolla', 'Brocoli', 'Papas', 'Col', 'Zanahoria']
verduras.sort();
console.log(verduras); // output --> ['Brocoli', 'Cebolla', 'Col', 'Papas', 'Zanahoria']
```

Cuando ordenemos **números**, le pasaremos al método sort una función para ajustar el orden

```jsx
funcion(a,b){return a-b}

(a,b)=>{return a-b}
```

```jsx
var numeros = [5, 14, 7, 25, 47, 120];

console.log(numeros); // output --> [5, 14, 7, 25, 47, 120]
numeros.sort();
console.log(numeros); // output --> [120, 14, 25, 47, 5, 7]

numeros.sort((a,b)=>{return a-b});
console.log(numeros);  // output --> [5, 7, 14, 25, 47, 120]
// 5,14 -> 5-14 = -9 por lo tanto, mi elemento a (5) se situara en un indice menor a mi elemento b (14) => 5,14
// 14,7 -> 14-7 = 7 por lo tanto, mi elemtento b (7) se situara en un indice menor a mi elelento a (14) =>7,14
```

Cuando ordenamos **strings** con mayusculas y minúsculas

```jsx
var alumnos = ['Abbad', 'alexis', 'Chayanne', 'daniel', 'Dreyco'];

console.log(alumnos); // output -->
console.log(alumnos.sort()); // output --> ['Abbad', 'Chayanne', 'Dreyco', 'alexis', 'daniel']
alumnos.sort((a,b)=>{
  if(a.toLowerCase() < b.toLowerCase()) return -1
  if(a.toLowerCase() > b.toLowerCase()) return 1
  return 0
});
console.log(alumnos); // output --> ['Abbad', 'alexis', 'Chayanne', 'daniel', 'Dreyco']
```

### reverse()

Coloca los elementos del arreglo al revés. Este método altera el arreglo original.

```jsx
var verduras =['Cebolla', 'Brocoli', 'Papas', 'Col', 'Zanahoria']
console.log(verduras);// output --> ['Cebolla', 'Brocoli', 'Papas', 'Col', 'Zanahoria']
verduras.reverse();
console.log(verduras); // output --> ['Zanahoria', 'Col', 'Papas', 'Brocoli', 'Cebolla']
```

### concat

Este método une (concatena) el contenido de 2 arreglos existentes. No modifica dichos arreglos, si no que devuelve uno nuevo.

```jsx
var paises = ['Mexico', 'EUA', 'Chile'];
var platillos = ['Pozole', 'Papatzules', 'Chanwis'];

var unionDeArrays = paises.concat(platillos);
console.log(unionDeArrays);// output --> ['Mexico', 'EUA', 'Chile', 'Pozole', 'Papatzules', 'Chanwis']

var unionDeArrays = platillos.concat(paises);
console.log(unionDeArrays);// output --> ['Pozole', 'Papatzules', 'Chanwis', 'Mexico', 'EUA', 'Chile']

var unionDeArrays = platillos.concat(['Juan', 'Pedro']);
console.log(unionDeArrays);// output --> ['Pozole', 'Papatzules', 'Chanwis', 'Juan', 'Pedro']
```

# Lecturas en campus

- Kata JavaScript - Arrays

# Presentaciones

[5.4.1 Arreglos](https://docs.google.com/presentation/d/1n3C26oIA8nNilU_h9e5KL1hcuLysEQ_ZuPVDyvR5bvQ/edit)

# Recursos adicionales

[Array - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)