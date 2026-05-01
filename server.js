const express = require("express");
const colors = require("colors");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");

const testRoutes = require("./routes/testRoutes");
const connectDb = require("./config/db");

// config
dotenv.config();
connectDb();

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/resturant", require("./routes/resturantRoutes"));
app.use("/api/v1/category", require("./routes/categoryRoutes"));
app.use("/api/v1/food", require("./routes/foodRoutes"));
app.use("/api/v1/order", require("./routes/orderRoutes"));

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Food Server App API</h1>");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Running on @${PORT}`.white.bgMagenta);
});
