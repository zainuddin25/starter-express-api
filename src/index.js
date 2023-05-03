const express = require('express')
const app = express()
app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('<h1>Hallo world</h1>')
})
app.listen(process.env.CYCLIC_URL || 3000, () => {
    console.log(`Berjalan`)
})