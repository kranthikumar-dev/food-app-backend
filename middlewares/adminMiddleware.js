const userModel = require("../models/userModel");

//ADMIN ACCESS
const adminMiddleware = async (req, res, next) => {
  try {
    // find user
    const user = await userModel.findById(req.user.id);

    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }

    //check admin
    if (user.usertype !== "admin") {
      return res.status(403).send({
        success: false,
        message: "Only Admin Access",
      });
    }

    next();
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Un Authorized Access",
      error,
    });
  }
};

module.exports = adminMiddleware;
