const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

//GET USER INFO
const getUserController = async (req, res) => {
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

    //hide password
    user.password = undefined;

    //resp
    res.status(200).send({
      success: true,
      message: "User Get Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Get User API",
      error,
    });
  }
};

//UPDATE USER
const updateUserController = async (req, res) => {
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

    //update
    const { userName, address, phone } = req.body;

    if (userName) user.userName = userName;
    if (address) user.address = address;
    if (phone) user.phone = phone;

    //save user
    await user.save();

    res.status(200).send({
      success: true,
      message: "User Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Update User API",
    });
  }
};

//UPDATE PASSWORD
const updatePasswordController = async (req, res) => {
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

    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).send({
        success: false,
        message: "Please Provide Old or New Password",
      });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "Old Password Incorrect",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;

    await user.save();

    res.status(200).send({
      success: true,
      message: "Password Updated Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Update Password API",
    });
  }
};

//RESET PASSWORD
const resetPasswordController = async (req, res) => {
  try {
    const { email, newPassword, answer } = req.body;

    if (!email || !newPassword || !answer) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }

    const user = await userModel.findOne({ email, answer });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found or Invalid Answer",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;

    await user.save();

    res.status(200).send({
      success: true,
      message: "Password Reset Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Password Reset API",
      error,
    });
  }
};

//DELETE ACCOUNT PROFILE 
const deleteProfileController = async (req, res) => {
    try {
        await userModel.findByIdAndDelete(req.params.id)
        return res.status(200).send({
            success:true,
            message:'Your Account Has Been Deleted'
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error In Delete API'
        })
    }
}

module.exports = {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteProfileController
};
