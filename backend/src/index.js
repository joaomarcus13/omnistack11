const express = require('express')
const routes = require('./routes')
const app = express()
const cors = require('cors') 
/* 
metodos http 
GET: busca de informacao no backend 
POST: criar informacao no backend
PUT: alterar informacao no backend
DELETE: deletar informacao no backend
*/
/* tipos de parametro
query: parametros nomeados enviados na rota apos ? (filtros,paginacao)
route: parametros utilizados para identificar recursos
body: corpo da requisicao
*/
/*
driver: select * from users;
 query buillder: table.('users').select('*') 
 */

/* knex eh um query builder que conecta a aplicacao ao banco de dados:
npx knex init
npx knex migrate:make nome //migration que cria uma tabela
knex migrate:latest carregar tabela*/

/* 
entidades:
ong
casos(incidentes)

funcionalidades;
login/logout
cadastro
cadastro de novo caso
deletar casos
listar casos de uma ong
listar todos os casos 
entrar em contato com a ong
*/

app.use(cors())

app.use(express.json())

app.use(routes)


app.listen(3333, () => {
    console.log('backend executando porta 3333')
})




