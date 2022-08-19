# Git

## Sistema de control de versiones

Un Sistema de control de versiones distribuido (DVCS) o Sistema de control de versiones (VCS) es un software que nos sirve para gestionar y rastrear todos los cambios que se realizan a un archivo, conjunto de archivos o un proyecto a lo largo del tiempo.

Tener un sistema de control de versiones nos ayuda a recuperar una version especifica de los archivos en cualquier momento posterior.  Al tener el historial de estos cambios, nos permite tener diferentes versiones de cada archivo, permitiéndonos recuperar una version antigua en caso de que se rompa algún código.

![git1.png](./images/git1.png)

## Ejemplo para explicar el uso de un sistema de control de versiones

Muchas veces cuando estamos trabajando en un proyecto, durante el proceso suelen haber cambios que se deben hacer y vamos guardando el proyecto con diferentes nombres.


~~~
🗂️ 
patitosProyecto.js
patitosProyecto_cambio_lunes23Abril.js
patitosProyecto_final_jueves26Abril.js
patitosProyecto_final_final_viernes27Abril.js
~~~


Este sistema no es conveniente, pues podríamos terminar con muchos archivos con diferentes nombres, llegando a confundirnos de saber cuál es el archivo correcto.

## Beneficios de utilizar un sistema de control de versiones

- Organización
- Permite hacer aportaciones o modificaciones al proyecto con confianza de no  perder los avances.
- El proyecto esta respaldado y documentado.

# ¿Que es GIT?

GIT es un sistema de control de versiones distribuido; es decir, nosotros tenemos un repositorio el cual va a generar copias a cada individuo que extraiga el repositorio.

![git2.png](./images/git2.png)

## Datos relevantes sobre el uso de GIT

![git3.png](./images/git3.png)

![git4.png](./images/git4.png)

# Comandos básicos de GIT

```jsx
$ git clone [URL]
```

Comando para descargar el código fuente desde un repositorio remoto

```jsx
$ git branch [nombre-de-la-rama]
```

Comando para crear una rama nueva

```jsx
$ git branch --list
```

Comando para visualizar las ramas

```jsx
$ git branch -d [nombre-de-la-rama]
```

Comando para borrar una rama

```jsx
$ git checkout [nombre-de-la-rama]
```

Comando para cambiar de rama

```jsx
$ git checkout -b [nombre-de-la-rama]
```

Comando para crear y cambiarte de rama al mismo tiempo

```jsx
$ git status
```

Comando para obtener la información de la rama actual

```jsx
$ git add .
```

Comando para incluir todos los cambios de los archivos al siguiente commit

```jsx
$ git add [archivo]
```

Comando para incluir un solo archivo al siguiente commit 

```jsx
$ git commit -m "mensaje"
```

Comando para guardar todos los cambios hechos, junto con una pequeña descripción

```jsx
$ git push [nombre-remoto] [nombre-de-rama]
```

Comando para enviar los cambios al repositorio remoto.

```jsx
$ git pull
```

Comando para recibir actualizaciones del repositorio remoto

# Instalación de GIT en IOS

- Ir al sitio oficial de [GIT](https://git-scm.com/) y le daremos click al botón de descargar para Mac

[Git](https://git-scm.com/)

![git5.png](./images/git5.png)

- Veras una serie de instrucciones para instalar GIT, te recomendamos instalarlo por medio de Homebrew

![git6.png](./images/git6.png)

- Dirígete a la pagina de [Homebrew](https://brew.sh/) y copia lo que se encuentra en el recuadro negro y pégalo en tu terminal

[Homebrew](https://brew.sh/)

![git7.png](./images/git7.png)

- Después de instalar Homebrew, en tu terminal copia y pega el siguiente comando.

![git8.png](./images/git8.png)

- Para verificar la instalación de git, copia y pega el siguiente comando en tu terminal

```jsx
$ git --version
```

# Lecturas en Campus

- Kata Intro a la Web - Herramientas de desarrollo web
- Kata JavaScript - Git

# Recursos

[Herramientas para equipos - Infografía del estado del ecosistema del desarrollador en 2020](https://www.jetbrains.com/es-es/lp/devecosystem-2021/team-tools/#Team_Tools_which-version-control-systems-do-you-regularly-use-if-any)

[10 Comandos de Git Que Todo Desarrollador Debería Saber](https://www.freecodecamp.org/espanol/news/10-comandos-de-git-que-todo-desarrollador-deberia-saber/)

[](https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf)