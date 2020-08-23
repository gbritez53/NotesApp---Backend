const { Router } = require("express");
const router = Router();

router.get("/users/signin", (req, res) => {
  res.send("Ingresando a la App...");
});

router.get("/users/signup", (req, res) => {
  res.send("Registrarse");
});

module.exports = router;
