
const express = require('express')
const app = express()
const cors = require('cors')
const port = 3005

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(express.urlencoded());

const deviceStatus = {
  "BatmanLight": false
}

app.get('/', (request, response) => {
  response.send('Hello World!')
})

app.get('/api/devices', (request, response) => {
  response.send(deviceStatus)
})

app.post('/api/devices', (request, response) => {
  const status = request.body
  deviceStatus["BatmanLight"] = request.body["BatmanLight"]
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})