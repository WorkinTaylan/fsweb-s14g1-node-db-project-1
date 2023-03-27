const accountModel=require("./accounts-model");
const yup= require("yup");

const schema = yup.object().shape({
  name: yup.string()
  .min(3,"name of account must be between 3 and 100")
  .max(100,"name of account must be between 3 and 100")
  .required("name and budget are required"),
  budget: yup.number("budget of account must be a number")
  .min(0,"budget of account is too large or too small")
  .max(1000000,"budget of account is too large or too small")
  .required("name and budget are required")
});

exports.checkAccountPayload = async (req, res, next) => {
  // KODLAR BURAYA
  // Not: Validasyon için Yup(şu an yüklü değil!) kullanabilirsiniz veya kendiniz manuel yazabilirsiniz.
  try{
    if(req.body && req.body.name){
      req.body.name=req.body.name.trim(); // trim boşlukları siler
    }
    await schema.validate(req.body);
    next();
  }catch(error){
    next(error)
  }

}

exports.checkAccountNameUnique = async (req, res, next) => {
  // KODLAR BURAYA
  try{
    await schema.validate(req.body);
    const isExistRecord=await accountModel.getByName(req.body.name)
    if(isExistRecord){
      res.status(400).json({message:"that name is taken"})
    }else{
      next()
    }
  }catch(error){
    next(error)
  }

}

exports.checkAccountId = async (req, res, next) => {
  // KODLAR BURAYA

  try{
    const existAccount= await accountModel.getById(req.params.id)
    if(!existAccount){
      res.status(404).json({message:"account not found"})
    }else{
      req.currentAccount= existAccount;
      next();
    }
  
  }catch(error){
    next(error);
  }
} 
