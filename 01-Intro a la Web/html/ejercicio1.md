# HTML basics

# HTML

HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web.

Con HTML podemos crear y estructurar secciones, párrafos y enlaces mediante elementos, etiquetas y atributos.

HTML utiliza etiquetas para distinguir entre texto, imágenes y otro contenido para mostrarlo en un navegador Web.

La mayoría de los elementos HTML, cuentan con etiquetas de apertura y cierre. Una etiqueta de apertura consiste en el nombre del elemento rodeado por "<" y ">"; mientras que una etiqueta de cierre consiste en el nombre del elemento rodeado por "</" y ">".

![](https://www.ampersoundmedia.com/wp-content/uploads/2020/07/html-scaled.jpg)

## Ejercicio

En este ejercicio, vamos a trabajar con la sintaxis de HTML y los elementos básicos.

Para eso, te compartiremos un archivo HTML, en el cual deberás de corregir todos los errores que encuentres en el documento.

```html
<DOCTYPE html>
  <html>
      <head>
          </meta charset="utf-8">
          <meta name="description" content="Ejercicio HTML - Corrige los errores">
      <body>
      </head>
      <title>Corrige los errores que encuenres en el documento</title>
          
      <h1>HTML</h1>
      
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quam optio nesciunt atque iure  animi dicta velit
     
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quam optio nesciunt atque iure  animi dicta velit</p>
        
      </body>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quam optio nesciunt atque iure  animi dicta velit</p>

  <html>
```

## Solución

```html

<!DOCTYPE html> <!-- Falta el símbolo de exclamación-->
<html>
    <head>
        <meta charset="utf-8"/> <!-- La diagonal en caso de ponerse va en el cierre de la etiqueta.
															          Recordar que los metas no tienen etiqueta de cierre.-->
        <meta name="description" content="Ejercicio HTML - Corrige los errores">
        <title>Corrige los errores que encuenres en el documento</title> <!-- El title debe ir dentro de la etiqueta <head> -->
    </head> 

    <body><!-- La apertura del <body> va justo después del cierre de la etiqueta </head>-->
        
    <h1>HTML</h1>
    
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quam optio nesciunt atque iure  animi dicta velit </p>
    <!-- Cerrar siempre todas las etiquetas. En este caso la etiqueta <p>-->
   
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quam optio nesciunt atque iure  animi dicta velit</p>
      
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae quam optio nesciunt atque iure  animi dicta velit</p> 
    <!-- La etiqueta body siempre cierra el contenido web. Después no debemos añadir  ningun contenido.-->
   
    </body>
</html><!-- Falta la barra de cierre de la etiqueta-->
```