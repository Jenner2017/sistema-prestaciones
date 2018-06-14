const express = require("express");
const router = express.Router();
const authUser = require("../controladores/authUser");
const auth = require("../middlewares/auth");

router.get("/", auth, authUser.getUsuarios);
router.post("/signup", authUser.signup);
router.post("/signin", authUser.signin);
router.put("/update/:id", auth, authUser.updateUsuario);
router.delete("/delete/:id", auth, authUser.deleteUsuario);

module.exports = router;