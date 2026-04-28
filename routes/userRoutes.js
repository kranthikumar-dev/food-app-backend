const express = require("express");
const {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteProfileController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

//GET USER
router.get("/getUser", authMiddleware, getUserController);

//UPDATE PROFILE
router.put("/updateUser", authMiddleware, updateUserController);

//UPDATE PASSWORD (logged-in user)
router.put("/updatePassword", authMiddleware, updatePasswordController);

//RESET PASSWORD (no auth)
router.post("/resetPassword", resetPasswordController);

//DELETE USER
router.delete('/deleteUser/:id', authMiddleware, deleteProfileController)

module.exports = router;
