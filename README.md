# Api Weather
API REST de clima que se sirve de la api de OpenWeather.

## Version de Node JS utilizada
- Node.js v.14.19.2

## Instrucciones para iniciar
- Instalar dependencias necesarias ***npm install***
- Crear un archivo ***.env***, usar el archivo ***.env.sample*** ubicado en la raíz del proyecto.
- Ejecutar aplicación en entorno de desarrollo local ***npm run local:dev***.

## Instrucciones para correr pruebas automatizadas
- Para correr solo pruebas de user ***npm run test-user***
- Para correr solo pruebas de login ***npm run test-login***
- Para correr solo pruebas de coin ***npm run test-coin***
- Para correr todas las pruebas de test ***npm run test***

## API

#### Rutas
| Método http | Ruta | Descripción | Params |
| --- | --- | --- | --- |
`GET` | `/v1/location` | Devueve datos de la ubicación cliente 
`GET` | `/v1/current/:city?` | Devuelve el dato del clima actual del cliente o de la ciudad que se pase por parametro
`GET` | `/v1/forecast/:city?` | Devuelve el dato del clima del día y de los 5 días siguientes de la localidad del cliente o de la ciudad que se le pase.
#### Códigos de estado
- **200:** Recurso obtenido correctamente
- **400:** Error del cliente
- **403:** Acción prohibida
- **404:** Recurso no encontrado, no existe dicho recurso
- **409:** Error de validacion de tipo
- **500:** Error de parte del servidor

### Pruebas automatizadas

Las pruebas automatizadas se realizaron con ***Tap***.