# Pilas

Una pila o stack es una estructura de datos para almacenar listas o colecciones de forma lineal y unidireccional; por lo tanto, solo puedes tomar dos acciones:

1. añadir elementos al final de la lista
2. sacar elementos del final de la lista

Estas acciones son conocidas como **LIFO** (*Last In, First Out),* el último elemento en entrar es el primer elemento en salir.

![pilas-1](Pilas%208274a329d3ce44489c227051a2c77f6d/pilas-1.png)

Algunos ejemplos de la vida real son:

- Montaña de ropa - algunas ocasiones acomodas tus playeras en una pila y sin darte cuenta siempre utilizas la primera playera.
- Montaña de hotcakes - cuando cocinas hotcakes empiezas a apilar un hotcake sobre otro y al momento de comer empiezas por el último que acomodaste.
- Montaña de sillas - cuando estás acomodando las sillas, normalmente las pones una encima de otra; pero cuando necesitas utilizar las sillas, primero sacas la última que pusiste y así sucesivamente.

![pilas-2](Pilas%208274a329d3ce44489c227051a2c77f6d/pilas-2.png)

En JavaScript, esta estructura no existe, por lo que se utiliza un arreglo en su lugar comúnmente. Podemos utilizar los métodos de Array.prototype.push() y Array.prototype.pop() para imitar los métodos de un *stack*. El problema con esto es que los arreglos tienen muchos otros métodos que los *stacks* no tienen. Sin querer, podemos utilizar esos otros métodos rompiendo las reglas de lo que hace un *stack*. Vamos a implementar una clase que solo nos permita acceder los métodos que tiene un *stack*.

### **Métodos de una pila**

Tradicionalmente, una pila debe contar con métodos que permitan: agregar nuevos elementos, sacarlos y revisarlos *(uno o más)*. Si bien al hacer una implementación propia, podemos llamar a estos métodos de cualquier forma, existe una convención acordada de usar las siguientes definiciones:

- **push:** Agrega un nuevo valor a la pila, **ubicándolo al final de ésta**.
- **pop:** Retorna el último valor ingresado a la pila, **sacándolo de ésta.**
- **peek:** Retorna el último valor ingresado a la pila, **sin sacarlo de ésta.**
- **size:** Retorna el número de elementos que contiene la pila.
- **print:** Muestra el contenido de la pila.

```jsx
class Stack {
  constructor() {
    this.stack = {};
    // utilizamos un contador que nos ayudará para seguir la posición actual y número de elementos que hemos ido agregando
    this.count = 0;
  }

  // Método push: Agrega un nuevo valor a la pila, ubicándolo al final de ésta.
  // Este método recibe como parametro un element que sera el que se añadira al stack
  push(element) {
    // Primero asignamos el elemento al stack con la notacion de corchetes para hacer una signacion directa
    // Utilizamos el this.count para hacer referencia a la posicion actual 
    this.stack[this.count] = element;
    // Aumentamos en 1 count 
    this.count++;
    // Retornamos el stack
    return this.stack;
  }

  // Método pop: retorna el último valor ingresado a la pila, sacándolo de ésta.
  pop() {
		if(this.count === 0) {
      return null;
    }
    // Reducimos el count en 1
    this.count--;
    // Guardamos el elemento que vamos a eliminar en una variable para despues poderlo retornar 
    const element = this.stack[this.count];
    // Borramos el elemento
    delete this.stack[this.count];
    return element;
  }

  // Método peek: retorna el último valor ingresado a la pila, sin sacarlo de ésta.
  peek() {
    // Retornamos el ultimo valor de la pila. utilizando this.count - 1, para ubicar la posicion final.
    // Recordemos que this.count contiene el numero de lementos de una pila, pero la posicion de las pila empieza desde 0
    return this.stack[this.count - 1];
  }

  // Método size: retorna el número de elementos que contiene la pila.
  size() {
    return this.count;
  }

  // Método print: muestra el contenido de la pila.
  print() {
    console.log(this.stack);
  }
}
const myStack = new Stack();
```

# Lecturas en campus

- Kata JS Computer Science - Estructuras de datos

# Presentaciones


[9.2.1 Estructuras de datos | Pilas](https://docs.google.com/presentation/d/1KF3BhRr6XxjQIYlR2mlHcSJWMMMIOwVFjFKR7pkgvL8/edit?usp=sharing)