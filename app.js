const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')
app.use(express.static(__dirname + '/public'))
//parciales de hbs
hbs.registerPartials(__dirname + '/views/partials')
//hbs engine para vistas
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'franco'
  })
})
app.get('/about', (req, res) => {
  res.render('about')
})
/* app.get('/', (req, res) => {
  let salida = {
    nombre: 'franco',
    edad: 24,
    url: req.url
  }
  res.send(salida)
}) */
const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`escuchando en el puerto ${port}`)
})
