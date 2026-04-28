const mongoose = require("mongoose");

//schema
const foodSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Food Title Is Required"],
    },
    description: {
      type: String,
      required: [true, "Food Description Is Required"],
    },
    price: {
      type: Number,
      required: [true, "Food Price Is Required"],
    },
    imageUrl: {
      type: String,
      default:
        "https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png",
    },
    foodTags: {
      type: [String],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    code: {
      type: String,
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    resturant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resturant",
    },
    rating: {
      type: Number,
      default: 5,
      min: 1,
      max: 5,
    },
    ratingCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Foods", foodSchema);
