const express = require('express')
const router = express.Router()
const Product = require('../model/product')
//get all
router.get('/', async (req, res) => {
    try {
    const product = await Product.find({});
    res.json(product)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
//get by id
router.get('/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        console.log(product);
        res.json(product)
        } catch (err) {
            res.status(500).json({message: err.message})
        }
    })
//post 
router.post('/', async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        grape: req.body.grape,
        country: req.body.country,
        region: req.body.region,
        qty: req.body.qty,
        instock: req.body.instock,
        year: req.body.year,
        description: req.body.description
    })
    try {
        const newProduct = await product.save()
        res.status(201).json(newProduct)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})
//delete 
router.delete('/:id', async (req,res) => {
    try {
    const {id} = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.send('deleted')
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})
//update
router.put('/:id', async (req,res) => {
    try {

        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true});
        res.send('updated')
    } catch (err) {
            res.status(500).json({
                message: err.message
            })
        }
})
module.exports = router

