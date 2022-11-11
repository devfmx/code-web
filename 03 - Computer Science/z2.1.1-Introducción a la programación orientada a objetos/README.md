# Introducción a POO

### Paradigmas

Cuando estamos programando, tenemos diferentes formas de resolver nuestros algoritmos.

Por lo tanto los paradigmas de programación son caminos, indicaciones o lineamientos que seguimos para programar nuestras aplicaciones. 

Algunos de los paradigmas son los suiguientes: 

- Estructurado
- Orientado a objetos
- Funcional

### ¿Qué es la Programación Orientada a Objetos?

La programación orientada a objetos (POO) se basa en el concepto de objeto. Un objeto es una abstracción de una entidad que posee datos en forma de propiedades o atributos, y procedimientos en forma de métodos. Por ejemplo, si vemos a un perro como un objeto, un perro tiene propiedades como su raza o color, así como métodos como correr, ladrar, comer, etc.

La  Programación Orientada a Objetos se compone de 4 elementos:

1. Clases
2. Propiedades
3. Métodos
4. Objetos

Y cuatro Pilares:

1. Encapsulamiento
2. Abstracción
3. Herencia
4. Polimorfismo

### **Conceptos principales de la POO**

**Objetos**

Los objetos son estructuras de datos formadas por métodos y atributos, los cuales hereda de su prototipo padre.

**Clases**

Podemos ver a una **clase** como un molde de objetos. En una clase se **definen** las propiedades y métodos que pueden tener un objeto. Se dice que **un objeto es una instancia de una clase**. Cuando se crea un objeto a partir de una clase, se definen los valores de las propiedades del objeto.

**Propiedades**

Las propiedades son características que distinguen un tipo de objeto de otro, pero que varían entre objetos. En resumen son variables dentro de clases. Por ejemplo, los objetos de tipo perro pueden tener distintas razas, pero la propiedad “raza” es una que existe en todos los perros.

**Métodos**

Los métodos son acciones o procedimientos que puede llevar a cabo un objeto. En resumen son funciones dentro de clases. Por ejemplo, si un jugador fuera un objeto, un método del jugador sería “pase largo”.

**Instancia**

Es la creación de un objeto desde una clase a eso se le llama instancia o instancias.

### OBJETO EN JAVASCRIPT

**Objeto literal**

Los objetos son una colección de propiedades. Una **propiedad** es una asociación entre un nombre (o **clave**) y un **valor**.

El **valor** de una propiedad puede ser una función en cuyo caso la propiedad es conocida como **método**.

```jsx
var carro ={
	marca: 'Ford',
	modelo: 'Fiesta',
	año: 2010,
	avanzar: funcion(){codigo de la funcion}
}
```

<aside>
🚨 Los objetos literales no son lo mismo que las instancias de clases
Los objetos literales no son lo mismo que los objetos de POO
Los objetos literales si son instancias de prototipo object que viene creado por defecto del prototipo JavaScript

</aside>

**Prototipo**

JavaScript es un lenguaje orientado a objetos, pero no esta basado en clases cómo otros lenguajes; si no que esta basado en prototipos; esto significa que nuestros objetos de JavaScript pueden compartir propiedades y métodos.

Un prototipo es una estructura de código a partir de la cual se crean objetos, ya que guarda los atributos y métodos que luego podrán ser heredados por sus instancias.

Podemos pensarlo como un “molde” de objetos.

Como creamos un prototipo:

```jsx
function Carro (){
	// Atributos
  this.marca = 'Ford',
	this.modelo = 'Fiesta',
	this.año = 2010
}

const rayoMcQueen = new Carro();
```

Estructura del prototipo

- No estamos creando una clase, estamos creando una función.
- En esta función utilizamos la palabra reservada `this` para guardar nuestros atributos.
- Cuando llamamos a nuestra función y creamos la instancia de la clase utilizando la palabra reservada `new`

### Atributo ****`__proto__`

Cuando creamos un **objeto literal** en la consola, la consola nos muestra los atributos que guardamos en nuestro objeto literal y un objeto llamado `__proto__`

![Screen Shot 2022-11-04 at 1.47.47 a.m..png](Introduccio%CC%81n%20a%20POO%20dece6fdfdd604d26b53755879591b2e5/intro-POO-1.png)

Cuando creamos un **prototipo y una instancia** en la consola , la instancia del prototipo Carro es muy parecida a los objetos literales; pero con una diferencia, **la consola nos avisa que el objeto rayoMcQueen  es una instancia del prototipo Carro.**

![Screen Shot 2022-11-04 at 2.15.15 a.m..png](Introduccio%CC%81n%20a%20POO%20dece6fdfdd604d26b53755879591b2e5/intro-POO-2.png)

Entonces como nos afecta que tengamos un objeto literal o que trabajemos con instancias de un prototipo, si expandimos nuestro atributo  ****`__proto__` de cualquier objeto literal veremos que esta repleto de métodos y podemos acceder a todos estos métodos desde nuestros objetos literales sin necesidad de entrar al atributo  ****`__proto__`.

![Screen Shot 2022-11-04 at 7.08.58 a.m..png](Introduccio%CC%81n%20a%20POO%20dece6fdfdd604d26b53755879591b2e5/intro-POO-3.png)

Por ejemplo accedamos al método **`hasOwnProperty()`** en un objeto literal y en un prototipo.

Vemos que la consola nos devuelve `true` cuando accedemos al método **`hasOwnProperty()`** de nuestro objeto literal carro y nos devuelve `false` cuando accedemos desde nuestro objeto vacío. ¿Pero porque no devuelve false si no le agregamos atributos? Siempre que creamos un objeto literal en JavaScript vamos a tener por defecto el objeto `__proto__`

![Screen Shot 2022-11-04 at 7.12.59 a.m..png](Introduccio%CC%81n%20a%20POO%20dece6fdfdd604d26b53755879591b2e5/intro-POO-4.png)

Esto también sucede con los **arrays**, además te tener la lista de elemento también cuentan con su objeto `__proto__`

![Screen Shot 2022-11-04 at 7.23.01 a.m..png](Introduccio%CC%81n%20a%20POO%20dece6fdfdd604d26b53755879591b2e5/intro-POO-5.png)

**→De donde viene `__proto__`**

![Screen Shot 2022-11-04 at 7.25.53 a.m..png](Introduccio%CC%81n%20a%20POO%20dece6fdfdd604d26b53755879591b2e5/intro-POO-6.png)

JavaScript por dentro cuenta con algunos prototipos por defecto, entonces cuando escribimos llaves o corchetes JavaScript traduce automáticamente ese código para crear una nueva instancia de esos prototipos, ya sea Object o Array.

# Lecturas en campus

- **Kata JS Computer Science - POO**

# Presentaciones

[7.3.1 Intro a POO](https://docs.google.com/presentation/d/1koivjvzeqWebuXdxkmiNYXvwt2UGCg2X0jpc5VwTFNY/edit?usp=sharing)