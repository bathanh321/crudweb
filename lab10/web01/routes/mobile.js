var express = require('express')
const MobileModel = require('../models/MobileModel')
const router = express.Router()


router.get('/', async(req, res)=>{
    var mobiles = await MobileModel.find()
    //res.send(mobiles)
    res.render('mobile/index', {mobiles : mobiles})
})
router.get('/delete/:id', async(req, res)=>{
    var id = req.params.id
    await MobileModel.findByIdAndDelete(id)
    .then(() => console.log('delete succeed'))
    .catch((error) =>console.log('delete failed'))
    res.redirect('mobile')
    //console.log('test delete')
})
router.get('/deleteall', async(req, res)=>{
    await MobileModel.deleteMany()
    .then(()=> console.log("Delete success"))
    .catch((error)=> console.log("delete failed"))
    res.redirect('mobile')
})
router.get('/detail/:id', async(req, res)=>{
    var id = req.params.id
    var mobile = await MobileModel.findById(id)
    res.render('mobile/detail', {mobile : mobile})
})
router.post('/order', async(req, res)=>{
    var data = req.body
    var id = data.id
    var mobile = await MobileModel.findById(id)
    var price = data.price
    var quantity = data.quantity
    var total = price * quantity
    res.render('mobile/order', {mobile: mobile, quantity: quantity, price: price, total: total})
})
module.exports = router