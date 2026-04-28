const foodModel = require("../models/foodModel");

//CREATE FOOD
const createFoodController = async (req, res) => {
    try {
        const {
          title,
          description,
          price,
          imageUrl,
          foodTags,
          category,
          code,
          isAvailable,
          resturant,
          rating,
        } = req.body;

        if (!title || !description || !price || !resturant) {
            return res.status(500).send({
                success:false,
                message:'Please Provide All Fields'
            })
        }
        const newFood = new foodModel({
          title,
          description,
          price,
          imageUrl,
          foodTags,
          category,
          code,
          isAvailable,
          resturant,
          rating,
        });
        await newFood.save()
        res.status(201).send({
            success:true,
            message:'New Food Items Created',
            food: newFood
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error In Create Food API',
            error
        })
    }
}

//GET ALL 
const getAllFoodController = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        if (!foods) {
            return res.status(404).send({
                success:false,
                message:'No Foods Items Was Found'
            })
        }
        res.status(200).send({
            success:true,
            totalFoods: foods.length,
            foods,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error In GetAll Foods API',
            error
        })
    }
     
}

//GET SINGLE FOOD
const getSingleFoodController = async (req, res) => {
    try {
        const foodId = req.params.id
        if (!foodId) {
            return res.status(404).send({
                success:false,
                message:'Please Provide ID',
            })
        }
        const food = await foodModel.findById(foodId)
        if (!food) {
            return res.status(404).send({
                success:false,
                message:'No Food WITH This ID'
            })
        }
        res.status(200).send({
            success:true,
            food,
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error In Get Food API',
            error
        })
    }
}

//GET RESTURANT BYID
const getFoodByResturantController = async (req, res) => {
  try {
    const resturantId = req.params.id;
    if (!resturantId) {
      return res.status(404).send({
        success: false,
        message: "Please Provide ID",
      });
    }
    const food = await foodModel.find({resturant: resturantId});
    if (!food) {
      return res.status(404).send({
        success: false,
        message: "No Food With This ID",
      });
    }
    res.status(200).send({
      success: true,
      message:'Food Based on Resturant',
      food,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Get Food By Resturant API",
      error,
    });
  }
};

//FOOD UPDATE
const updateFoodController = async (req, res) => {
    try {
        const foodId = req.params.id
        if (!foodId) {
            return res.status({
                success:false,
                message:'No Food ID Was Found'
            })
        }
        const food = foodModel.findById(foodId)
        if (!food) {
            return res.status(404).send({
                success:false,
                message:'No Food Found'
            })
        }
        const {
          title,
          description,
          price,
          imageUrl,
          foodTags,
          category,
          code,
          isAvailable,
          resturant,
          rating,
        } = req.body;
        const updatedFood = await foodModel.findByIdAndUpdate(
          foodId,
          {
            title,
            description,
            price,
            imageUrl,
            foodTags,
            category,
            code,
            isAvailable,
            resturant,
            rating,
          },
          {new:true},
        );
        res.status(200).send({
            success:true,
            message:'Food Item Was Updated'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error In Update Food API',
            error
        })
    }
}

//DELETE FOOD 
const deleteFoodController = async (req, res) => {
    try {
        const foodId = req.params.id
        if (!foodId) {
            return res.status(404).send({
                success:false,
                message:'No Food ID Found'
            })
        }
        const food = await foodModel.findById(foodId)
        if (!food) {
            return res.status(404).send({
                success:false,
                message:'No Food Find With Thid ID',
            })
        }
        await foodModel.findByIdAndDelete(foodId)
        res.status(200).send({
            success:true,
            message:'Food Item Deleted',
            
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error In Delete Food API',
            error
        })
    }
}

module.exports = { createFoodController, getAllFoodController, getSingleFoodController, getFoodByResturantController, updateFoodController, deleteFoodController }