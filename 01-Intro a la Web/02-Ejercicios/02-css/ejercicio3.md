# CSS - Flexbox & Grid

Recrea la siguiente imagen utilizando Flexbox y al finalizar recréala utilizando Grid

![ejercicio-3-css.png](../images/ejercicio-3-css.png)

## Solución

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Reto Bandera de Noruega</title>
  </head>
  <body>
    <h2>Flexbox</h2>
    <div class="flex azul ">
      <div class="blanco pr pb mb mr">
        <div class="rojo pequeño"></div>
      </div>
      <div class="blanco pl pb mb">
        <div class="rojo grande"></div>
      </div>
    </div>
    <div class="flex azul">
      <div class="blanco pt pr mr">
        <div class="rojo pequeño"></div>
      </div>
      <div class="blanco pt pl">
        <div class="rojo grande"></div>
      </div>
    </div>

    <h2>Grid</h2>
    <div class="azul grid">
      <div class="cuadro1 blanco">
        <div class="rojo pequeño "></div>
      </div>
      <div class="rectangulo1 blanco">
        <div class="rojo grande alineado-derecha-superior"></div>
      </div>
      <div class="cuadro2 blanco">
        <div class="rojo pequeño alineado-izquierda-inferior"></div>
      </div>
      <div class="rectangulo2 blanco">
        <div class="rojo grande alineado-derecha-inferior"></div>
      </div>
    </div>

  </body>
</html>
```

```css
.flex{
  width: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}

.azul {
    background-color: #002868;
}

.rojo {
    background-color: #EF2B2D;
}

.blanco {
    background-color: #ffffff;

}

.pr {
    padding-right: 2vw;
}

.pb {
    padding-bottom: 2vw;
}

.pl {
    padding-left: 2vw;
}

.pt {
    padding-top: 2vw;
}

.mr {
    margin-right: 4.01vw;
}

.mb {
    margin-bottom: 4.01vw;
}

.pequeño {
    width: 15.89vw;
    height: 15.89vw;
}

.grande {
    width: 31.78vw;
    height: 15.89vw;
}

.grid{
  width: 55.67vw;
  height: 39.87vw;
  display:grid;
  grid-template-columns: 17.89vw  33.78vw;
  grid-template-rows: 17.89vw  17.89vw;
  column-gap: 2vw;
  row-gap: 2vw;
  justify-content: space-between;
  align-content: space-between;
  grid-template-areas:
  "cuadro1 rectangulo1"
  "cuadro2 rectangulo2";
}

.cuadro1{
  grid-area: cuadro1;
}
.rectangulo1{
  grid-area: rectangulo1;
}

.cuadro2{
  grid-area: cuadro2;
}
.rectangulo2{
  grid-area: rectangulo2;
}

.alineado-derecha-superior{
 margin-left: auto;
}

.alineado-izquierda-inferior{
margin-top: 2vw;
}

.alineado-derecha-inferior{
  margin-left: auto;
  margin-top: 2vw;
}
```