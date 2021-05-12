const mongoose = require('mongoose');
const uri = "mongodb+srv://root:admin@cluster0.6zp02.mongodb.net/ferrari?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}).then(()=>{console.log("Connectado ao banco de dados")}).catch(err=>{console.log(err)})

module.exports = mongoose