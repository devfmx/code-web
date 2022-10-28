# Tipos de datos

El tipo de dato, nos indica la naturaleza del contenido.

## Tipos de datos

| Tipo de dato | Descripción | Ejemplo básico |
| --- | --- | --- |
|  Number | Valor numérico (enteros, decimales, etc...) | 42 |
|  BigInt | Valor numérico grande | 1234567890123456789n |
|  String | Valor de texto (cadenas de texto, carácteres, etc...) | 'MZ' |
|  Boolean | Valor booleano (valores verdadero o falso) | true |
|  undefined | Valor sin definir (variable sin inicializar) | undefined |
|  Function | Función (función guardada en una variable) | function() {} |
|  Symbol | Símbolo (valor único) | Symbol(1) |
|  Object | Objeto (estructura más compleja) | {} |

JavaScript, pertenece a los lenguajes dinámicos, ya que detecta automáticamente el tipo de dato asociado a una variable.

# Casos especiales de datos: undefined, null, Nan.

Son tres tipos de datos que la variable no esta definida o hay un error.

`undefined`**:** es un tipo de dato que nos dice que la variable existe en el programa pero que no tiene valor, esta sin definir, el valor todavía no lo definimos.

`null`**:** El valor `null` es un literal de Javascript que representa intencionalmente un valor nulo o “vacío”. A diferencia de `undefined`, aquí la variable sí tiene un valor el cual es nulo.

`NaN`**:** La propiedad global NaN es un valor que representa Not-A-Number. Nos aparece cuando intentamos hacer alguna operación pero con algo que no es un numero. No podemos multiplicar un numero con un string.

## Ejemplo de tipos de datos

```jsx
var text = "Hola mundo"; //string
var number = 22; //number
var boolean = true; //boolean
var notDefined;   // undefined
```

En este ejemplo es muy sencillo identificar qué tipo de dato esta asociado a cada variable.

## ¿Como saber el  tipo de dato ?

Muchas veces no es sencillo saber el tipo de dato que tiene una variable, ya que este puede ser el resultado de una función. Para eso JavaScript, cuenta con diferentes formas de indentificar qué tipo de dato tiene una variable.

### `typeOf()`

La función typeOf() nos devuelve el tipo de dato de la variable que le pasemos como parámetro.

Utilizando las variables del ejemplo anterior, veamos que resulta de utilizar la función `typeOf()`

```jsx
console.log(typeof text);       // "String"
console.log(typeof number);     // "Number"
console.log(typeof boolean);    // "Boolean"
console.log(typeof notDefined); // undefined
```

# Lecturas en campus

- Kata JavaScript - JavaScript

# Presentaciones

[5.1.5 - 5.1.7 Variables, Tipos de Datos y Operadores](https://docs.google.com/presentation/d/16OYPMJEzpe3lJL20Gjzhc2vboTgBsC7qE-gnSnIQzWM/edit#slide=id.p)