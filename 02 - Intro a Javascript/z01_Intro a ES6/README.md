# Intro a ES6

## ¿Qué es EcmaScript ?

European Computer Manufactures Association, es la que se encarga de regir como debe ser interpretado y funcionar el lenguaje JavaScript.

JavaScript es interpretado y procesado por multiples plataformas, entre las que se encuentran los navegadores web, NodeJs, entre otros ambientes como el desarrollo de aplicaciones para distintos sistemas operativos que existen actualmente.

Por lo tanto los responsables de dichos navegadores y JavaScript deben encargarse de interpretar el lenguaje tal como lo fija EcmaScript

## Let, const, var

### let

variable definida en un bloque particular

### const

prevenir que una variable cambie de valor

## ECMA international → Organización de estandarización

ECMA international vendría siendo como la Real Academia Española y javascript es como el lenguaje español.

Esta organización esta compuestas por comités, los cuales definen los estándares de distintos lenguajes.

- TC52 → Dart
- TC49
    - TG2 → C#
- TC39 → ECMAScript; estándar de Javascript.
    
    [TC39 - Ecma International](https://www.ecma-international.org/technical-committees/tc39/?tab=general)
    

### ECMAScript define como debe ser Javascript

# Motores de Javascript

Un motor de Javascript (Javascript Engine) es el encargado de compilar y ejecutar código Javascript, normalmente en los navegadores.

Uno de los motores de Javascript más populares es el motor V8

- [https://v8.dev/](https://v8.dev/)

> V8 es el motor JavaScript y WebAssembly de código abierto de alto rendimiento de Google, escrito en C++. Se usa en Chrome y en Node.js, entre otros. Implementa ECMAScript y WebAssembly, y se ejecuta en Windows 7 o posterior, macOS 10.12+ y sistemas Linux que usan procesadores x64, IA-32, ARM o MIPS. V8 puede ejecutarse de forma independiente o puede integrarse en cualquier aplicación C++.
> 

### Estos motores están obligados a actualizarle cuando ECMAScript se actualice.

Estas actualizaciones siguen un principio conocido como **backwards and forwards** (*”Hacia atrás y hacia adelante”)*: significa que ningún cambio futuro invalidará un cambio pasado, esto es para Javascript.

Ahora bien, un motor de un auto no es nada si no tiene todos los componentes del auto, por ende, un Motor de Javascript necesita de un runtime para ejercer sus funciones.

Runtimes

- Google Chrome
- Firefox
- Safari
- NodeJs
- Deno

Utilizan un motor de Javascript para realizar acciones, este runtime le provee conexiones al motor de Javascript para trabajar.

# TC39

- Comité compuesto por diversas compañías
    - Google Chrome
    - Firefox
    - Opera
    - Microsoft

### Proceso de actualización

- **Stage 0 → Strawman**
    - Se envía cualquier idea para ser evaluado por todos.
- **Stage 1 → Proposal**
    - Se tiene una propuesta más formal, el autor tiene que enviar algunos demos y una descripción más completa de la solución que va a ofrecer esta característica.
- **Stage 2 → Draft**
    - Será la primera versión de lo que se encontrará en la especificación, a partir de este punto es muy probable que la nueva característica llegue al estándar.
    - Dos implementaciones experimentales.
- **Stage 3 → Candidate**
    - Solo se espera una retroalimentación de los miembros y de la comunidad para mejorar la especificación.
- **Stage 4 → Finish**
    - La propuesta esta lista para incluirla en el estándar.

A través de este proceso tenemos cada año una nueva actualización.

→ ECMA6

- Nuevas formas de declarar variables
- Template strings
- Funciones tipo flecha
- Parámetros por defecto
- Desestructuración de arreglos
- Desestructuración de objetos
- Clases y Herencias
- Nuevas formas de trabajar con objetos
- Parámetros Rest (recibir)
- Parámetros Spread (enviar)
- Promesas
- Cadenas de textos y arreglos