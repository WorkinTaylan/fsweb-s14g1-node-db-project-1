
const db= require("../../data/db-config")

const getAll = () => {
  // KODLAR BURAYA
  //db.select('*').from('accounts'); ya da
  return db("accounts");
}

const getById = id => {
  // KODLAR BURAYA
  return db("accounts").where("id",id).first();
}

const getByName= name=>{
  return db("accounts").where("name", name).first();
}

/* const getByFilter=filter=>{
  return db("accounts").where(filter)
} */

const create = async (account) => {
  // KODLAR BURAYA
  const id=await db("accounts").insert(account)
    return await getById(id)
  
}

const updateById = async (id, account) => {
  // KODLAR BURAYA
  await db("accounts").where("id",id).update(account) // satır sayısı return
  return await getById(id)
}

const deleteById = id => {
  // KODLAR BURAYA
  return db("accounts").where("id", id).del(); // etkilenen kayıt sayısı
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getByName
}
