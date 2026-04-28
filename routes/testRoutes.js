const express = require("express")
const { testuserController } = require("../controllers/testController")

//router object
const router = express.Router()

//routes GET | POST | UPDATE | DELETE
router.get('/test-user', testuserController)

 module.exports = router;