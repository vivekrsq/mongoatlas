const connectMongo = require('./db')
connectMongo();


const express = require('express')
const app = express()
const port = 3001
app.use(express.json());


app.use('/api/user', require('./routes/user'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})