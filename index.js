const express = require('express');
require('./database/index')
const app = express();
const PORT = process.env.PORT || 4000;


const authController = require('./controllers/auth');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/',authController);

app.listen(PORT,()=>{
    console.log('Servidor Funcionando')
});