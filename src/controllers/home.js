const control = {};

//Exportar funcion para mostrar en el servidor 
control.index = (req, res) => {
    res.render('index');
};

module.exports = control;