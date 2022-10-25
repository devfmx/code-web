# Carga de Datos
---

## Objetivos

- Leer archivos csv para transformar cada fila en datos que podamos manejar con javascript
- Limpiar los datos para obtener una estructura homogenea
- Insertar los datos limpiados y transformados del csv a una base de datos

## Clase

Comenzamos creando un nuevo directorio llamado `Data_Science`. Dentro agregaremos los data sets de la prueba clustera: `e.csv` y `v.csv`.

#### Inicialización de proyecto

Desde la terminal nos colocamos dentro del nuevo directorio con los datasets de la prueba klustera e inicializamos un nuevo proyecto de npm haciendo

```terminal
$ npm init
```

Para cargar los datos emplearemos una base de datos de MongoDB gratuita en la nube a través de Mongo Atlas. Por ello también instalamos mongoose

```terminal
$ npm install mongoose
```

#### Definición de un esquema de datos

Para cargar los datos en una colección en mongodb, tenemos que definir un esquema y un modelo para los datos a cargar.

Para esto creamos un nuevo archivo `ClientSession.js` para crear y exportar el modelo.

```javascript
// ClientSession.js

const mongoose = require('mongoose');
// Crear un modelo de la base de datos que haga sentido para nuestras preguntas / modelo de csv
const schema = new mongoose.Schema({
    device_mac: {
        type: String,
        required: true
    },
    branch_office: {
        type: Number,
        required: true,
    },
    month_tz: {
        type: Number,
        required: true
    },
    day_tz: {
        type: Number,
        required: true
    },
    day_of_week_tz: {
        type: String,
        required: true
    },
    hour_tz: {
        type: Number,
        required: true
    },
    conection_date: {
        type: Date
    },
    visitor: {
        type: Boolean,
        required: true
    },
    tiempodeses: {
        type: Number,
        required: true
    }
    
}, { timestamps: true });

module.exports = mongoose.model('clientSession', schema);
```

Creamos un archivo de conexión a nuestra base de datos de MongoDB.

```javascript
// database.js

const mongoose = require('mongoose');
const SesionCliente = require('./SesionCliente');

mongoose.connect('mongodb+srv://edwin:prueba123@cluster0.vp6hz.mongodb.net/dataklustera?retryWrites=true&w=majority', {useNewUrlParser: true});

module.exports = {
    SesionCliente,
};
```

Finalmente, usando el paquete [csv-parser](https://www.npmjs.com/package/csv-parser) vamos a transformar el archivo csv a un flujo de datos que podamos leer.

Partimos del ejemplo básico que aparece en la documentación de csv-parser.

```javascript
// 1.- Abrir el archivo
// 2.- Leer cada fila del archivo
// 3.- Procesar / Limpiar los datos
// 4.- Insertar en la base de datos

const csv = require('csv-parser');
const fs = require('fs');

const results = [];

fs.createReadStream('v.csv');
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  })
```

Una vez entendidos los métodos básicos para parsear el csv, comenzamos dándole forma a los datos que queremos insertar.

```javascript
// Cargar los datos con este script.
const csv = require('csv-parser');
const fs = require('fs');

const results = [];
// 1.- Abrir el archivo. *
fs.createReadStream('e.csv') // Lee un archivo y lo convierte en una linea de datos que se puede leer.
    .pipe(csv())  //  Pipe transforma datos de un stream a algo. (Ese algo yo lo puedo crear)
    // 2.- Leer cada row del archivo. 
    .on('data', (data) => { // Escuchadores de los eventos que detona el pipe y que a su vez detona csv(), data = row del csv

        const sessionObject = {
            device_mac: data.device_mac,
            branch_office: data.branch_office,
            month_tz: data.month_tz,
            day_tz: data.day_tz,
            day_of_week_tz: data.day_of_week_tz,
            hour_tz: data.hourz_tz,
            conection_date: '',
            visitor: data.visitor === 'true',
            tiempodeses: data.tiempodeses,
        };
        results.push(sessionObject);
    })
    .on('end', async () => {
        // i menor que 5 para pruebas
        for (let i = 0; i < 5; i++) { 
            console.log(results[i]);
        }
    });
```


Finalmente nuestro archivo de carga de datos a nuestra base de datos lucirá así:

```javascript
// Cargar los datos con este script.
const csv = require('csv-parser');
const fs = require('fs');
const { SesionCliente } = require('./database');

const results = [];
// 1.- Abrir el archivo. *
fs.createReadStream('e.csv') // Lee un archivo y lo convierte en una linea de datos que se puede leer.
    .pipe(csv())  //  Pipe transforma datos de un stream a algo. (Ese algo yo lo puedo crear)
    // 2.- Leer cada row del archivo. 
    .on('data', (data) => { // Escuchadores de los eventos que detona el pipe y que a su vez detona csv(), data = row del csv

        // 3.- Procesar / Limpiar los datos.
        // Crear el objeto para mongo.
        const day = parseInt(data.day_tz);
        const dayString = day > 9 ? `${day}` : `0${day}`;
        
        const hour = parseInt(data.hour_tz)
        const hourString = hour > 9 ? `${hour}` : `0${hour}`;

        const sessionClient = {
            device_mac: data.device_mac,
            branch_office: parseInt(data.branch_office),
            month_tz: parseInt(data.month_tz),
            day_tz: day,
            day_of_week_tz: data.day_of_week_tz,
            hour_tz: hour,
            conection_date: new Date(`2016-${data.month_tz}-${dayString}T${hourString}:00:00Z`),
            visitor: data.visitor === 'true',
            tiempodeses: parseInt(data.tiempodeses),
        };
        results.push(sessionClient);
    })
    .on('end', async () => {
        for (let i = 0; i < results.length; i++) { 
            // console.log(results[i]);
            // 4.- Insertarlo en la base de datos.
            // (SOLO 5 PARA PRUEBA)
            await SesionCliente.create(results[i])
        }
    });
```

*Nota: es posible que no puedas cargar todos los datos al correr el archivo, esto es porque se acaba la memoria de tu computadora o hay algún error asociado a la gran carga de datos. No hay ningún problema con esto, puedes probar solo con mil datos o seccionando todo por partes.*

Revisamos en nuestra base de datos que los datos se hayan insertado correctamente.
