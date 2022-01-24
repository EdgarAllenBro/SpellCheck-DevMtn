const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const {save, getsaved} = require('./controller.js')

app.use(cors())
app.use(express.json())
app.use(express.static('client'))

app.get('/api/savedspells', getsaved)

app.post('/api/savedspells', save)


const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})