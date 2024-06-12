const express = require("express")
const router = express.Router()
const { contactUsController } = require("../controllers/ContactUs")

router.post("/contact", function(req,res){contactUsController});

module.exports = router
