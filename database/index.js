const mongoose = require('mongoose');
const uri = "mongodb+srv://root:admin@cluster0.6zp02.mongodb.net/ferrari?retryWrites=true&w=majority";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

module.exports = mongoose