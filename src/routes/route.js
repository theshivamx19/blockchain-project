const express = require('express');
const router = express.Router();

const cryptoController = require('../controllers/cryptoController')

//----------------------------------------------Public APIs-----------------------------------------------------------
router.get("/getCryptoData", cryptoController.getCryptoData)

//----------------------------------------EndPoint Error for all API's--------------------------------------------------
router.all("/*", function (req, res) {
    res.status(404).send({ status: false, msg: "make sure your endpont is correct" })
})

module.exports = router  
