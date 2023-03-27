const router = require('express').Router()
const accountModel=require("./accounts-model");
const {checkAccountPayload, checkAccountId, checkAccountNameUnique}=require("./accounts-middleware");

router.get('/', async (req, res, next) => {
  // KODLAR BURAYA
  try{
    const allAccounts= await accountModel.getAll()
    res.json(allAccounts);
  }catch(error){
    next(error)
  }
})

router.get('/:id',checkAccountId, async (req, res, next) => {
  // KODLAR BURAYA
  try{
    res.json(req.currentAccount)
  }catch(error){
  next(error)
  }
})

router.post('/', checkAccountPayload, checkAccountNameUnique, async (req, res,next) => {
  // KODLAR BURAYA
  try{
    const {name, budget}=req.body;
    const inserted= await accountModel.create({name:name, budget:budget})
    res.status(201).json(inserted)
  }catch(error){
    next(error)
  }
})

router.put('/:id', checkAccountPayload,checkAccountNameUnique, checkAccountId, async (req, res, next) => {
  // KODLAR BURAYA
  
  try {
    const {name, budget}=req.body;
    let updatedRecord=await accountModel.updateById(req.params.id, {name:name, budget:budget})
    res.status(200).json(updatedRecord)
  }catch(error){
    next(error)
  }
});

router.delete('/:id',checkAccountId, async(req, res, next) => {
  // KODLAR BURAYA
  try{
    await accountModel.deleteById(req.params.id)
    res.json({message:`${req.params.id} ID'li kayıt silindi`})
  }catch(error){
    next(error)
  }
})


//global error handling diye de isimlendiriliyor.
router.use((err, req, res, next) => { // eslint-disable-line
  // KODLAR BURAYA
  res.status(err.status || 400).json({
    message:err.message,
    customMessage:"Hata oluştu"
  })
})

module.exports = router;
