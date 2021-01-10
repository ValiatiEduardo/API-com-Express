const porta = 3003

const express = require('express')
const app = express() //instanciando o express e atribui o resultado para a variavel app
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados') //exportando o arquivo

app.use(bodyParser.urlencoded({extedend: true}))

app.get('/produtos', (req, res, next) => { //Passando uma função middel
    res.send(bancoDeDados.getProdutos()) //"send" invia uma resposta e converte para Json
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // JSON  
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // JSON  
})


app.listen(porta, () => {
    console.log(`Servidor está executando ma porta ${porta}`)
})