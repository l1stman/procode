const express = require("express");
const router = express.Router();

// Controllers
var codesController = require("../controllers/codesController");

router.get("/", function (req, res) {
  res.json({
    message: "hello world",
  });
});
router.post("/create", codesController.createCode);
router.delete("/delete", codesController.deleteCode);
router.post("/codes", codesController.allCodes);
module.exports = router;
