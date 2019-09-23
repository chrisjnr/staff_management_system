const express = require('express')

const router = express.Router()



// iyem Model

const Nsp = require('../../models/NspPersonnel')






// @route  GET api/items
// @desc Get all Items
// @access Public

router.get('/', (req, res)=>{
    Nsp.find()
        // .sort({date : -1})
        .then(items => res.json(items))
})

router.get('/get', (req, res)=>{
    Nsp.findById(req.query.id)
        .then(item => res.json(item))
        .catch(err=>res.status(404).json({"message" : "Record Not Found"}))
})


// Post

router.post('/', (req, res)=>{
        const newNsp = new Nsp({
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
    
        newNsp.save()
            .then(item => res.json(item))
            .catch(err=>{res.status(400).json({"Message": "Bad Request"});console.log(err)
            } )
    


})


// Delete 

router.delete('/:id', (req,res)=>{
    Nsp.findById(req.params.id)
    .then(item=> item.remove().then(()=> res.json({"success": true})))
    .catch(err=> res.status(404).json({"success": false, "Resason" : "Item Not Found"}))
})




module.exports = router