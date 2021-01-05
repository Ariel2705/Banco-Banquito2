var mysql = require('mysql');

var conexion= mysql.createConnection({
    host : 'localhost',
    database : 'bancobanquito',
    user : 'root',
    password : '',
});

conexion.connect(function(err) {
    if (err) {
        console.error('Error de conexion: '+ err);
        return;
    }
});

module.exports = conexion;