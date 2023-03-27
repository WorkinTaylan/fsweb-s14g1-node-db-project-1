const db= require("../../data/db-config")

const getAll = () => {
  // KODLAR BURAYA
  //db.select('*').from('accounts'); ya da
  return db("accounts");
}

const getById = id => {
  // KODLAR BURAYA
  return db("accounts").where({id}).first();
}

const create = account => {
  // KODLAR BURAYA
  return db("accounts").create(account).then(ids=>{
    return getById(ids[0]) //burayı anlamadım
  });
}

const updateById = (id, account) => {
  // KODLAR BURAYA
  return db("accounts").where({id}).update(account).then(rows=>{
    return getById(id)
  })
}

const deleteById = id => {
  // KODLAR BURAYA
  return db("accounts").where("id", id).del();
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
