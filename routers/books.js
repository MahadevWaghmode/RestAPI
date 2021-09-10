const express = require('express')
const Book = require('../models/book')    
const router = express.Router()



router.get('/',async(req,res)=>{
    try{
    const books = await Book.find()
    res.json(books)
    }
    catch(err){
        res.send("Error :"+err)
    }
})

router.get('/:id',async(req,res)=>{
    try{
    const books = await Book.findById(req.params.id)
    res.json(books)
    }
    catch(err){
        res.send("Error :"+err)
    }
})
router.post('/', async(req,res)=>{
    const book = new Book({
        name: req.body.name,
        author: req.body.author,
        price: req.body.price,
    })
    try{
        const a1 = await book.save()
        res.json(a1)
    }
    catch(err){
        res.send("Error"+err)
    }
})


module.exports = router