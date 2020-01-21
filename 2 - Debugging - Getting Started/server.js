const express = require('express')

const app = express();

app.get('/', (req, res) => {
  var debug = 10
  res.send('Testando debug')
})

app.listen(80, () => {
  console.log('Server started!')
})