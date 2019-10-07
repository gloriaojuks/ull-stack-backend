//MONGODB PW: auZQGzSkZOzHcbP6
//MONGODB CONNECTION: mongodb+srv://gloria:<password>@cluster0-bpd6v.mongodb.net/test?retryWrites=true&w=majority

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const stuffRoutes = require('./routes/stuff')

const app = express();
mongoose.connect('mongodb+srv://gloria:auZQGzSkZOzHcbP6@cluster0-bpd6v.mongodb.net/test?retryWrites=true&w=majority')
.then(() =>{
    console.log('connected succefully to monogo atlas')
})
.catch(()=>{
    console.log('not successfully connected')
    console.error(error)
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(bodyParser.json())

  app.use('/api/stuff',stuffRoutes)



module.exports = app;