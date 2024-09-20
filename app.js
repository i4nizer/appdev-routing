const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./routes/router.js')



app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use('/', routes)



app.listen(3000, _ => {
    console.log('Server running on port http://localhost:3000')
})