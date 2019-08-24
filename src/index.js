// Archivo para llamar la logica del servidor desde routes y server e inicializarla (tener un poco de orden)
const express = require('express');

const config = require('./server/config');

const app = config(express());

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
})