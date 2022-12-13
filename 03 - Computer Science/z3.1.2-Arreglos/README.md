# Arreglos

# Definición

Son un conjunto de datos ordenados por posiciones y todos asociados en una sola variable. Los datos pueden ser de cualquier tipo de dato, es decir, es posible crear una array que tenga una cadena en la primera posición, un número en el segundo, un objeto en el tercero y así sucesivamente. Podremos acceder a estos distintos datos de manera independiente o agrupándolos. Cabe resaltar que un array es un objeto.

## Características

- Almacena en una misma variable múltiples valores: valores primitivos, objetos, etc.
- Se referencían con un índice numérico.
- Puede almacenar diferentes tipos de datos

## Métodos

Existen diferentes métodos que nos ayudan a manipular arrays; los cuales ya están construidos dentro de JavaScript.

| Método | Acción |
| --- | --- |
| push | agrega un elemento al final del array |
| pop | borra el último elemento de un array |
| unshift | agrega un elemento al inicio del array |
| shift | borra el primer elemento de una array |
| splice | agrega un elemento a una parte de un array  |

## Crear un Array y sus métodos con clases

```jsx
class MyArray {
  constructor() {
    // Tener el conteo de cuantos elementos se agregarán al array
    // De inicio tenemos 0 elementos
    this.length = 0;
    // Donde guardaremos la información  
    this.data = {};
  }

  // Método que nos permite acceder a los datos
  get(index) {
    // retorna el elemento de acuerdo al indice
    return this.data[index];
  }

  // Método push ->agrega un elemento al final del array
  push(item) {
    // Agregamos nuestro elemento, tomamos al length y lo asignamos al item
    this.data[this.length] = item;
    // Al agregar el elemento, debemos de ir sumando en 1 a nuestro length
    this.length++;
    // Retornamos los datos
    return this.data
  }

  // Metodo pop -> borra el último elemento de un array
  pop() {
    // Obtenemos el último elemento de nuestro array
    // Guardamos este elemento, porque el método pop siempre nos retorna el elemento eliminado
    const lastItem = this.data[this.length - 1]
    // Utilizamos la palabra reservada delete, que nos ayudará a eliminar ese elemento
    delete this.data[this.length - 1]
    //  Debemos restar de length, el elemento eliminado
    this.length--;
    // Retornamos el elemento borrado
    return lastItem
  }

  // Método para eliminar un elemento especificando su indice
  /*
  Cuando queremos eliminar el elemento del indice 1, vemos como el elemento del indice 0 
  se queda en la misma posición pero el elemento del indice 3, debera cambiar de posición al
  indice 2; por esta razón tendremos que crear un metodo que nos ayude a modificar los 
  indices.

  NOTA: el index que le pasamo al metodo deleteItem, será el mismo que le pasaremos al método shiftIndex
  
  */
  deleteItem(index) {
    // Guardamos el elemento que vamos a borrar, para poder retornarlo al final
    const item = this.data[index];
    // Llamamos a nuestro método shiftIndex()
    this.shiftIndex(index);
    // Retornamos el elemento eliminado
    return item;
  }

  // Método para modificar los indices cuando se borra un elemento
  shiftIndex(index) {
    // Ponemos let i = index, porque asi no recorremos todo el array y solo inciamos desde el elemento que vamos a eliminar
    for (let i = index; i < this.length - 1; i++) {
      // Guardamos el elemento que segúia del elemento borrado a su nuevo índice.
      // Por eso this.data[i] hace referencia el indice del elemento borrado
      // this.data[i + 1] hace referencia al elemento que ocupara el indice del elemento que se eliminó
      this.data[i] = this.data[i + 1];
    }
    // Eliminamos al último elemento del array
    delete this.data[this.length - 1];
    // Al borrar un elemento deberemos de restar en uno al length
    this.length--;
  }

  // Método unshift -> agrega un elemento al inicio del array
  unshift(item) {
    if (!item) {
      return this.length;
    }
    if (this.length === 0) {
      this.data[0] = item;
      this.length++;
      return this.length;
    }

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = item;

    this.length++;
    return this.length;
  }

  // Método shift -> borra el primer elemento de una array

  shift(){
    if(this.length === 0){
      return undefined
    }

    const item = this.data[0]

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }

    this.length--;
  
    delete this.data[this.length]
    return item;
  }

}

const myArray = new MyArray();
```

# Lecturas en campus

- Kata JS Computer Science - Estructuras de datos