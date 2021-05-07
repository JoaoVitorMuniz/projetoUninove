const mongoose = require('../index');

const userSchema = mongoose.Schema({

    nome: {
        type: String,
        require: true
    },
    email: {
        type:String,
        require: true,
    },
    senha:{
        type:String,
        require: true,
        select: false,
    },
    adm: {
        type: Boolean,
        default: false,
    }
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel





