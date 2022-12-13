# Pilares de POO

## Abstracción

Es separar o abstraer cada uno de los datos de un objeto para poder crear su molde (clase).

## Encapsulamiento

Guardar, aislar, proteger un dato para que este sea privado y no pueda ser visto o modificado.

Cuando hablamos de encapsulamiento nos referimos a:

- Esconder métodos y atributos
- No permitir la modificación de métodos y atributos

**Encapsulamiento en JavaScript**

- ~~Esconder métodos y atributos~~ → En JavaScript no podemos esconder métodos y atributos. Todo en JavaScript es público
- No permitir la modificación de métodos y atributos

**Formas de aplicar encapsulamiento en JavaScript**

- **Getters y setters**
- Namespaces
- Object.defineProperties
- Módulo de ES6

## Getter y Setters

Son propiedades de acceso o accessors. Son  funciones que se ejecutan para obtener (“get”) y asignar (“set”) un valor, pero que para un código externo se ven como propiedades normales.

Getters y setters pueden ser usados como envoltorios sobre valores de propiedad “reales” para obtener más control sobre ellos.

Por ejemplo, si queremos prohibir nombres demasiado cortos para “usuario”, podemos guardar “nombre” en una propiedad especial “nombre”. Y filtrar las asignaciones en el setter:

```jsx
class User {
  constructor({nombre, email, username, password})
  {
    this.nombre = nombre;
    this.email = email;
    // Le agregamos un guión bajo antes del nombre de nuestro atributo
    this._username = username;
    this.password = password;
  }
  get username() {
    return this._username;
  }

  set username(value) {
    if (value.length < 4) {
      console.error("El nombre es demasiado corto, necesita al menos 4 caracteres");
      return;
    }
    this._username = value;
  }

}

const pedro = new User('Pedro Alvarez', 'pedro@mailito.com', 'pedro398', 'pe34dr0')

pedro.username //'pedro398'
pedro.username = 'ped' // error El nombre es demasiado corto, necesita al menos 4 caracteres
pedro.username= 'pedrofeliz' // 'pedrofeliz'
```

## Herencia

Recordemos que una de las filosofías en programación es **Don’t repeat yourself,** ya que toda pieza de información duplicada  incrementa la dificultad en los cambios y evolución.

La **herencia** nos permite crear nuevas clases a partir de otras, se basa en modelos y conceptos de la vida real. También tenemos una jerarquía de padre e hijo.

Es crear una o más clases a partir de una clase que ya existe. Y se les llaman subclases.

![pilares-1](Pilares%20de%20POO%20c0b4d61672e8488b8a641befc6487cef/pilares-1.png)

![pilares-2](Pilares%20de%20POO%20c0b4d61672e8488b8a641befc6487cef/pilares-2.png)

Podemos ver que muchos atributos y métodos los tenemos en varios integrantes, esto nos indica que podemos crear una superclase.

![pilares-3](Pilares%20de%20POO%20c0b4d61672e8488b8a641befc6487cef/pilares-3.png)

```jsx
class SeleccionFutbol{
  constructor({id,nombre,apellido, edad}){
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  viajar(pais){
    return pais
  }

  consentrarse(fecha){
    return fecha
  }

}

// Utilizamos la palabra reservada extends para heredar todos los atributos y métodos de la clase padre
class Futbolista extends SeleccionFutbol {
  constructor({ tiempo_jugando, pases_completados, numero_goles, ...props}){
    // Utilizamos la palabra reservada super() para llamamar al constructor de nuestra clase madre o superprototipo o superclase
    // Nos permite referenciar o llamar al constructor de nuestra superclase
    super({...props})
    this.tiempo_jugando = tiempo_jugando;
    this.pases_completados = pases_completados;
    this.numero_goles = numero_goles;
  }

}

const cr7 = new Futbolista({id:1,nombre:'Cristiano', apellido:'Ronaldo', edad:30, tiempo_jugando:23, pases_completados:2, numero_goles:30})
```

## Polimorfismo

Es construir métodos con el mismo nombre pero con comportamiento diferente

Le permite a las subclases cambiar o anular el comportamiento de los métodos u atributos que heredan de una super clase.

```jsx
class Animal{
  constructor({nombre, edad, raza, color}){
    this.nombre = nombre;
    this.edad = edad;
    this.raza = raza;
    this.color = color;
  }

  makeSound(){
    return console.log("Grr...")
  }

}

class Perro extends Animal {
  constructor({ cola, patas,  ...props}){
    super({...props})
    this.cola = cola;
    this.patas = patas;
  }

  makeSound(){
    return console.log("Woof")
  }
}

class Gato extends Animal {
  constructor({ cola, patas,  ...props}){
    super({...props})
    this.cola = cola;
    this.patas = patas;
  }

  makeSound(){
    return console.log("Meow")
  }
}

const dalmata = new Perro({cola:'Long', patas: '4', nombre: 'Pancho', edad: 4, raza: 'dalmata', color: 'blanco y negro'})
const michi = new Gato({cola:'Long', patas: '4', nombre: 'Yuki', edad: 2, raza: 'Bengala', color: 'café y negro'})

dalmata.makeSound() // "Woof"
michi.makeSound() // "Meow"
```

# Lecturas en campus

- Kata JS Computer Science - Herencia

# Presentaciones


[7.4.1 Herencia](https://docs.google.com/presentation/d/1EWb4Fkc2d6MS_o9sGOMrSH7MLT8ahNPO0wrZiiRlo_I/edit?usp=sharing)

# Recursos

[Propiedades y métodos privados y protegidos.](https://es.javascript.info/private-protected-properties-methods)