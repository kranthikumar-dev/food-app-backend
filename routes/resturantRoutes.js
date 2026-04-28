const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
} = require("../controllers/resturantController");

const router = express.Router();

// CREATE RESTAURANT
router.post("/create", authMiddleware, createResturantController);

// GET ALL RESTAURANTS
router.get("/getAll", getAllResturantController);

// GET RESTAURANT BY ID
router.get("/get/:id", getResturantByIdController);

// DELETE RESTURANT || DELETE
router.delete('/delete/:id', authMiddleware, deleteResturantController)

module.exports = router;
