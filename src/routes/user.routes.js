const { Router } = require("express");

const {
    postRegistroUsario
} = require("../controllers/user.controller")




const router = Router();

router.post("/usuario/registro", postRegistroUsario);

module.exports = router;