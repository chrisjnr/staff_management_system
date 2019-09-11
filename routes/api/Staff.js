const express = require('express')

const router = express.Router()



// iyem Model

const Staff = require('../../models/Staff')






// @route  GET api/items
// @desc Get all Items
// @access Public

router.get('/', (req, res)=>{
    Staff.find()
        .sort({date : -1})
        .then(items => res.json(items))
})

router.get('/get', (req, res)=>{
    Staff.findById(req.query.id)
        .then(item => res.json(item))
        .catch(err=>res.status(404).json({"message" : "Record Not Found"}))
})


// Post

router.post('/', (req, res)=>{
        const newIntern = new Intern({
            name : req.body.name,
            gender: req.body.gender,
            dob: req.body.dob,
            contact : req.body.contact,
            address : req.body.address,
            marital_status: req.body.marital_status,
            email : req.body.email,
            dept : req.body.dept,
            date_hired : req.body.date_hired,
            functions : req.body.functions,
            image : req.body.image
        })
    
        newIntern.save()
            .then(item => res.json(item))
            .catch(err=>res.status(400).json({"Message": "Bad Request"}) )
    


})


// Delete 

router.delete('/:id', (req,res)=>{
    Staff.findById(req.params.id)
    .then(item=> item.remove().then(()=> res.json({"success": true})))
    .catch(err=> res.status(404).json({"success": false, "Resason" : "Item Not Found"}))
})




module.exports = router