const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findOne({ id: req.params.id });

        if(!product) {
            return res.status().json({message: 'Producto no encontrado'});
        }
        
        res.json(product);
    } catch (error) {
        res.status(500).json({message: 'Error en el servidor'});
    }
});

module.exports = router;