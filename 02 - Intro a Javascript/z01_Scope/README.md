# Scope

### Variables Globales

Podemos acceder a ellas desde cualquier parte del código

### Variables Locales

Variables creadas dentro de una función, solo pueden ser accedidas desde su función o una función anidada.

### Paso 1

```jsx
var variableGlobal = "Esta es una variable global"

var miFuncion = function(){
	alert(variableGlobal)
	variableGlobal = "Esta es la variable Global dentro de una funcion, modificada"
	alert(variableGlobal)
}

miFuncion();
```

```jsx
var variableGlobal = "Esta es una variable global"

var miFuncion = function(){
	variableGlobal = "Esta es la variable Global dentro de una funcion, modificada"
	alert(variableGlobal)
}

miFuncion();
alert(variableGlobal)
```

### Paso 2

```jsx
var variableGlobal = "Esta es una variable global"

var miFuncion = function(){
	var variableLocal = "Esta es una variable local"
	alert(variableLocal) // "Esta es una variable local"
}

alert(variableLocal) // Variable undefined
miFuncion();
```

### Paso 3 - Con función anidada

```
var variableGlobal = "Esta es una variable global"

var miFuncion = function(){
	var variableLocal = "Esta es una variable local"

	var funcionLocal = function(){
        var variableLocal = "Esta es una variable local, dentro de funcionLocal"
        alert(variableLocal) // "Esta es una variable local, dentro de funcionLocal"
	}
    funcionLocal()
	alert(variableLocal) // "Esta es una variable local"
}

miFuncion();
```

### Paso 4 - Eliminando el var

```jsx
var variableGlobal = "Esta es una variable global"

var miFuncion = function(){
	var variableLocal = "Esta es una variable local"

	var funcionLocal = function(){
        variableLocal = "Esta es una variable local, dentro de funcionLocal"
        alert(variableLocal) // "Esta es una variable local, dentro de funcionLocal"
	}
    funcionLocal()
	alert(variableLocal) // "Esta es una variable local, dentro de funcionLocal"
}

miFuncion();
```

### Paso 5 - Eliminando variableLocal

```jsx
var variableGlobal = "Esta es una variable global"

var miFuncion = function(){
	var variableLocal = "Esta es una variable local"

	var funcionLocal = function(){
        alert(variableLocal) // "Esta es una variable local"
	}
    funcionLocal()
	alert(variableLocal) // "Esta es una variable local""
}

miFuncion();
```

# Lecturas en campus

- Kata JavaScript - Scope

# Presentaciones

[](https://docs.google.com/presentation/d/1EGRKLQAWRkUAQM_cDDRenun18oBOEqXurdRZ-1ndmyE/edit#slide=id.p)