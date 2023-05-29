# Árboles binarios

Los árboles binarios son una estructura de datos no lineal en la que cada nodo puede apuntar a uno o cuantos nodos sean necesarios.

### Árboles

Los árboles se caracterizan por almacenar sus nodos en forma jerárquica y no en forma lineal como en las listas ligadas, colas y pilas.

![arboles-1](A%CC%81rboles%20binarios%20fb2181b3d8934b49b0e9f7f004c18719/arboles-1.png)

### Nodo

El “nodo” es la estructura básica que usamos para construir un “árbol”, se caracterizan por tener un valor, y referencias a otros nodos.

### Datos importantes de los Árboles

- Nodo → es cada elemento que contiene un árbol.
- Nodo Root o Raíz → nodo principal del cual inicia la ramificación de los datos y solo puede existir uno.
- Nodo Parent o Padre → todos aquellos nodos que cuentan con al menos un hijo.
- Nodo Child o Hijo → todos aquellos nodos que tienen un nodo padre
- Nodo Sibling o Hermano→ todos aquellos nodos que comparten a un mismo padre en común dentro de la estructura.
- Nodo Leaf o Hoja → todos aquellos nodos que no tienen hijos, siempre se encuentran al extremo de la estructura
- Nodo Rama → todos aquellos nodos que no son la raíz y además tienen al menos un hijo.
- Sub-tree → todos aquellos árboles que están dentro de la estructura.

![arboles-2](A%CC%81rboles%20binarios%20fb2181b3d8934b49b0e9f7f004c18719/arboles-2.png)

### Perfect Binary Tree

Consiste en tener un nodo principal o root, el cual tendrá 2 ramas y las siguientes ramas será el doble o 2N.

El nodo que este arriba, cuando se genere una ramificación hacia abajo, se va a multiplicar; y si se genera otra ramificación se volverá a multiplicar y así sucesivamente. También se le conoce con un árbol binario balanceado; porque vamos a tener la misma cantidad de nodos tanto del lado izquierdo como del lado derecho.

![arboles-3](A%CC%81rboles%20binarios%20fb2181b3d8934b49b0e9f7f004c18719/arboles-3.png)

### Binary search tree

Este tipo de árbol nos ayuda a buscar información, y la forma en la que los datos se van acomodando es:

- Los números que van en aumento vienen del lado derecho
- Los números que van decrementando vienen del lado izquierdo

![arboles-4](A%CC%81rboles%20binarios%20fb2181b3d8934b49b0e9f7f004c18719/arboles-4.png)

### Métodos

- search  → Buscar por un nodo
- insert  →Insertar un nodo
- delete → Borrar un nodo

```jsx
// Creamos una clase Nodo
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    // Será nuestro primer nodo
    this.root = null;
  }

  // Método insert -> insertar un nodo
  insert(value) {
    const newNode = new Node(value);
    /* 
    Validamos si ya existe un nodo; si no existe un nodo el valor se convertirá 
    en root y si ya existe un nodo empezariamos a crear una ramificación
    */
    if (this.root === null) {
      this.root = newNode;
    } else {
      // Nodo actual
      let currentNode = this.root;
      // Recorremos el nodo para posicionarlo
      while (true) {
        // Todo lo que va en decremento va del lado izquierdo
        if (value < currentNode.value) {
          // Vamos a verificar si existe un nodo en el lado izquierdo
          // Si no existe un nodo, entonce colocamos el nodo que estamos agregando actualmente al lado izquierdo
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Todo lo que va en aumento va del lado derecho
          // Vamos a verificar si existe un nodo en el lado derecho
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  // Método search -> busca un nodo

  search(item) {
    // Creamos una variable que nos servira de apuntador
    let currentNode = this.root;
     // Mientras currentNode exista
    while (currentNode !== null) {
      // si item es igual con currentnode.value retorna true
      if (item === currentNode.value) {
        return true;
        // Si no es igual
      } else {
        // si item es menor currentnode.value
        if (item < currentNode.value) {
          // asignar mi apuntador a la izquierda por lo tanto currentNode igual a currentNode.left
          currentNode = currentNode.left;
        // si mi item no es menor
        } else {
          // asignar mi apuntador a la derecha por o tanto  currentNode igual a currentNode.right
          currentNode = currentNode.right;
        }
      }
    }
    return false;
  }
}

const arbol = new BinarySearchTree();
```

# Lecturas en campus

- Kata JS Computer Science - Estructuras de datos

# Presentaciones

[10.1.1 Árboles Binarios](https://docs.google.com/presentation/d/1w7_NH3vX2tdxSWk6DwRt213Zpdz9d202AZfhEGD6Aho/edit?usp=sharing)