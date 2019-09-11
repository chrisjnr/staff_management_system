const mongoose = require('mongoose')
const Schema = mongoose.Schema;



// Create LeaveSchema 

const LeaveSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    start : {
        type : String,
        required : true
    },
    end : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }

})

module.exports = Intern = mongoose.model('leave', LeaveSchema)
