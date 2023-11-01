const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars');
const app = express()
const port = 3000

// HTTP logger
app.use(morgan('combined'))

app.get('/home', (req, res) => {
  res.send('123 ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})