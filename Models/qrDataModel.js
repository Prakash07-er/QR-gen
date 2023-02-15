const mongoose = require('mongoose')

const qrDataModel = new mongoose.Schema({
    productQRCode: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    productName: {
        type: String,
        required: true,
        trim: true
    },
    productDesc: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model("qrData", qrDataModel)