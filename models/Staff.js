const mongoose = require('mongoose')
const Schema = mongoose.Schema;



// Create InternSchema 

const StaffSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    dob : {
        type : String,
        required : true
    },
    contact : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    marital_status : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    dept : {
        type : String,
        required : true
    },
    date_hired : {
        type : String,
        required : true
    },
    functions : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    },
    image : {
        type : String,
        required : false
    }
})

module.exports = Intern = mongoose.model('staff', StaffSchema)
