# Flexbox

# ¿Qué es Flexbox?

Flexbox es una forma de alinear el contenido en un espacio concreto. Es un modelo unidimensional de layout, el cual nos ayuda a distribuir el espacio entre los items de una interfaz y mejora las capacidades de alineación. 

Describimos a flexbox como unidimensional, ya que maneja el layout en una sola dimension a la vez, ya sea como fila o columna.

## Los dos ejes de flexbox

Cuando utilizamos flexbox, debemos de pensar en dos ejes, el eje principal por defecto en flexbox es el eje horizontal  las “x” y el eje cruzado es el eje vertical las “y”.

### Eje principal

La propiedad `flex-direction`, definirá el eje principal.

- Si elegimos `row` o `row-reverse` el eje principal sera el eje X y el eje cruzado será el eje Y.

![flexbox1.png](./images/flexbox1.png)

- Si elegimos `column` o `column-reverse` el eje principal se el eje Y y el eje cruzado será el eje X.

![felxbox2.png](./images/flexbox2.png)

<aside>
💡 Explicación con ejemplos de Flexbox

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox</title>
  <link rel="stylesheet" href="flexbox.css">
</head>

<body>

  <h1>Flexbox</h1>
  <p>Flexbox es un módulo de diseño de CSS3 que se creó para mejorar
    la forma en la que se hace diseño responsive, evitando así el uso de
    float, escribiendo menos código y facilitando el posicionamiento de elementos</p>
  <p>Para poder utilizar flexbox, le deberemos de asignar la propiedad
    display: flex a nuestro contenedor padre.</p>

  <div class="contenedor1">
    <div class="card-general card1">Card 1</div>
    <div class="card-general card2">Card 2</div>
    <div class="card-general card3">Card 3</div>
    <div class="card-general card4">Card 4</div>
    <div class="card-general card5">Card 5</div>
    <div class="card-general card6">Card 6</div>
    <div class="card-general card7">Card 7</div>
    <div class="card-general card8">Card 8</div>
    <div class="card-general card9">Card 9</div>
    <div class="card-general card10">Card 10</div>
    <div class="card-general card11">Card 11</div>
    <div class="card-general card12">Card 12</div>
  </div>

  <!-- Centrar elementos verticalmente -->
  <h3>Centrar elementos verticalmente</h3>
  <div class="contenedor2">
    <div class="card-general card1">Card 1</div>
    <div class="card-general card2">Card 2</div>
    <div class="card-general card3">Card 3</div>
  </div>

    <!-- Centrar elementos verticalmente y horizontalmente -->
    <h3>Centrar elementos verticalmente y horizontalmente</h3>
    <div class="contenedor3">
      <div class="card-general card1">Card 1</div>
      <div class="card-general card2">Card 2</div>
      <div class="card-general card3">Card 3</div>
    </div>

  <!-- Flex wrap -->
  <h3>Utlizar flex wrap para que nuestros elementos se ordenen en más de una fila o columna</h3>
  <p>Sin flex wrap</p>
  <div class="contenedor4">
    <div class="card-general card1">Card 1</div>
    <div class="card-general card2">Card 2</div>
    <div class="card-general card3">Card 3</div>
    <div class="card-general card4">Card 4</div>
    <div class="card-general card5">Card 5</div>
    <div class="card-general card6">Card 6</div>
    <div class="card-general card7">Card 7</div>
    <div class="card-general card8">Card 8</div>
    <div class="card-general card9">Card 9</div>
    <div class="card-general card10">Card 10</div>
    <div class="card-general card11">Card 11</div>
    <div class="card-general card12">Card 12</div>
  </div>

  <p>Con flex wrap</p>
  <div class="contenedor5">
    <div class="card-general card1">Card 1</div>
    <div class="card-general card2">Card 2</div>
    <div class="card-general card3">Card 3</div>
    <div class="card-general card4">Card 4</div>
    <div class="card-general card5">Card 5</div>
    <div class="card-general card6">Card 6</div>
    <div class="card-general card7">Card 7</div>
    <div class="card-general card8">Card 8</div>
    <div class="card-general card9">Card 9</div>
    <div class="card-general card10">Card 10</div>
    <div class="card-general card11">Card 11</div>
    <div class="card-general card12">Card 12</div>
  </div>

  <h3>flex-grow</h3>
  <p>Es una propiedad de los hijos</p>
  <p>Le indica al elemento si debe expandirse para ocupar el espacio sobrante</p>
  <p>Por defecto todos los elementos cuentan con un flex-grow de 0; pero podemos modifcar
    este comportamiento utilizando numeros positivos; los números negativos no tienen ningun efecto
  </p>
  <p>Por ejemplo si le asignamos un flex-grow de 1 a todos los elementos; estos creceran en una misma proporción; 
    sin embargo, si le asignamos un flex-grow de 2 a un solo elemento, este tomará el doble del espacio restante. 
  </p>
  <p>Le agregaremos la propiedad flex-grow a nuestra card3</p>
  <div class="contenedor6">
    <div class="card-general card1">Card 1</div>
    <div class="card-general card2">Card 2</div>
    <div class="card-general card3">Card 3</div>
    <div class="card-general card4">Card 4</div>
  </div>
  <p>Le agregaremos la propiedad flex-grow a nuestra card3 y card1</p>
  <div class="contenedor7">
    <div class="card-general card1">Card 1</div>
    <div class="card-general card2">Card 2</div>
    <div class="card-general card3">Card 3</div>
    <div class="card-general card4">Card 4</div>
  </div>

  <h3>flex-shrink</h3>
  <p>Es una propiedad de los hijos</p>
  <p>Al contrario de flex-grow, flex-shrink le indica al elemento si debe reducirse cuando no tiene espacio.</p>
  <p>Por defecto los elementos tienen un flex-shrink de 0; podemos modificar este comportamiento aplicandole un
    valor positivo mayor a 0 para indicarle que se reduzca en mayor proporción o un valor de 0 para que no se reduzca
  </p>
  <p>Le agregaremos la propiedad flex-shrink a nuestra card3</p>
  <div class="contenedor8">
    <div class="card-general card1">Card 1</div>
    <div class="card-general card2">Card 2</div>
    <div class="card-general card3">Card 3</div>
    <div class="card-general card4">Card 4</div>
    <div class="card-general card5">Card 5</div>
    <div class="card-general card6">Card 6</div>
    <div class="card-general card7">Card 7</div>
    <div class="card-general card8">Card 8</div>
    <div class="card-general card9">Card 9</div>
    <div class="card-general card10">Card 10</div>
    <div class="card-general card11">Card 11</div>
    <div class="card-general card12">Card 12</div>
  </div>
  <p>Le agregaremos la propiedad flex-shrink a nuestra card3 y card1</p>
  <p>Card 1 con flex-shrink de 0</p>
  <p>Card 3 con flex-shrink de 5</p>
  <div class="contenedor9">
    <div class="card-general card1">Card 1 con flex-shrink de 0</div>
    <div class="card-general card2">Card 2</div>
    <div class="card-general card3">Card 3 con flex-shrink de 5</div>
    <div class="card-general card4">Card 4</div>
    <div class="card-general card5">Card 5</div>
    <div class="card-general card6">Card 6</div>
    <div class="card-general card7">Card 7</div>
    <div class="card-general card8">Card 8</div>
    <div class="card-general card9">Card 9</div>
    <div class="card-general card10">Card 10</div>
    <div class="card-general card11">Card 11</div>
    <div class="card-general card12">Card 12</div>
  </div>

  <h3>flex-basis</h3>
  <p>Le agregaremos la propiedad flex-basis a nuestra card3</p>
  <div class="contenedor10">
    <div class="card-general card1">Card 1</div>
    <div class="card-general card2">Card 2</div>
    <div class="card-general card3">Card 3</div>
    <div class="card-general card4">Card 4</div>
  </div>
  <p>Le agregaremos la propiedad flex-basis a nuestra card3 y card1</p>
  <div class="contenedor11">
    <div class="card-general card1">Card 1</div>
    <div class="card-general card2">Card 2</div>
    <div class="card-general card3">Card 3</div>
    <div class="card-general card4">Card 4</div>
  </div>

  <h3>order</h3>
  <p>Le agregaremos la propiedad order negativo a nuestra card3 y  order positivo card1</p>
  <div class="contenedor12">
    <div class="card-general card1">Card 1</div>
    <div class="card-general card2">Card 2</div>
    <div class="card-general card3">Card 3</div>
    <div class="card-general card4">Card 4</div>
  </div>

  <p>Le agregaremos la propiedad order negativo a nuestra card3 y  order positivo card1</p>
  <div class="contenedor13">
    <div class="card-general card1">Card 1</div>
    <div class="card-general card2">Card 2</div>
    <div class="card-general card3">Card 3</div>
    <div class="card-general card4">Card 4</div>
  </div>

</body>

</html>
```

```css
/* FLEXBOX */

/* 

Flexbox es un módulo de diseño de CSS3 que se creó para mejorar
la forma en la que se hace diseño responsive, evitando así el uso de
float, escribiendo menos código y facilitando el posicionamiento de elementos 

*/

body {
  background-color: #4537d9;
  color: #fff;
}

.card-general {
  background-color: rgba(250, 250, 250, 0.8);
  border-radius: 8px;
  text-align: center;
  color: #0d0653;
}

.contenedor {
  padding: 20px 10px;
  border: 2px solid rgb(229, 229, 240);

  /* display: flex
  
  Para poder utilizar flexbox, le deberemos de asignar la propiedad
  display: flex a nuestro contenedor padre 
  
  */

  display: flex;

  /* flex-direction: row | row-reverse | column | column-reverse ;

  Es la encargada de definir el eje principal y secundario de nuestros
  elementos hijos, al igual que la direccion de nuestros elementos.
  Por defecto, la direccion de los elementos flex es row.

  */

  flex-direction: row;

/* flex-wrap: nowrap | wrap | wrap-reverse

Por defecto flex, trata de disponer de los elementos en una misma línea, 
si no es el caso que necesitás, con flex-wrap podés ordenar los elementos 
en mas de una fila o columna. 

*/

flex-wrap: wrap;

/*   flex-flow: column wrap;

La propiedad flex-flow, recibe dos parametros, primero la direccion de nuestros elementos (flex-direction),
y el segundo parametro es si nuestros elementos se ordenaran o no (flex-wrap).
Esta propiedad junta las prpiedades de flex-direction y flex-wrap.

flex-direction: column;   ----> flex-flow: column wrap;
flex-wrap: wrap;

*/

/* justify-content: stretch | flex-start | flex-end | center | space-between | space-around | space-evenly ;

Cuando nombramos el eje principal de un elemento padre, es decir el eje 
horizontal, se destaca esta propiedad para dar direccionamiento a los 
elementos hijos.

*/

justify-content: space-evenly;

/* align-items: flex-start | flex-end | center | stretch | baseline ;

Al igual que justify-content esta propiedad te permite distribuir los elementos en un eje, 
pero esta vez en el eje vertical.

*/

  align-items: center;
}

/* Centrar los elementos verticalmente */

.contenedor2{
  height:400px;
  display:flex;
  flex-direction: column;
  justify-content:center;
  border: 1px solid white;
}

.contenedor2 .card-general{
  width:200px;
  margin: .5em;
  padding: 2em;
}

/* Centrar los elementos verticalmente y horizontalmente */

.contenedor3{
  height:400px;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  border: 1px solid white;
}

.contenedor3 .card-general{
  width:200px;
  margin: .5em;
  padding: 2em;
}

/* Flex wrap */

/* Sin flex wrap */
.contenedor4{
  display: flex;
  flex-direction: row;
  border: 1px solid white;
}

.contenedor4 .card-general{
  margin: .5em;
  padding: 2em;
}

/* Con flex wrap */

.contenedor5{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid white;
}

.contenedor5 .card-general{
  margin: .5em;
  padding: 2em;
}

/* Flex-grow

Propiedad que se aplica a los hijos.
Esta propiedad permite a una caja crecer cuando sobra espacio dentro del espacio "flex".
El valor que le damos a flex-grow, es una proporcion; es decir la proporciona a partir
de la cual se repartira el espacio sobrante.
Su valor solo puede ser un número entero (no negativo).
En flex-grow:x el numero x indica cuantas unidades crecerá el item para calcular su tamaño final. 
Por ejemplo, flex-grow: 3 significa que el item crecerá 3 unidades.

*/

/* Le agregaremos la propiedad flex-grow a nuestra card3 */

.contenedor6{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid white;
}

.contenedor6 .card-general{
  margin: .5em;
  padding: 2em;
}

.contenedor6 .card3{
  flex-grow: 1;
}

/* Le agregaremos la propiedad flex-grow a nuestra card3 y card1 */
.contenedor7{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid white;
}

.contenedor7 .card-general{
  margin: .5em;
  padding: 2em;
}

.contenedor7 .card1{
  flex-grow: 3;
}

.contenedor7 .card3{
  flex-grow: 1;
}

/* flex-shrink

Por defecto todos los elementos tienen un "flex-shrink" de uno.
Eso significa que cuando no hay espacio suficiente en un espacio "flex",
todos los elementos se reducen proporcionalmente en base a uno.
Con la propiedad flex-shrink se controla cómo se encogerán los elementos.

NOTA: podras ver mejor el funcionamiento de flex-shrink, si haces pequeña la pantalla,
ya sea modificando el tamaño de la ventana de tu navegador o utilizando el inspeccionador de codigo
en la parte de responsive

*/

/* Le agregaremos la propiedad flex-shrink a nuestra card3 */

.contenedor8{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid white;
}

.contenedor8 .card-general{
  margin: .5em;
  padding: 2em;
}

.contenedor8 .card3{
  background-color: pink;
  flex-shrink: 2;
}

/* Le agregaremos la propiedad flex-shrink a nuestra card3 y card1 */
.contenedor9{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid white;
}

.contenedor9 .card-general{
  margin: .5em;
  padding: 2em;
}

/* cuando aplicamos un flex-shrink de 0 nunca se va a reducir*/
.contenedor9 .card1{
  flex-shrink: 0;
}

.contenedor9 .card3{
  flex-shrink: 5;
}

/* flex-basis

Un elemento que tenga flex-basis, nos permite controlar tanto el ancho como 
el alto de nuestros componentes, permitiéndonos hacer componentes flexibles 
y fácilmente manejables tan solo cambiando el eje sobre el que queremos que actúe.

El flex-basis, sera width cuando nuestro eje principal es el horizontal, 
y sera height cuando nuestro eje principal es el vertical, 
esto dependera de la direccion de nuestro espacio flex.

*/

/* Le agregaremos la propiedad flex-basis a nuestra card3 
Aqui el flex-basi es la ancho, ya que tenemos una direccion de row, 
por lo tanto nuestro eje princial es horizontal
*/

.contenedor10{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid white;
}

.contenedor10 .card-general{
  margin: .5em;
  padding: 2em;
}

.contenedor10 .card3{
  flex-basis: 400px;
}

/* Le agregaremos la propiedad flex-basis a nuestra card3 y card1
Aqui el flex-basi es la altura, ya que tenemos una direccion de columna, 
por lo tanto nuestro eje princial es vertical
*/
.contenedor11{
  display: flex;
  flex-direction: column;
  border: 1px solid white;
}

.contenedor11 .card-general{
  margin: .5em;
  padding: 2em;
}

.contenedor11 .card1{
  flex-basis: 200px;
}

.contenedor11 .card3{
  flex-basis: 60px;
}

/* order

Con la propiedad order, podemos alterar un elemento concreto  dentro de un espacio flex
Por defecto todos los elementos tienen un order de cero.
Los valores negativos se situaran en primer lugar, si son positivos se posicionaran al final

*/

/* Le agregaremos la propiedad order negativo a nuestra card3 y  order positivo card1 */

.contenedor12{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid white;
}

.contenedor12 .card-general{
  margin: .5em;
  padding: 2em;
}

.contenedor12 .card1{
 order: 4;
 background-color: pink;
}

.contenedor12 .card3{
  order: -1;
  background-color:lightgreen;
}

/* Le agregaremos la propiedad order negativo a nuestra card3 y  order positivo card1*/
.contenedor13{
  display: flex;
  flex-direction: column;
  border: 1px solid white;
}

.contenedor13 .card-general{
  margin: .5em;
  padding: 2em;
}

.contenedor13 .card1{
  order: 4;
  background-color: pink;
 }
 
 .contenedor13 .card3{
   order: -1;
   background-color:lightgreen;
 }
```

</aside>

# Lecturas en Campus

- Kata Intro a la Web - Flexbox

# Recursos

[Flexbox cheat sheet · Web Dev Topics · Learn the Web](https://learn-the-web.algonquindesign.ca/topics/flexbox-cheat-sheet/)

[Flexbox Froggy](https://flexboxfroggy.com/#es)

[What The Flexbox?!](https://flexbox.io/)

[What The Flexbox?!](https://flexbox.io/)

[FLEX: A simple visual cheatsheet for flexbox](https://flexbox.malven.co/)