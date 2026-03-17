const express = require("express");
const router = express.Router();

const statusCodes = require("../data/statusCodes");

router.get("/", (req, res) => {
    res.json(statusCodes);
});

router.get("/:code", (req, res) => {

const code = req.params.code;
const status = statusCodes[code];

if (!status) {
  return res.json({ message: "Status code not found" });
}

res.json({
  code: code,
  message: status.message,
  description: status.description,
  example: status.example
});

});

module.exports = router;