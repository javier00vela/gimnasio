# prueba gimnasio



pasos para desplegar la aplicacion : 

1.Clonar el proyecto.
`https://github.com/javier00vela/gimnasio.git`

2.Importar el archivo .sql que se encuentra en la carpeta docs/db.sql con su cliente de base de datos MYSQL de manera local.


3.Descargar las dependencias tanto de la carpeta /server y /public con el siguiente comando:  

`npm install`

4.Ejecute el siguiente comando dentro de la carpeta /server :

`npm start`

5.Ejecute el siguiente comando dentro de la carpeta /public:

`ng serve -o`

6.Se ejecutara en el navegador la aplicación.


-----------------
NOTA: para el despliegue de pruebas unitarias con JEST , ingresar a la carpeta /server y ejecutar el siguiente comando:

`npm test`

NOTA: Ingresar a postman e importar el archivo `gimnasio.postman_collection.json` de la carpeta /docs.





