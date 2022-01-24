const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('client'))


const savedList = []
app.post('/api/savedspells',(req,res)=>{
savedList.push(req.body.Name)
console.log(savedList)
})

app.get('/api/savedspells',(req,res)=>{
  console.log(req)
  res.status(200).send(savedList)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})