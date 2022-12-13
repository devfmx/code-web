# NodeJs

### **¿Qué es NodeJs?**

Node Js es un entorno de ejecución de JavaScript orientado a eventos asíncronos.

- **Entorno de ejecución** → Entorno o infraestructura en la cual se ejecuta un programa o aplicación.
    
    Anteriormente para ejecutar JS solo lo podíamos hacer mediante un navegador como Google Chrome, Internet Explorer, Firefox, o cualquier navegador; pero gracias a NodeJS podemos ejecutar código de JS en la terminal.
    
    Entonces sí queremos ejecutar un archivo de JS, todos esos componentes de software que nos van a permitir ejecutarlo conforman ese entorno de ejecución y NodeJs nos da todas esas herramientas.
    
- **Orientado a eventos asíncronos** →
    - **Evento asíncrono** → evento que se ejecuta **independientemente** del proceso principal de la aplicación.
        
        ![evento_asincrono.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/evento_asincrono.png)
        
    - **Evento síncrono** → evento que se ejecuta **como parte** del proceso principal de la aplicación.
        
        ![evento_sincrono.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/evento_sincrono.png)
        

**Características principales de NodeJs**

- **Open-sourse** (código abierto) → podemos descargarlo y usarlo en nuestros proyectos de forma gratuita y también podemos contribuir a su código.
- **Multiplataforma** → es compatible con distintos tipos de plataformas.
- **Basada en el motor V8 de Google**.
    - **Motor V8** → Motor de JavaScript desarrollado por el Chromium Project para Google Chrome. Entonces el motor V8, no dará el entorno de ejecución en el navegador, como NodeJs nos da ese entorno en la terminal.
        - **Motor de JavaScript** → Software que ejecuta código de JavaScript

### Instalación de NodeJs

**Instalación en Windows**

- Nos dirigimos a la página principal de [NodeJs](https://nodejs.org/en/)
- Seleccionamos la última versión que tenga LTS
    
    ![node_download.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/node_download.png)
    
- Nos dirigimos a nuestras descargas y le damos doble clic al instalador de NodeJs
    
    ![node_windows_1.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/node_windows_1.png)
    
- Nos aparecerá una pantalla para iniciar la instalación de NodeJs
    
    ![node_windows_2.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/node_windows_2.png)
    
    ![node_windows_3.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/node_windows_3.png)
    
    ![node_windows_4.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/node_windows_4.png)
    
    ![node_windows_5.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/node_windows_5.png)
    
    ![node_windows_6.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/node_windows_6.png)
    
    ![node_windows_7.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/node_windows_7.png)
    
    ![node_windows_8.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/node_windows_8.png)
    
    ![node_windows_9.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/node_windows_9.png)
    
- Una vez instalado NodeJs, vamos a verificar qué instalamos NodeJs. En la terminal, pegaremos lo siguiente

```jsx
$ node --version
```

**Instalación en Mac**

**Opción 1**

- Nos dirigimos a la página principal de [NodeJs](https://nodejs.org/en/)
- Seleccionamos la última versión que tenga LTS
    
    ![node_mac.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/node_mac.png)
    
- Nos dirigimos a nuestras descargas y le damos doble clic al instalador de NodeJs
- Nos aparecerá una pantalla para iniciar la instalación de NodeJs
    
    ![node_mac_1.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/node_mac_1.png)
    
    ![node_mac_2.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/node_mac_2.png)
    
    ![node_mac_3.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/node_mac_3.png)
    
    ![node_mac_4.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/node_mac_4.png)
    
    ![node_mac_5.png](NodeJs%20d1a7dff3ee6a4d7ab1543738dc0e7306/node_mac_5.png)
    

Opción 2 - Homebrew

- Si ya tienes instalado homebrew como manejador de paquetes, desde la línea de comandos ingresa.

```jsx
$ brew install node
```

- Una vez concluido el proceso de instalación, verifica que los paquetes node y npm están presentes.

```jsx
$ node -v
$ npm -v
```

### **Uso básico de la línea de comando**

**Terminal** → Una terminal o consola es un programa de interfaz de usuario de línea de comandos que se le llama simulador o emulador de terminal; generalmente es una pantalla de fondo negro con letras blancas, donde podemos escribir comandos ordenados.

**Línea de comandos** → Command Line Interface o **interfaz de línea de comandos**, es un programa que permite al usuario interactuar o comunicarse con la computadora por medio de comandos de texto.

**Comandos básicos** 

```jsx
$ ls
```

Enumera los archivos y carpetas normales en el directorio actual

```
$ pwd
```

Imprime la ruta del directorio actual para este terminal

```jsx
$ cd
```

Cambia tu directorio de trabajo actual. Cuando se usa solo, por defecto cambiará a su directorio de inicio

```jsx
$ cd [Folder]
```

Cambia su directorio de trabajo actual al [FOLDER] deseado

```jsx
$ cd ..
```

Cambia tu directorio de trabajo actual al directorio principal

```jsx
$ mkdir [FOLDER_NAME]
```

Crea una carpeta nueva 

```jsx
$ rm [FILE]
```

Borrar archivo

```jsx
$ whoami
```

Imprime el nombre del usuario actual cuando se invoca, es decir;  el nombre del usuario en sesión.

```jsx
$ rmdir [FOLDER_NAME]
```

Elimina una carpeta

### **Línea de comandos para ejecutar archivos JavaScript con NodeJs**

En la línea de comandos ejecutaremos lo siguiente:

```jsx
$ node [FILE_NAME]
```

De esta forma ejecutaremos el archivo indicado.

# Presentaciones

[11.1.1 NodeJS - G9](https://docs.google.com/presentation/d/1ZcHb9RValn1NJy719Iz8HVcJdSQs0P78jAUffW7lCbA/edit#slide=id.ge8111bdf38_0_66)

# Recursos

[Node.js](https://nodejs.org/en/)