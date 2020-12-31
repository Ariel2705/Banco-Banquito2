const express = require('express');
const morgan = require('morgan');
const path = require('path');

const {mongoose} = require('./database/mongo')

const app = express();

// Configuracion del puerto
app.set('port', process.env.PORT || 3000);

// Middleware
app.use(morgan('dev'));
app.use(express.json());

app.use('/api/transfer', require('./routes/transfer.routes'));
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'), () => {
    console.log("Iniciando...");
});