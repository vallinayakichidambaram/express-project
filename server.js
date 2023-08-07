const express = require ('express')

const app = express() 

const PORT = 3000


app.get('/', (req,res) => {
  res.send('Helloo Welcome!!')
})

app.get('/cats', (req,res) => {
  res.send({
    id: 101,
    name: "Valli"
  })
})

app.listen(PORT, ()=> {
    console.log(`Listening on PORT ${PORT}`)
})