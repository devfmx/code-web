# Floats

La propiedad de CSS float, nos permite ubicar un elemento al alzo izquierdo o derecho de su contenedor; es decir, nos permite que dos elementos floten el uno a lado del otro sin provocar un salto de linea.

Ten en cuenta que muchas veces lo elementos que flotan no se combinan bien con los elementos que no flotan.

<aside>
<img src="https://www.notion.so/icons/code_purple.svg" alt="https://www.notion.so/icons/code_purple.svg" width="40px" /> Ejemplo de Floats

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Float</title>
  <link rel="stylesheet" href="./float.css">
</head>
<body>
  <h1>Float</h1>

  <p>Sin floats</p>
  <div class="float-div">
    <p >Parrafo 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium cum nihil aut eligendi ullam
      nobis, voluptatum distinctio natus. Voluptate cumque, voluptatum corrupti officia assumenda quos eligendi
      reprehenderit nam laboriosam.</p>
    <p>Parrafo 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium cum nihil aut eligendi ullam
      nobis, voluptatum distinctio natus. Voluptate cumque, voluptatum corrupti officia assumenda quos eligendi
      reprehenderit nam laboriosam.</p>
  </div>

  <p>Float left</p>
  <div class="float-div">
    <p class="float-left">Parrafo 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium cum nihil aut eligendi ullam
      nobis, voluptatum distinctio natus. Voluptate cumque, voluptatum corrupti officia assumenda quos eligendi
      reprehenderit nam laboriosam.</p>
    <p>Parrafo 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium cum nihil aut eligendi ullam
      nobis, voluptatum distinctio natus. Voluptate cumque, voluptatum corrupti officia assumenda quos eligendi
      reprehenderit nam laboriosam.</p>
  </div>

  <p>Float right</p>
  <div class="float-div">
    <p class="float-right">Parrafo 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium cum nihil aut eligendi ullam
      nobis, voluptatum distinctio natus. Voluptate cumque, voluptatum corrupti officia assumenda quos eligendi
      reprehenderit nam laboriosam.</p>
    <p>Parrafo 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium cum nihil aut eligendi ullam
      nobis, voluptatum distinctio natus. Voluptate cumque, voluptatum corrupti officia assumenda quos eligendi
      reprehenderit nam laboriosam.</p>
    <p>Parrafo 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium cum nihil aut eligendi ullam
        nobis, voluptatum distinctio natus. Voluptate cumque, voluptatum corrupti officia assumenda quos eligendi
        reprehenderit nam laboriosam.</p>
  </div>

  <p>Float none, nos sirve para resetear los estilos de float</p>
  <div class="float-div">
    <p class="float-none">Parrafo 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium cum nihil aut eligendi ullam
      nobis, voluptatum distinctio natus. Voluptate cumque, voluptatum corrupti officia assumenda quos eligendi
      reprehenderit nam laboriosam.</p>
    <p>Parrafo 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique praesentium cum nihil aut eligendi ullam
      nobis, voluptatum distinctio natus. Voluptate cumque, voluptatum corrupti officia assumenda quos eligendi
      reprehenderit nam laboriosam.</p>
  </div>
</body>
</html>
```

```css
/* FLOATS */

.float-div{
  background-color: rgb(254, 192, 170);
  border: 2px solid red;
  /* Limpiar los floats, esto se pone en el div o el contenedor 
  de los elementos que flotan */
  overflow: hidden;

}

.float-left{
  float: left;
  width: 33.33%;
}

.float-right{
  float: right;
  width: 33.33%;
}

.float-none{
  float: none;
}
```

</aside>

# Lecturas en Campus

- Kata Intro a la Web - Float

# Recursos

[float - CSS | MDN](https://developer.mozilla.org/es/docs/Web/CSS/float)