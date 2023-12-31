const express = require("express")
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes')

//app port init
const app = express()
require('dotenv').config()
const PORT = process.env.PORT 

//set up body parsing 
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use('/api',apiRoutes)

app.use('/',htmlRoutes)


app.listen(PORT, () => console.log(`Listening on ${PORT}`))