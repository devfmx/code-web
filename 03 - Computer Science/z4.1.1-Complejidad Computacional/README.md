# Complejidad Computacional

La complejidad computacional tiene como finalidad responder que tan difícil es un problema computacional en comparación a otros; mediante la creación de herramientas que permitirán describir un problema complejo, mediante la definición de un posible o posibles algoritmos, si existen, que permitan solucionar un problema.

## ¿Qué es un algoritmo?

Un algoritmo es una secuencia de instrucciones ordenadas para solucionar un problema.

La estructura de un algoritmo consiste en un **proceso** por el cual una **entrada** de datos se obtiene una **salida.**

### Estructura de un algoritmo

Un algoritmo se puede representar con una función que recibe las entradas como parámetros. Donde las instrucciones necesarias para retornar un valor será el cuerpo de la función y para utilizar el algoritmo solo necesitamos invocar la función.

```jsx
function algoritmo(entrada) {
    // Proceso
    return salida
}

// Usando el algoritmo
algoritmo()
```

## ¿Cómo elegir un buen algoritmo?

Sabemos que para solucionar un problema, existen muchos algoritmos para resolverlo. Por lo tanto para elegir un buen algoritmo deberemos de fijarnos en cuanto tarda en ejecutarse y o que tanto espacio ocupa en la memoria.

- ******Tiempo:****** la velocidad que se ejecuta ese algoritmo.
- ****************Espacio:**************** cantidad de memoria que utilizas para resolver un problema.

**Tiempo o espacio, ¿cuál es mejor para el desarrollo de un algoritmo?**

Lo ideal es que para resolver un algoritmo el espacio sea lo mínimo posible y el tiempo sea lo más rápido; pero muchas veces no se cumple.

Cuando hablamos de JavaScript lo mas relevante es apuntar al tiempo que al espacio; por que cuando trabajamos con JavaScript usualmente no corre en dispositivos con memoria muy limitada.

Esto no significa que no haya casos particulares, o que el espacio siempre sea menos importante que el tiempo, solo es el ambiente del software con JavaScript.