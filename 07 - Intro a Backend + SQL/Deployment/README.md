# Deployment

## Objetivos

- Mostrar Heroku y dar una guía general de cómo funciona el servicio.
- Hacer el despliegue de nuestro backend a Heroku.
- Lograr que todxs lxs estudiantes hagan deploy de su aplicación backend.
- Configurar variables de entorno en Heroku para que la aplicación funcione correctamente.

## Recursos recomendados

https://devcenter.heroku.com/articles/getting-started-with-nodejs

https://en.wikipedia.org/wiki/Software_deployment

https://umbraco.com/about-us/umbraco-dictionary/deployment/

## Clase

Hacer el deployment de nuestra aplicación backend en heroku es muy sencillo. Solo necesitamos seguir la documentación oficial de heroku para apps con node.js:

https://devcenter.heroku.com/articles/getting-started-with-nodejs

Instalamos el CLI de heroku siguiendo los pasos de nuestro sistema operativo.

Una vez instalado el CLI, hacemos desde cualquier directorio en nuestra terminal:

```javascript
heroku login
```

Esto nos llevará a la página de heroku para iniciar sesión con nuestra cuenta.

Una vez iniciada la sesión, nos colocamos desde nuestra terminal en el directorio del proyecto que deseamos desplegar:

```javascript
cd mi_proyecto_node_sql
```

Una vez en la raíz del proyecto, antes de desplegar, debemos verificar rápidamente los siguientes puntos:

- Tenemos el `process.env.PORT` en nuestro `index.js` para manejar el puerto automáticamente.
- Manejamos toda la data sensible desde un archivo `.env` para asignar valores a variables de entorno.
- Tenemos un script `npm start` que ejecuta `node index.js`.

Si no cumplimos con alguno de los puntos anteriores, debemos corregir el proyecto y hacer los cambios acordes.

Ahora sí, ejecutamos `heroku create` y se nos asignará un nombre aleatorio de app en heroku, o `heroku create nombre` para ponerle el nombre que deseemos:

```javascript
heroku create mi-app-chida 
```

Hacemos push del código base de nuestro repositorio al remoto de heroku:

```javascript
git push heroku main
```

Si todo sale correctamente, deberíamos ver al menos una instancia corriendo al ejecutar el siguiente comando:

```javascript
heroku ps:scale web=1
```

Finalmente, podemos ejecutar

```javascript
heroku open
```

Para ver en el navegador nuestra instancia corriendo.