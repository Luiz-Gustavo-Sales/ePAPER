const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

//Iniciando App
const app = express();

app.use(express.json())
app.use(cors())

//Iniciando DB
mongoose.connect(
    'mongodb+srv://tindev:flamengo15@cluster0-xsmns.mongodb.net/DBTinDev?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'))

//Porta utilizada;
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});
