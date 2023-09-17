
const pool = require("../db");

const postRegistroUsario = async (req, res)=>{
    const body =  req.body
    console.log(body)
    res.send("creating a form")
    await pool.query("SELECT * FROM usuarios")
};

module.exports ={
    postRegistroUsario
}