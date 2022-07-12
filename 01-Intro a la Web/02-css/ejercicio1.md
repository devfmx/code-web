# CSS- Estilos Básicos

## Ejercicio

Deberás de recrear la siguiente imagen con las especificaciones siguientes:

![ejercicio-1-css.png](../images/ejercicio-1-css.png)

### Especificaciones

General:

- El color del texto es #a2d2ff.
- El color de fondo es #333533.
- El tipo de letra es: Georgia, 'Times New Roman', Times, serif.
- El tamaño del texto: 16px.

Imagen

- Ancho de 400px.
- Esquinas redondeadas 8px.

Encabezado nivel 1

- El color del texto es: #8338ec.
- El tipo de letra es: Verdana, Geneva, Tahoma, sans-serif.
- El tamaño del texto: 32px.
- El texto deberá de estar centrado.
- El texto deberá estar en mayúsculas.

Encabezado de nivel 2

- El color del texto es: #f15bb5.
- El tipo de letra es: 'Courier New', Courier, monospace.
- El tamaño del texto: 24px.

Campos de datos de la pelicula

- El color de los campos son: #060.
- Deberá de estar en negritas

Links

- El texto “Iron Man” y “Capitán América” deberán de llevarnos a otra página.
- El tamaño del texto: 22px.
- Texto subrayado.

El texto “Hulk” y “Thor”

- El color del texto es blanco: #FFF.
- El color de fondo del texto es negro: #000.
- Texto en cursiva.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML & CSS</title>
</head>

<body>
  <h1>Avengers: Endgame</h1>

  <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/174C605829DEB3C79C2F6993EFA97B2ECBF21D6A152E6BB0CA00DDA987E94BAC/scale?width=1200&aspectRatio=1.78&format=jpeg" alt="Avengers: Endgame Poster">

  <h2>Datos generales</h2>

  <ul>
    <li>Título: Avengers: Endgame</li>
    <li>Dirección: Anthony y Joe Russo</li>
    <li>Producción Kevin Feige</li>
    <li>Guion: Christopher Markus, Stephen McFeely</li>
    <li>Año: 2019</li>
  </ul>

  <h2>Reseña</h2>

  <p>Después de los devastadores eventos ocurridos en Vengadores: Infinity War, el universo está en ruinas debido a las
    acciones de Thanos, el Titán Loco. Tras la derrota, las cosas no pintan bien para los Vengadores. Mientras Iron Man
    (Robert Downey Jr.) vaga en soledad junto a Nebula (Karen Gillan) en una nave lejos de la Tierra, el grupo
    encabezado por Capitán América (Chris Evans), Viuda Negra (Scarlett Johansson), Hulk (Mark Ruffalo) y Thor (Chris
    Hemsworth) deberá tratar de revertir los efectos de la catástrofe provocada por Thanos. Los Vengadores deberán
    reunirse una vez más para deshacer sus acciones y restaurar el orden en el universo de una vez por todas. Esta vez,
    contarán también con aliados como Ojo de Halcón (Jeremy Renner) y Capitana Marvel (Brie Larson), además de Ant-Man
    (Paul Rudd), que presumiblemente podría haber estado atrapado en el Reino Cuántico. Juntos, se prepararán para la
    batalla final, sin importar cuáles sean las consecuencias.</p>

  <h2>Reparto</h2>

  <ul>
    <li>Robert Downey Jr. como Tony Stark / Iron Man</li>
    <li>Chris Evans como Steve Rogers / Capitán América</li>
    <li>Chris Hemsworth como Thor</li>
    <li>Mark Ruffalo como Bruce Banner / Profesor Hulk</li>
    <li>Paul Rudd como Scott Lang / Ant-Man</li>
    <li>Jeremy Renner como Clint Barton / Hawkeye / Ronin</li>
  </ul>

</body>

</html>
```

## Solución

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="styles.css">
  <title>HTML & CSS</title>
</head>

<body>
  <h1>Avengers: Endgame</h1>

  <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/174C605829DEB3C79C2F6993EFA97B2ECBF21D6A152E6BB0CA00DDA987E94BAC/scale?width=1200&aspectRatio=1.78&format=jpeg" alt="Avengers: Endgame Poster">

  <h2>Datos generales</h2>

  <ul>
    <li> <span>Título:</span> Avengers: Endgame</li>
    <li> <span>Dirección:</span> Anthony y Joe Russo</li>
    <li> <span>Producción;</span> Kevin Feige</li>
    <li> <span>Guion:</span> Christopher Markus, Stephen McFeely</li>
    <li> <span>Año:</span> 2019</li>
  </ul>

  <h2>Reseña</h2>

  <p>Después de los devastadores eventos ocurridos en Vengadores: Infinity War, el universo está en ruinas debido a las
    acciones de Thanos, el Titán Loco. Tras la derrota, las cosas no pintan bien para los Vengadores. Mientras <a href="https://en.wikipedia.org/wiki/Iron_Man" target="_blank" rel="noopener noreferrer">Iron Man</a>
    (Robert Downey Jr.) vaga en soledad junto a Nebula (Karen Gillan) en una nave lejos de la Tierra, el grupo
    encabezado por Capitán América (Chris Evans), Viuda Negra (Scarlett Johansson), <span class="especial">Hulk</span> (Mark Ruffalo) y <span class="especial">Thor</span> (Chris
    Hemsworth) deberá tratar de revertir los efectos de la catástrofe provocada por Thanos. Los Vengadores deberán
    reunirse una vez más para deshacer sus acciones y restaurar el orden en el universo de una vez por todas. Esta vez,
    contarán también con aliados como Ojo de Halcón (Jeremy Renner) y Capitana Marvel (Brie Larson), además de Ant-Man
    (Paul Rudd), que presumiblemente podría haber estado atrapado en el Reino Cuántico. Juntos, se prepararán para la
    batalla final, sin importar cuáles sean las consecuencias.</p>

  <h2>Reparto</h2>

  <ul>
    <li>Robert Downey Jr. como Tony Stark / <a href="https://en.wikipedia.org/wiki/Iron_Man" target="_blank" rel="noopener noreferrer"> Iron Man </a></li>
    <li>Chris Evans como Steve Rogers / <a href="https://es.wikipedia.org/wiki/Capit%C3%A1n_Am%C3%A9rica" target="_blank" rel="noopener noreferrer"> Capitán América </a></li>
    <li>Chris Hemsworth como <span class="especial">Thor</span></li>
    <li>Mark Ruffalo como Bruce Banner / Profesor <span class="especial">Hulk</span></li>
    <li>Paul Rudd como Scott Lang / Ant-Man</li>
    <li>Jeremy Renner como Clint Barton / Hawkeye / Ronin</li>
  </ul>

</body>

</html>
```

```css
/* General:
El color del texto es #a2d2ff.
El color de fondo es #333533.
El tipo de letra es: Georgia, 'Times New Roman', Times, serif.
El tamaño del texto: 16px. */

*{
  color: #a2d2ff;
  background-color: #333533;
  font-family: Georgia, 'Times New Roman', Times, serif;
}

p, li{
  font-size: 16px;
}

/* Imagen:
Ancho de 400px.
Esquinas redondeadas 8px.
 */

img{
  width:400px;
  border-radius: 8px;
}

/* El encabezado de nivel 1:
El color del texto es: #8338ec.
El tipo de letra es: Verdana, Geneva, Tahoma, sans-serif.
El tamaño del texto: 32px.
El texto debera de estar centrado.
El texto debera estar en mayusculas.
 */

 h1{
  color: #8338ec;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
 }

 /* El encabezado de nivel 2:
El color del texto es: #f15bb5.
El tipo de letra es: 'Courier New', Courier, monospace.
El tamaño del texto: 24px.
 */

 h2{
  color: #f15bb5;
  font-family:'Courier New', Courier, monospace;
  font-size: 24px;
 }

 /* 
 Campos de datos de la pelicula
El color de los campos son: #060.
Deberá de estar en negritas
 */

 span{
  color: #fcf6bd;
  font-weight: bold;
 }

 /* 
 El texto “Hulk” y “Thor”
El color del texto es: #00f5d4.
El color de fondo del texto es: #000.
Texto en cursiva.
 */

 .especial{
  color: #00f5d4;
background-color: #000;
 }

 /* 
 Links
El texto “Iron Man” y “Capitán América” deberán de llevarnos a otra página.
El tamaño del texto: 22px.
El color del texto es: #c1121f
Texto subrayado.
 */
 a{
color: #c1121f;
font-size: 22px;
text-decoration: underline;
 }
```