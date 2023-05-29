# Búsqueda Lineal

El algoritmo de búsqueda lineal consiste en recorrer el arreglo y examinar cada uno de los elementos hasta encontrar el elemento buscado; o hasta que termine de revisar cada uno de los elementos del array.

La función buscará en cada elemento del arreglo para encontrar el valor y devolverá la posición del mismo en el arreglo sí lo encontró. Si el valor no está en el arreglo, devolverá -1.

El algoritmo de búsqueda lineal no necesita usar una lista ordenada. Además, el algoritmo se puede personalizar para usarse en diferentes escenarios, como buscar un arreglo de objetos por clave.

```jsx
/* 
Declaramos una funcion la cual tendra como parámetros:
1-> Arreglo 
2-> elemento a buscar
*/

const linearSearch = (list, itemToFind) => {
  // Tamaño del arreglo, hasta donde iteraremos
  const size = list.length;
  // Indice donde empezaremos a iterar
  let index = 0;
  // Mientras que el indice sea menor que el tamaño
  while (index < size) {
    // Guardamos la posicion actual
    let itemInPosition = list[index];
    // Si posicion actual es igual al elemento a buscar retornamos el índice
    if (itemInPosition === itemToFind) {
      return index;
    }
    // Aumentaremos el indice en 1 si no se cumple la condición
    index++;
  }
  // Si al terminar el bucle no encontramos al elemento retornaremos -1
  return -1;
}

const myList = [19, 12, 4, 89, 666, 10, 42, 41, 5, 333, 5, 5, 5, 5];

const result1 = linearSearch(myList, 10);
const result2 = linearSearch(myList, 5);
const result3 = linearSearch(myList, 3);
console.log(result1); // 5
console.log(result2); // 8

console.log(result3); // -1
```

# Lecturas en campus

- Kata JS Computer Science - Algoritmos de búsqueda.

# Presentaciones

[10.2.1 Algoritmos de Búsqueda](https://docs.google.com/presentation/d/1h5dbzPp9uQCvw93bKiI3xZ0DKZ_K0pMTFccM7bkCJ3o/edit?usp=sharing)