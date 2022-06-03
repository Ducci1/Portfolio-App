const express = require('express');
const bcrypt = require('bcrypt');
const path = require('path');
const bodyParser = require('body-parser');
const User = require('./config')
const cors = require('cors')
const app = express()

app.use('/' , express.static(path.join(__dirname,'Portfolio-app')))
app.use(bodyParser.urlencoded({extended: false}))

app.get('/' , (req , res)=>{
    res.sendFile(path.join(__dirname , 'Portfolio-App','index.html'))
})

app.post('/' , async (req , res)=>{
    const data = req.body
    console.log(data)
    await User.add(data)

})
const PORT = '3000'
app.listen(PORT , ()=>{
    console.log('Response sent successfully')
})
