const { Router } = require("express");
const router = Router();

router.get("/notes", (req, res) => {
  res.send("Notes from database");
});

module.exports = router;
