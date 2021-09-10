const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/BooksDb'
const app = express()
const port = 3000


mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open',() =>{
    console.log('Connected...')
})

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))

app.set('views','./views')
app.set('view engine','ejs')
app.use(express.json())

const bookRouter = require('./routers/books')
app.use('/books',bookRouter)


app.listen(port,()=>console.info('Listening on port '+port))