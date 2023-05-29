# Clases

## La palabra reservada `this.`

La palabra `this` es una palabra que utilizamos mucho dentro de las clases; nos sirve para hacer referencia al objeto instanciado y no a la clase.

```jsx
class Person {
  name;                 // Propiedad (variable de clase sin valor definido)

  constructor(name) {
    this.name = name;   // Hacemos referencia a la propiedad name del objeto instanciado
  }
}
```

En el ejemplo anterior, podemos observar que `this` no se refiere a la clase **Person**; sino a la variable que utilizamos al instanciarla. Es decir, si escribimos **`const pedro = new Person()`,** se ejecuta el constructor y `this` haría referencia a `pedro`; por lo tanto, [`this.name`](http://this.name) hace referencia a `pedro.name`

## Prototipos

**Estructura de las clases en JavaScript**

- Definimos un prototipo con la palabra reservada `function`, seguido del nombre empezando con Mayúsculas.
- Los atributos que recibirá esta función nos servirán para crear los atributos del prototipo.
- Para definir **atributos** necesitas el contexto `this`, que representa la instancia del objeto.
- **Métodos** para definir las acciones de la clase.
- Para crear una **instancia**, deberás declarar una variable e invocar la clase con la palabra reservada `new`.

```jsx
function Alumno(nombre, edad, grado, color, materias) {
  // Atributos
  this.name = nombre;
  this.age = edad;
  this.grade = grado;
  this.color = color;
  this.subjects = materias;

  // Métodos
  // Opción 1
  this.agregarMaterias = function(nuevaMateria){
    this.subjects.push(nuevaMateria);
  }
}

  // Métodos
  // Opción 2
  // Creamos un método para nuestro prototipo Alumno por fuera del prototipo, utilizando proptotype
  Alumno.prototype.agregarMaterias = function(nuevaMateria){
    this.subjects.push(nuevaMateria);
  }

  // Instancia
  const pedrito = new Alumno('Pedro Pereira', 11, 3, 'verde', ['Matemáticas', 'Geografía'])
  const juan = new Alumno('Juan Villalobos', 15, 8, 'amarillo', ['Matemáticas', 'Geografía', 'Algebra'])
```

## Clases

Recordemos que JavaScript es un lenguaje orientado a objetos, no está basado en clases; sino en que está basado en prototipos.

ES6 introdujo la palabra reservada `class` , sintaxis para crear clases y manejar la herencia en JavaScript, permitiéndonos resolver problemas con el paradigma de programación orientada a objetos (POO).

Entonces las clases son prototipos en JavaScript con una sintaxis un poco diferente.

### **Estructura de las clases en JavaScript**

La estructura de clases en JavaScript consiste en:

- Definir la clase con la palabra reservada `class`, seguido del nombre, por convención se empieza con mayúscula.
- La **función constructora** sirve para crear las variables necesarias en la instancia del objeto, a partir de los argumentos en la instancia.
- Para definir **atributos** necesitas el contexto `this`, que representa la instancia del objeto.
- **Métodos** para definir las acciones de la clase.
- Para crear una **instancia**, deberás declarar una variable e invocar la clase con la palabra reservada `new`.

```jsx
// PROTOTIPO USANDO SINTAXIS DE CLASE 
  class Alumno {
    // Constructor
    constructor(nombre, edad, grado, color, materias) {
        // Atributos
        this.name = nombre;
        this.age = edad;
        this.grade = grado;
        this.color = color;
        this.subjects = materias;
    }
    
    // Método
    agregarMaterias(nuevaMateria){
      this.subjects.push(nuevaMateria);
    }
}

// Instancia
const pedrito = new Alumno('Pedro Pereira', 11, 3, 'verde', ['Matemáticas', 'Geografía'])
const juan = new Alumno('Juan Villalobos', 15, 8, 'amarillo', ['Matemáticas', 'Geografía', 'Algebra'])
```

### Patrón **“RORO”**

Cuando tenemos muchos parámetros en nuestro constructor, se vuelve tedioso tener que acordarnos del orden de los parámetros al crear una instancia, provocando errores. Además no podemos tener parámetros por defecto.

Para resolver esto utilizamos el **patrón “RORO”** del Inglés “Receive an object, return an object” (Recibe un objeto, devuelve un objeto).

No obstante, si recibimos un objeto, sí podemos poner parámetros por defecto y no tendríamos un error en caso de no recibir un parámetro a la hora de enviar los argumentos al instanciar la clase.

Otra ventaja es que esos argumentos ya no necesitan estar en el mismo orden de nuestro constructor.

```jsx
// PATRON RORO

class Alumno {
  // Constructor
  constructor({ 
    nombre, 
    edad, 
    grado, 
    color, 
    materias,
    historial_academico, 
    historial_medico, 
    contacto_de_emergencia,
    // valor por defecto
    alergias = []
  
  }) {
    // Atributos
    this.name = nombre;
    this.age = edad;
    this.grade = grado;
    this.color = color;
    this.subjects = materias;
    this.historial_academico = historial_academico;
    this.historial_medico = historial_medico;
    this.contacto_de_emergencia = contacto_de_emergencia;
    this.alergias = alergias;
  }

  // Método
  agregarMaterias(nuevaMateria) {
    this.subjects.push(nuevaMateria);
  }
}

// Instancia
const pedrito = new Alumno({
  subjects:['Matemáticas', 'Geografía'],
  age: 11, 
  historial_médico: {tipo_de_sangre: 'O+'},
  grade: 3, 
  contacto_de_emergencia: {nombre:'Surinde', telefono: 55555555555},
  color: 'verde', 
  historial_academico: {kinder: 'Happy Kinder', primaria: "Liceo Albert"},
  name: 'Pedro Pereira', 
})
```

# Lecturas en campus

- Kata JS Computer Science - Prototype

# Presentaciones


[7.4.1 Herencia](https://docs.google.com/presentation/d/1EWb4Fkc2d6MS_o9sGOMrSH7MLT8ahNPO0wrZiiRlo_I/edit?usp=sharing)