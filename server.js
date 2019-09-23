const express = require('express')
const app = express()
const mongoose = require('mongoose')
const interns = require('./routes/api/AllUsers')
const leave = require('./routes/api/Leave')
const staff = require('./routes/api/Staff')
const nsp = require('./routes/api/Nsp')



// Body Parse Middleware

app.use(express.json())


// config
const db = require('./config/keys').mongoURI



app.use('/api/interns', interns)
app.use('/api/leave', leave)
app.use('/api/staff', staff)
app.use('/api/nsp', nsp)



mongoose.connect(db)
    .then(()=>{
        console.log('MongoDB Connected...')
    }).catch( err=> console.log(err)
    )

const port = process.env.PORT || 5000;

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
    
})