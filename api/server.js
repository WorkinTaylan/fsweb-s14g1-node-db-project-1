const express = require("express");
const accountRouter=require("./accounts/accounts-router")

const server = express();

server.use(express.json());
server.use("/api/accounts", accountRouter)

server.get("/", (req,res)=>{
    res.send(`<h2>Hadi biraz istek atalım</h2>`)
})

module.exports = server;
