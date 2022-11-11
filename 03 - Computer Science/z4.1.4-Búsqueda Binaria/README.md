# Búsqueda Binaria

La búsqueda binaria es un algoritmo eficiente para encontrar un elemento en una lista ordenada de elementos. Esta búsqueda funciona al dividir repetidamente a la mitad el arreglo que podría contener al elemento, hasta reducir las ubicaciones posibles a una sola ubicación.

La Búsqueda Binaria, divide el problema en dos problemas más pequeños cada vez. Pero, la restricción que tiene es que la secuencia debe estar ordenada para poder optimizar la búsqueda.

```jsx
/* 
Declaramos una funcion la cual tendra como parámetros:
1-> Arreglo ordenado
2-> elemento a buscar
*/
function busquedaBinaria(arregloOrdenado, elemento) {
  // Donde buscar inicialmente entre el indice 0 y el último índice del arreglo
  let inicio = 0;
  let fin = arregloOrdenado.length - 1;

  // Mientras el inicio sea menor o igual al fin, calculamos el índice medio
  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);
    // Si el elemento en el índice medio es el elemento que estamos buscando, retornamos el índice medio
    if (arregloOrdenado[medio] === elemento) {
      return medio
      // Verificamos si el elemento es menor que el índice medio 
    } else if (arregloOrdenado[medio] < elemento) {
      // Deberemos cambiar el inicio a medio + 1
      inicio = medio + 1;
      // Si es mayor al elemento que buscamos
    } else {
      // Cambiamos fin a medio - 1
      fin = medio - 1;
    }

  }
  // Si no encontramos el elemento retornamos -1
  return -1

}

const myList = [4, 7, 10, 11, 55, 71, 89, 100, 2020];

const result1 = busquedaBinaria(myList, 10);
const result2 = busquedaBinaria(myList, 50);
console.log(result1); // 2
console.log(result2); // -1
```

# Lecturas en campus

- Kata JS Computer Science - Algoritmos de búsqueda.

# Presentaciones

[10.2.1 Algoritmos de Búsqueda](https://docs.google.com/presentation/d/1h5dbzPp9uQCvw93bKiI3xZ0DKZ_K0pMTFccM7bkCJ3o/edit?usp=sharing)

# Recursos

[Búsqueda binaria (artículo) | Algoritmos | Khan Academy](https://es.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search)