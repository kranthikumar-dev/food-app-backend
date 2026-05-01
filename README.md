🍔 Food Delivery Backend API

A production-ready backend system for a food delivery application built with Node.js, Express, and MongoDB.
Implements authentication, role-based access, and a complete order management workflow.

🌐 Live API

👉 https://food-app-backend-u3j1.onrender.com

📌 Features
🔐 Authentication & Authorization
JWT-based authentication
Role-based access control (User / Admin)
Secure password hashing using bcrypt
👤 User Module
Register / Login
Get user profile
Update profile
Change password
Reset password
🏪 Restaurant Module
Create restaurant (Admin only)
Get all restaurants
Get restaurant by ID
Delete restaurant
🍕 Food Module
Add food item
Get all foods
Get food by ID
Update & delete food
🗂 Category Module
Create category
Get all categories
Update category
Delete category
🛒 Order Module
Place order
Calculate total price
Store food references
Update order status (Admin only)
🔄 Order Workflow
preparing → prepared → on the way → delivered
🧱 Tech Stack
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Authentication: JWT
Security: bcryptjs
Logging: Morgan
API Testing: Postman
Deployment: Render
📂 Project Structure
backend/
│
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
│
├── server.js
├── package.json
├── README.md
└── PRD.md
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/kranthikumar-dev/food-app-backend.git
cd food-app-backend/backend
2️⃣ Install Dependencies
npm install
3️⃣ Create .env file
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
4️⃣ Run Server
npm run dev
📡 API Base URL
http://localhost:8080/api/v1
🔒 Authorization

All protected routes require:

Authorization: Bearer <token>
📌 Sample Endpoints
🔐 Auth
POST /api/v1/auth/register
POST /api/v1/auth/login
👤 User
GET /api/v1/user/getUser
PUT /api/v1/user/updateUser
POST /api/v1/user/updatePassword
🛒 Orders
POST /api/v1/order/placeorder
PUT /api/v1/order/orderStatus/:id
🧪 Example Request (Place Order)
{
  "cart": [
    {
      "_id": "food_id_here",
      "price": 150
    }
  ]
}
🚀 Deployment

Deployed on Render with environment variables:

MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
PORT=10000
⚠️ Known Improvements (Next Steps)
💳 Add payment integration (Stripe)
⚡ Add Redis caching
📦 Add order history APIs
🚀 Add CI/CD pipeline
🌍 Add frontend (React / Next.js)
👨‍💻 Author

Kranthi Kumar
Backend Developer (Node.js / APIs)

⭐ Support

If you found this project useful:

👉 Give it a ⭐ on GitHub
👉 Share it with others
