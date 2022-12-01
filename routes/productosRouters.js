const express = require("express");
const router = express.Router();
const authMidd = require("../middleware/authMidd");
const productosController = require("../controllers/productosController");

router.get("/",authMidd, productosController.obtenerProducto );
router.post("/",authMidd,productosController.crearProducto );
router.put("/",authMidd, productosController.actualizarProducto );
router.delete("/" ,authMidd,productosController.borrarProducto);

// definir las rutas
module.exports = router;