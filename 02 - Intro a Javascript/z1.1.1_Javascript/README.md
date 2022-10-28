# JavaScript

# ¿Qué es un lenguaje de programación ?

Es una herramienta que nos permitirá darle instrucciones a un ordenador a través de código, el cual esta es estructurado para que los programadores puedan escribirlos siguiendo una lógica.

# ¿Qué es JavaScript?

Es un lenguaje de programación interpretado, orientado a objetos, imperativo, case sensitive.

### Lenguaje interpretado

Un **lenguaje compilado** es aquel donde nosotros escribimos un código y antes de poder ejecutarse ese programa, debe pasar antes por un programa que se llama compilador, que traduce todo ese código a un lenguaje que después otro programa interpreta para convertirlo en un lenguaje binario.

Un **lenguaje interpretado**, ya que todo el código que escribimos no tiene que pasar por un compilador, si no que va directamente a ejecutarse en el navegador que tiene una herramienta que se llama interprete, esta herramienta traduce todo el código en tiempo real, por lo tanto no necesita compilarse todo junto y ejecutarse; si no que va orden por orden se va ejecutando algoritmicamente.

[Lenguajes compilados o lenguajes interpretados ¿Cuál es la diferencia?](https://www.youtube.com/watch?v=ojqusTBq4A0)

### Orientado a objetos

Un lenguaje orientado a objetos significa que es un lenguaje en donde su estructura abarca todas las características que tiene la programación orientada a objetos, abarca todos los conceptos y posibilidades que tiene un lenguaje de programación que es orientada a objetos, es decir clases, herencia, polimorfismo, etc.

### Imperativo

Todas las instrucciones van de línea a línea, es decir se va ejecutando paso por paso.

### Case sensitive (upper and lower case)

Es sensible a minúsculas y mayúsculas

### Basado en prototipos, instancias y classless

Generalmente cuando creamos un objetos, lo creamos a través de instanciar clases, como es un lenguaje basado en prototipos, los objetos que creamos va a a estar basados en otros objetos que fueron previamente construidos por el equipo de desarrollo de JavaScript.

### Tipado débil

Significa que el valor de las variables puede ir cambiando a lo largo del tiempo

### Lenguaje dinámico

La variable no se ajusta al dato, el dato se ajusta a la variable, es decir no debemos de especificar qué tipo de dato tendrá una variable.

# Para que se usa JavaScript

- Lo usamos para dinamismo de los sitios web del lado del cliente.
- Tecnología Backend Servidor en NodeJS
- Tecnologías Frontend como Angular, React, o VueJS

Otros usos no tan comunes

- Inteligencia artificial
- Placas electrónicas (Jhonny Five)
- Aplicaciones móviles
- Aplicaciones de escritorio

# Formas de enlazar JavaScript

### Forma 1 - En linea

```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<h1 onclick= "alert('hola')">Saludar</h1>
	<button onclick="var nombre = 'DEV.F'; console.log(nombre);">Hacer click</button>
	<!-- OJO con las comillas -->
</body>
</html>
```

### Forma 2 - Poniéndolo en una etiqueta

```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<h1>Saludar</h1>
	<script type="text/javascript">
		alert('hola')
	</script>
	<!-- OJO al final del HTML -->
</body>
</html>
```

### Forma 3 -  Como contenido en la etiqueta `<script>`

```html
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<h1>Saludar</h1>
	<script src="./main.js"></script>
</body>
</html>
```

# Lecturas en campus

- Kata JavaScript - JavaScript

# Presentaciones

[5.1.1 Intro a JavaScript](https://docs.google.com/presentation/d/1DtXiGrYJ-L7lPGOi-4UpkI95BxQc8MgxkizLG3GuW-c/edit#slide=id.p)

# Recursos

[JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript)