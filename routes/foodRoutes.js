const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const { createFoodController, getAllFoodController, getSingleFoodController, getFoodByResturantController, updateFoodController, deleteFoodController } = require("../controllers/foodController");


const router = express.Router();

//CREATE
router.post('/create', authMiddleware, createFoodController)

//GETALL
router.get('/getAll', getAllFoodController)

//GET SINGLE FOOD
router.get('/get/:id', getSingleFoodController)

//GET RESTURANT BYID
router.get("/getByResturant/:id", getFoodByResturantController);

//UPDATE FOOD
router.put('/update/:id', authMiddleware, updateFoodController)

//DELETE FOOD
router.delete('/delete/:id', authMiddleware, deleteFoodController)

module.exports = router;
