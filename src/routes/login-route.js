const express = require('express')
var router = express.Router(); //interceptação das rotas
const userController = require('../controllers/user-controller')

router.post("/", userController.login);

module.exports = router;