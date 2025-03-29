const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    nombre: String,
    fabricante: String,
    ubicacion: String,
    materiales: [String],
    impacto_ambiental: String,
    beneficio: String
});

module.exports = mongoose.model('Product', ProductSchema);