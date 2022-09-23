# CSS- Box model y Floats

Utilizando box-model y floats, crea la siguiente estructura.

![ejercicio-2-css.png](../images/ejercicio-2-css.png)

## Solución

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>
      Box model y floats
    </title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="chico azul"></div>
    <div class="grande azul"></div>
    <div class="container">
      <div class="mediano azul margin-derecho"></div>
      <div class="mediano azul"></div>
    </div>
    <div class="grande azul"></div>
    <div class="container">
      <div class="mediano azul margin-derecho margin-abajo"></div>
      <div class="mediano azul margin-abajo"></div>
    </div>
  </body>
</html>
```

```css
*{
    box-sizing: border-box;
}

body{
    padding: 10px 20px;
    background-color: rgb(187, 187, 187);
}

.azul{
    background-color: rgb(168, 227, 250);
}

.chico{
    width: 100%;
    height: 200px;
    margin: 20px 0;
}

.mediano{
    width: 49%;
    height: 300px;
    float: left;

}

.grande{
    width: 100%;
    height: 300px;
    margin: 20px 0;
}

.margin-derecho{
    margin-right: 2%;
}

.margin-abajo{
    margin-bottom: 10px;
}

/* 
La forma más sencilla de “limpiar” los floats es que el div contenedor de los elementos que flotan tenga overflow:hidden;
Sin embargo, un overflow:hidden; puede dar problemas si luego queremos posicionar elementos fuera del contenedor con position:absolute. Si este fuera el caso, lo mejor es añadir la clase “clearfix” al elemento contenedor, y pegar la siguiente CSS en la hoja de estilos:
.clearfix:before,
.clearfix:after {
     content: " ";
     display: table;
     clear: both;
}
Este método utiliza un par de técnicas CSS avanzadas para limpiar los floats sin necesidad de overflow:hidden; .
*/

.container{
 overflow: hidden;
}
```