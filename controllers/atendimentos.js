const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/produtos', (req, res) => res.send('voce esta na rota dos produtos '))
    app.get('/vendidos', (req, res) => res.send('esses produtos sao os mais vendidos'))
    app.get('/contato', (req, res) => res.send('ola seja bem vindo, fale conosco'))


    app.post('/atendimentos', (req, res) => {

        const atendimento = req.body
        Atendimento.adiciona(atendimento, res)
    })

    app.post('/vendidos', (req, res) => {

        const vendidos = req.body
        Vendidos.adiciona(vendidos, res)
    })

    app.post('/contato', (req, res) => {

        const contato = req.body
        Contato.adiciona(contato, res)
    })
}