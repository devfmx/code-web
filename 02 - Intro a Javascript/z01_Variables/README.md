# Variables

Las variables son espacios donde podemos guardar un valor y asociarlo a un determinado nombre, con el fin de poder reusarlo, actualizarlo o simplemente registrarlo.

En JavaScript las variables pueden guardar cualquier tipo de dato.

Se denomina **inicializar una variable** cuando le asignamos un dato a esta; pero si no le asignamos ningún dato y solo la **declaramos la variable**, esta variable contendrá un valor especial: **undefined**,  que significa que su valor no está definido aún, o lo que es lo mismo, que no contiene información:

```jsx
var a; // Declaramos una variable "a", pero no le asociamos ningún dato.
var b = "hola"; // Declaramos una variable "b", y le asociamos el string "hola".

console.log(b); // Muestra "hola" (el valor guardado en la variable "b")
console.log(a); // Muestra "undefined" (no hay valor guardado en la variable "a")
```

## Formas de declarar una variable

Utilizaremos la palabra reservada var, seguida de un signo de igual “=” y el nombre de la variable también conocido como identificador.

```jsx
// Método 1: Declaración de variables de forma independiente
var a = 3;
var c = 1;
var d = 2;

// Método 2: Declaración masiva de variables con el mismo var
var a = 3, c = 1, d = 2;

// Método 3: Igual al anterior, pero mejorando la legibilidad del código
var a = 3,
  c = 1,
  d = 2;
```

# Lecturas en campus

- Kata JavaScript - JavaScript

# Presentaciones

[](https://docs.google.com/presentation/d/16OYPMJEzpe3lJL20Gjzhc2vboTgBsC7qE-gnSnIQzWM/edit#slide=id.p)