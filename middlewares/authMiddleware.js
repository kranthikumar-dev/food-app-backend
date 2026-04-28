const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    // GET TOKEN
    const authHeader = req.header("authorization");

    console.log("HEADER:", authHeader); // 🔍 debug

    if (!authHeader) {
      return res.status(401).send({
        success: false,
        message: "Un-Authorize User",
      });
    }

    // 🔥 safer extraction
    const token = authHeader.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : authHeader;

    console.log("TOKEN:", token); // 🔍 debug

    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        console.log("JWT ERROR:", err.message); // 🔍 debug
        return res.status(401).send({
          success: false,
          message: "Un-Authorize User",
        });
      } else {
        req.user = decode;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error In Auth API",
    });
  }
};
