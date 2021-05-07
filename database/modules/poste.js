const mongoose = require('../index');
const postSchema = mongoose.Schema({

    titulo: {
        type: String,
        require: true,
    },
    imagem:{
         type: String,
         require: true,
    },
    desc:{
        type: String,
        require: true
    },

});


const postModel = mongoose.model('posts',postSchema);
module.exports = postModel;

