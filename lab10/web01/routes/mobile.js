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
module.exports = router