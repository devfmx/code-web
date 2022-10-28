# Funciones

![Captura de pantalla 2022-09-13 a las 20.26.10.png](Funciones%20d8479f434772443c856e1b9942f5ecc2/Captura_de_pantalla_2022-09-13_a_las_20.26.10.png)

# Todo sobre funciones

Una función es un conjunto de sentencias que realizan una tarea o calculan un valor. Base de la programación para evitar repetir porciones de código que realizaran tareas repetitivas.

## En el mundo de Javascript existen dos formas de declarar una función

## Sintaxis (funciones anónimas)

### Foma 1

Una definición de función (también denominada declaración de función o expresión de función) consta de la palabra clave function, seguida de:

- El nombre de la función.
- Una lista de parámetros de la función, entre paréntesis y separados por comas.
- Las declaraciones de JavaScript que definen la función, encerradas entre llaves, { ... }.

```jsx
OPCION 1// Con nombre => La podemos invocar
function myfunction(){
	return 'esta es una función normal'
}

/*Para ejecutar o invocar la función solo deberemos de escribir el nombre de la función con los paréntesis y en caso de requerir parámetros, se deberán de escribir dentro de los paréntesis los parámetros.*/
myfunction()

OPCION 2
// Sin nombre / Anomimas => recomendable dentro de otros funciones o un eventListener
function(){
	return 'esta es una función ANONIMA'
}
```

## Expresiones

Para invocar las funciones necesitamos el uso de las expresiones

### Foma 1

```jsx
OPCION 3
// Con nombre => La podemos invocar
const myFunction = function(){
	return 'esta es una función normal'
}
```

### Return

La sentencia return finaliza la ejecución de la función y especifica un valor para ser devuelto a quien llama a la función.

```jsx
function square(number) {
  return number * number;
}
```

### Parámetros

Son valores que requiere una función para realizar su función. Son variables que se declaran y crean en una función y solo existen dentro de la función donde se declararon, afuera de la función no existen.

### Scope

Las funciones tienen un scope global, las variables que creamos dentro de la función tienen un sope local, es decir, solo se puede acceder a ellas dentro de la función en la cual se crearon.

# Lecturas en campus

- Kata JavaScript - Funciones

# Presentaciones

[](https://docs.google.com/presentation/d/1EGRKLQAWRkUAQM_cDDRenun18oBOEqXurdRZ-1ndmyE/edit)