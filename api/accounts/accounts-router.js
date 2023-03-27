const router = require('express').Router()
const accountModel=require("./accounts-model");

router.get('/', async (req, res, next) => {
  // KODLAR BURAYA
  try{
    let allAccounts= await accountModel.getAll()
    res.json(allAccounts)
  }catch(error){
    next(error)
  }
  
})

router.get('/:id', (req, res, next) => {
  // KODLAR BURAYA
})

router.post('/', (req, res, next) => {
  // KODLAR BURAYA
})

router.put('/:id', (req, res, next) => {
  // KODLAR BURAYA
});

router.delete('/:id', (req, res, next) => {
  // KODLAR BURAYA
})

router.use((err, req, res, next) => { // eslint-disable-line
  // KODLAR BURAYA
})

module.exports = router;
