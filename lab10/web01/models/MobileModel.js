const mongoose = require('mongoose')

var MobileSchema = mongoose.Schema({
    brandName: String,
    phoneModel: String,
    quantity: Number,
    price: Number,
    date: String,
    image: String,
    bestSeller: Boolean
})
//note: mobile is collection name
var MobileModel = mongoose.model("dien thoai", MobileSchema, "mobile")
module.exports = MobileModel