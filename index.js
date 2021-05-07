const express = require('express');
require('./database/index')
const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');
app.use(cors());


const authController = require('./controllers/auth');
const postController =  require('./controllers/posts');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/',authController);
app.use('/',postController);

app.listen(PORT,()=>{
    console.log('Servidor Funcionando')
});