const express = require('express')
const Cadastro = require ('./Service/app')


const app = express()
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())
app.listen(3000)
Cadastro.router(app)
console.log("Servidor Conectado")

