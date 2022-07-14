const fs = require('fs')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    let x = fs.readFileSync('hello.html');
    res.end(x.toString());
})

app.get('/muneeb', (req, res) => {
    res.end('<h1>I am Muneeb Khan!</h1> <p>I am Software Engineer.</p>')
})

app.get('/about-us', (req, res) => {
    res.end('<h1>About us</h1> <p>I am Software Engineer with many years of experience. I am learing Mern Stack.</p>')
})

app.get('/contact-us', (req, res) => {
    res.end('<h1>Contact us:</h1> <p>000-3054312</p>')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})