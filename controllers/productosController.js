const Productos = require("../models/Productos");

exports.obtenerProducto = async ( req, res) => {
    res.status(404).json({ msg : "obtener producto"});
};
exports.crearProducto = async ( req, res) => {
    res.status(404).json({ msg : "crear producto"});
};

exports.actualizarProducto = async ( req, res) => {
    res.status(404).json({ msg : "actualizar producto"});
};

exports.borrarProducto = async ( req, res) => {
    res.status(404).json({ msg : "borrar producto"});
};