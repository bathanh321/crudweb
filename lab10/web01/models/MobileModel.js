const mongoose = require('mongoose')

var MobileSchema = mongoose.Schema({
    brandName: String,
    phoneModel: String,
    quantity: Number,
    price: Number,
    date: String,
    image: String,
    bestSeller: Boolean,
    background: String
})
//note: mobile is collection name
const MobileModel = mongoose.model("dien thoai", MobileSchema, "mobile")
module.exports = MobileModel