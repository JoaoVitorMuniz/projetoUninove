const express = require('express');
const User = require('../database/modules/user');
const router = express.Router();

//Esse controller serve para controlar e analisar Registro e Login do usuario

router.post('/registro', async (req, res) => {
    try {
        const {
            nome,
            email,
            senha
        } = req.body;

        const user = await User.findOne({
            email
        });

        if (user)
            return res.status(400).send({
                error: "Usuario já existe"
            });

        const userRegistro = await User.create({
            nome,
            email,
            senha
        });
        userRegistro.senha = undefined
        res.send({
            usuario: userRegistro
        })

    } catch (erro) {
        console.log(erro);
        res.status(500).send({
            error: "Error de requisiçao"
        });
    }
});

router.post('/login', async (req, res) => {
    
    try {
        const {
            email,
            senha
        } = req.body

        const user = await User.findOne({
            email
        }).select("+senha");

        if (!user)
            return res.status(404).send({
                error: "Usuario nao existe"
            });

        if (user.senha !== senha) {
            return res.status(401).send({
                error: "Senha invalida"
            });
        }

        user.senha = undefined;
        res.send({
            user
        });

    } catch (erro) {

        console.log(erro)
        res.status(500).send({
            error: "Error de requisiçao"
        })
    }

});


module.exports = router