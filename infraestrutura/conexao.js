const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'chica',
    password: '123456',
    database: 'agendapet'
})

module.exports = conexao