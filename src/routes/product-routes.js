const express = require('express')
var router = express.Router(); //interceptação das rotas
const productController = require('../controllers/product-controller')
const autorization = require('../services/auth-service');

//Post
router.post("/", productController.post);

//Get All
router.get("/", autorization.authorize, productController.getAll);

//FindById
router.get("/:productId", productController.getById);

//PUT
router.put("/:productId", productController.put);

//DELETE
router.delete("/:productId", productController.delete);

module.exports = router;
