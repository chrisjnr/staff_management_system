const express = require('express')

const router = express.Router()



// iyem Model

const Leave = require('../../models/Leave')






// @route  GET api/items
// @desc Get all Items
// @access Public

router.get('/', (req, res)=>{
    Leave.find()
        .sort({date : -1})
        .then(items => res.json(items))
})

router.get('/get', (req, res)=>{
    Leave.findById(req.query.id)
        .then(item => res.json(item))
        .catch(err=>res.status(404).json({"message" : "Record Not Found"}))
})


// Post

router.post('/', (req, res)=>{
        const newLeave = new Leave({
            name : req.body.name,
            start: req.body.start,
            end: req.body.end
        })
    
        newLeave.save()
            .then(item => res.json(item))
            .catch(err=>res.status(400).json({"Message": "Bad Request"}) )
    


})


// Delete 

router.delete('/:id', (req,res)=>{
    Leave.findById(req.params.id)
    .then(item=> item.remove().then(()=> res.json({"success": true})))
    .catch(err=> res.status(404).json({"success": false, "Resason" : "Item Not Found"}))
})




module.exports = router