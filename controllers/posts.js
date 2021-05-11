const express = require('express');
const User = require('../database/modules/user');
const Post = require('../database/modules/poste');
const router = express.Router();
const validaAdm = require('../controllers/authAdmin')
router.get('/post', async (req, res) => {
    try {
        const post = await Post.find();

        res.send({
            post
        });

    } catch (erro) {

        console.log(erro);
        return res.status(500).send({
            error: "Erro no servidor"
        });
    }

});

router.post('/post', validaAdm, async (req, res) => {

    try {
        const {
            titulo,
            imagem,
            desc
        } = req.body
console.log(req.body)
        if (!titulo || !imagem || !desc) {

            return res.status(400).send({
                error: "Preencha todos os Dados"
            });
        };
        const post = await Post.create({
            titulo,
            imagem,
            desc,
        });

        res.send({
            post
        });

    } catch (erro) {

        console.log(erro);
        return res.status(500).send({
            error: "Erro no servidor"
        });
    }

});

router.get('/post/:id', async (req, res) => {

    try {

        const {
            id
        } = req.params
        const post = await Post.findById(id);
        if (!post) {

            return res.status(400).send({
                error: "Nao encontrado post"
            })
        }
        res.send({
            post
        })

    } catch (erro) {

        console.log(erro);
        return res.status(400).send({
            error: "Falha ao encontrar"
        });
    }
});



router.delete('/post/:id', validaAdm, async (req, res) => {

    try {

        const {
            id
        } = req.params
        await Post.findByIdAndRemove(id);
        res.send()

    } catch (erro) {

        console.log(erro);
        return res.status(400).send({
            error: "Falha ao Deletar"
        });
    }
});












module.exports = router