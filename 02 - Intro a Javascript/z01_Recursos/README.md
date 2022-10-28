# Objetos

## Definición

Los objetos son una colección de propiedades. Una **propiedad** es una asociación entre un nombre (o **clave**) y un **valor**.

El **valor** de una propiedad puede ser una función en cuyo caso la propiedad es conocida como **método**.

## Objetos literales

Se les denomina objetos literales, porque nosotros lo indicamos al momento de crear la variable.

### Sintaxis

```jsx
var carro ={
	marca: 'Ford',
	modelo: 'Fiesta',
	año: 2010,
	avanzar: funcion(){codigo de la funcion}
}
```

```jsx
var carro = new Object 
carro.marca = 'Ford';
carro.modelo ='Fiesta';
carro.año = 2010 
```

Ejemplo

```jsx
var perro = {
  color: 'café',
  nombre: 'Nilo',
  numPatas: 4,
  edad: 5,
  /*
  Cuando utilizamos metodos y queremos hacer referencia a
  alguna de las propiedades dentro del metodo,
  deberemos utilizar la palabra reservada this seguida de un punto 
  y el nombre de la propiedad.
  This hace referencia al mismo objeto
  */
  ladra: function(){alert('Guau Guau !! Soy ' + this.nombre)},
  raza: 'pitbull',
  tamaño: 'mediano',
  _id: 12345,
  amigosPerrunos: ['Aria', 'Tuna', 'Duque', 'Mariposa', 'Wally']
};
```

## Como ingresamos a una propiedad

1. Notación de puntos

```jsx
console.log(perro.edad);
console.log(perro._id);
console.log(perro.amigosPerrunos);

// acceder a un elemento de array
console.log(perro.amigosPerrunos[1]);

// acceder al método
console.log(perro.ladra());
```

2. Notación de corchetes

```jsx
console.log(perro['edad']);
console.log(perro['_id']);
console.log(perro['amigosPerrunos']);
console.log(perro['amigosPerrunos']);
//--> acceder a un elemento de array
console.log(perro['amigosPerrunos'][1]);
```

## Eliminar una propiedad

```jsx
delete perro.color

console.log(perro)
```

## Destructuración

```jsx
var {nombre, color, numPatas} = perro;
console.log(nombre);
console.log(color);
```

# Lecturas en campus

- Kata JavaScript - Objetos literales

# Presentaciones

[](https://docs.google.com/presentation/d/176O9tQH4zqxE-8Shhwm-xKoVFcHEL8W6sGBSv82kzZc/edit)

## Recursos

[Trabajando con objetos - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects)