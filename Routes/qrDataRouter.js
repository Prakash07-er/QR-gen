const router = require('express').Router();
const {qrDataContoller} = require("../Controllers/qrDataContoller")

router.post('/add-data', qrDataContoller.createCatalog)

router.get('/read-data', qrDataContoller.readCatalog)

module.exports = router