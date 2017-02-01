//set up server and listen on port
//    src/server.js
const express = require('express')

const app = express()

app.use(function(req, res, next) {
  res.end('Documentation http://express.js.com/')
})

app.listen(8080, () => {
  console.log('Looksie here, I work!')
})
