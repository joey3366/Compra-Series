//Configuracion Del express

const path = require('path'); //Unir directorios
const exphbs = require('express-handlebars');
const express = require('express');

const routes = require('../routes/index');
//Funcion para configurar el motor de plantillas, rutas y todo
module.exports = app => {

    // Configuracion del puerto del servidor

    //Utilize el puerto del sistema, si no hay use el puerto 3000
    app.set('port', process.env.PORT || 3001);

    //configuracion de ubicacion de la carpeta views (vistas)
    app.set('views', path.join(__dirname, '../views'));

    //Configuracion del motor de plantillas
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        partialsDir: path.join(app.get('views'), 'partials'),
        layoutsDir: path.join(app.get('views'), 'layouts'),
        extname: '.hbs', //Nombre de la extension para handlebars
        helpers: require('./helpers')
    }));

    //Utilizar el motor de vistas
    app.set('view engine', '.hbs');
    app.use(express.urlencoded({extended: false})); // recibir datos desde un formulario html
    //app.use(express.json()); //Manejo de likes y ratificacion 

    
    // Rutas
    routes(app);

    //Archivos Estaticos
    app.use('/public', express.static(path.join(__dirname, '../public')))

    return app;
}