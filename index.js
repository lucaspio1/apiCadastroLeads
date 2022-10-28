const express = require('express')
const mongoose = require('mongoose')
const Cadastro = require ('./Service/app')

const port = process.env.PORT || 3000
const app = express()
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())

mongoose.connect('mongodb+srv://lucaspio:12345@cluster0.gyijsej.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{

    app.listen(port)
    console.log('Conectado ao Banco de dados')
})

.catch((err)=> console.log(err))

Cadastro.router(app)


