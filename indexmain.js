const express = require('express')
const path = require('path');
const app = express()
const port = 3001

// middleware

app.use('/image', express.static(path.join(__dirname, 'image')));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/register.html')
  })

  app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html')
  })

  app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })

  app.get('/profile', (req, res) => {
    res.sendFile(__dirname + '/profile.html')
  })

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'image', 'index.html'));
  });

  app.listen(port,()=>{
    console.log(`Running on Server ${port}`)
  })