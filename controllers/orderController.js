const orderModel = require("../models/orderModel");

//PLACE ORDER
const placeOrderController = async (req, res) => {
  try {
    const { cart } = req.body;

    //validation
    if (!cart || !Array.isArray(cart) || cart.length === 0) {
      return res.status(400).send({
        success: false,
        message: "Please Provide Food Cart",
      });
    }

    let total = 0;

    //calculate total
    cart.map((i) => {
      total += i.price;
    });

    //extract only food IDs
    const foodIds = cart.map((i) => i._id);

    //create order
    const newOrder = new orderModel({
      foods: foodIds,
      payment: { total },
      buyer: req.user.id,
    });

    //save
    await newOrder.save();

    res.status(201).send({
      success: true,
      message: "Order Placed Successfully",
      newOrder,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Placeorder API",
      error,
    });
  }
};

// CHANGE ORDER STATUS
const orderStatusController = async (req, res) => {
  try {
    const orderId = req.params.id;
    const { status } = req.body;

    //validation
    if (!orderId) {
      return res.status(404).send({
        success: false,
        message: "Please Provide Valid Order ID",
      });
    }

    if (!status) {
      return res.status(400).send({
        success: false,
        message: "Please Provide Order Status",
      });
    }

    //find order
    const order = await orderModel.findById(orderId);
    if (!order) {
      return res.status(404).send({
        success: false,
        message: "Order Not Found",
      });
    }

    //update status
    order.status = status;

    //save
    await order.save();

    res.status(200).send({
      success: true,
      message: "Order Status Updated",
      order,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Order Status API",
      error,
    });
  }
};

module.exports = { placeOrderController, orderStatusController };
