const User = require("../database/modules/user")


const validaAdm = async function (req,res,next){
     try{
     const id = req.header('Authorization');
     if(!id){

        return res.status(401).send({error: "Porfavador informe o id do usuario"})
     }
       
     const user = await User.findOne({_id: id});


    if(user.adm == true){
     
        next();
    }

      else{
       return res.status(401).send({error: "Acesso negado"})

      }
    }catch(err){

      return res.status(400).send({error: "Erro"})
    }
}

module.exports = validaAdm