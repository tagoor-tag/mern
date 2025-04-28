const express = require('express');
const port = 1515;
const route = require('./route/productsRoutes')

const app = express()

const cors = require('cors');

app.use(cors())
app.use(express.json())

app.use('/users' ,route)


app.listen(port, ()=>{
    console.log(`sever is started in ${port}`)
})