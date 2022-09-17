const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! It is our first project!\n Batischev\nGopani\nGasparyan\nVorobiov\nRukavicin\n')
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
