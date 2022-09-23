# HTML Semántico

HTML Semántico es el uso de las etiquetas HTML para reforzar el significado de la información.

Para que los motores de búsqueda sean capaces de calcular el significado de pedazos de texto que encuentran en los documentos HTML, la estructura semántica que existe en HTML necesita ser inteligente y uniformemente aplicada para resaltar el significado del texto publicado.

![ejercicio-2-html.png](../images/ejercicio-2-html.webp)

## Ejercicio

En este ejercicio, vamos a trabajar con la sintaxis de HTML semántico.

Para eso, te compartiremos un archivo HTML, en el cual deberás de cambiar todas las etiquetas que consideres necesarias por etiquetas semánticas.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML Semántico</title>
</head>

<body>

  <div>
    <div>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Información</a></li>
        <li><a href="#">Galeria</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </div>
  </div>

  <div>
    <div>
      <h1>¿Qué es el HTML semántico y por qué es importante?</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo fugiat a neque, magni excepturi,
        doloremque sequi sed quam consectetur ipsa perspiciatis delectus tempora nihil porro aut saepe. Alias, illo.</p>

      <div>
        <h2>Cómo funciona el HTML semántico</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo fugiat a neque, magni excepturi,
          doloremque sequi sed quam consectetur ipsa perspiciatis delectus tempora nihil porro aut saepe. Alias, illo.
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo fugiat a neque, magni excepturi,
          doloremque sequi sed quam consectetur ipsa perspiciatis delectus tempora nihil porro aut saepe. Alias, illo.
        </p>

      </div>
      <div>
        <h2>Ejemplos de HTML con etiquetas semánticas</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo fugiat a neque, magni excepturi,
          doloremque sequi sed quam consectetur ipsa perspiciatis delectus tempora nihil porro aut saepe. Alias, illo.
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo fugiat a neque, magni excepturi,
          doloremque sequi sed quam consectetur ipsa perspiciatis delectus tempora nihil porro aut saepe. Alias, illo.
        </p>

      </div>

      <div>
        <h2>Ejemplos de HTML sin etiquetas semánticas</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo fugiat a neque, magni excepturi,
          doloremque sequi sed quam consectetur ipsa perspiciatis delectus tempora nihil porro aut saepe. Alias, illo.
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo fugiat a neque, magni excepturi,
          doloremque sequi sed quam consectetur ipsa perspiciatis delectus tempora nihil porro aut saepe. Alias, illo.
        </p>

      </div>

      <div>
        <h2>Algunas etiquetas de HTML5 semántico</h2>
        <ul>
          <li>nav</li>
          <li>main</li>
          <li>section</li>
          <li>article</li>
          <li>footer</li>
        </ul>

      </div>
    </div>

  </div>

  <footer>
    <p>DEVF</p>
    <p>Contacta a: <a href="mailto:academy@devf.com">
        academy@devf.com</a>.</p>
  </footer>

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
  <title>HTML Semántico</title>
</head>

<body>

  <header>
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Información</a></li>
        <li><a href="#">Galeria</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section>
      <h1>¿Qué es el HTML semántico y por qué es importante?</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo fugiat a neque, magni excepturi,
        doloremque sequi sed quam consectetur ipsa perspiciatis delectus tempora nihil porro aut saepe. Alias, illo.</p>

      <article>
        <h2>Cómo funciona el HTML semántico</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo fugiat a neque, magni excepturi,
          doloremque sequi sed quam consectetur ipsa perspiciatis delectus tempora nihil porro aut saepe. Alias, illo.
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo fugiat a neque, magni excepturi,
          doloremque sequi sed quam consectetur ipsa perspiciatis delectus tempora nihil porro aut saepe. Alias, illo.
        </p>

      </article>
      <article>
        <h2>Ejemplos de HTML con etiquetas semánticas</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo fugiat a neque, magni excepturi,
          doloremque sequi sed quam consectetur ipsa perspiciatis delectus tempora nihil porro aut saepe. Alias, illo.
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo fugiat a neque, magni excepturi,
          doloremque sequi sed quam consectetur ipsa perspiciatis delectus tempora nihil porro aut saepe. Alias, illo.
        </p>

      </article>

      <article>
        <h2>Ejemplos de HTML sin etiquetas semánticas</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo fugiat a neque, magni excepturi,
          doloremque sequi sed quam consectetur ipsa perspiciatis delectus tempora nihil porro aut saepe. Alias, illo.
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus quo fugiat a neque, magni excepturi,
          doloremque sequi sed quam consectetur ipsa perspiciatis delectus tempora nihil porro aut saepe. Alias, illo.
        </p>
      </article>

      <article>
        <h2>Algunas etiquetas de HTML5 semántico</h2>
        <ul>
          <li>nav</li>
          <li>main</li>
          <li>section</li>
          <li>article</li>
          <li>footer</li>
        </ul>
      </article>
    </section>
  </main>

  <footer>
    <p>DEVF</p>
    <p>Contacta a: <a href="mailto:academy@devf.com">
        academy@devf.com</a>.</p>
  </footer>

</body>
</html>
```