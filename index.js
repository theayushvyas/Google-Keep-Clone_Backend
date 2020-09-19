const express = require('express')
const cors =  require('cors');
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/gkeep'

const app = express()
app.use(cors());

mongoose.connect(url,{useNewUrlParser:true})
const connection = mongoose.connection

connection.once('open', () =>{
	console.log('connected....!!')
}) 

app.use(express.json());


const keep = require('./Routes/KeepRoutes')
app.use('/',keep)


app.listen(5000, () =>{
	console.log('Server Started..!!')
})