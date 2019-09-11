const express = require('express')

const router = express.Router()



// iyem Model

const Intern = require('../../models/Intern')






// @route  GET api/items
// @desc Get all Items
// @access Public

router.get('/', (req, res)=>{
    Intern.find()
        .sort({date : -1})
        .then(items => res.json(items))
})

router.get('/get', (req, res)=>{
    Intern.findById(req.query.id)
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
            institution : req.body.institution,
            program: req.body.program,
            year_of_engagement : req.body.year_of_engagement,
            dept : req.body.dept,
            duration : req.body.duration,
            skills : req.body.skills,
            image : req.body.image
        })
    
        newIntern.save()
            .then(item => res.json(item))
            .catch(err=>res.status(400).json({"Message": "Bad Request"}) )
    


})


// Delete 

router.delete('/:id', (req,res)=>{
    Intern.findById(req.params.id)
    .then(item=> item.remove().then(()=> res.json({"success": true})))
    .catch(err=> res.status(404).json({"success": false, "Resason" : "Item Not Found"}))
})




module.exports = router