const mongoose = require('mongoose')
const Schema = mongoose.Schema;



// Create InternSchema 

const InternSchema = new Schema({
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
    institution : {
        type : String,
        required : true
    },
    program : {
        type : String,
        required : true
    },
    year_of_engagement : {
        type : String,
        required : true
    },
    dept : {
        type : String,
        required : true
    },
    duration : {
        type : String,
        required : true
    },
    skills : {
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

module.exports = Intern = mongoose.model('item', InternSchema)
