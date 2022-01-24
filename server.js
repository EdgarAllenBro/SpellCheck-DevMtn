const express = require('express')
const path = require('path')
const app = express()

app.use(express.json())
app.use(express.static('client'))




const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})