<div align="center">

# 🍔 Food Delivery Backend API

**A production-ready REST API for food delivery applications**  
Built with Node.js · Express · MongoDB

[![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com)
[![JWT](https://img.shields.io/badge/Auth-JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)](https://jwt.io)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
[![Render](https://img.shields.io/badge/Deployed-Render-46E3B7?style=flat-square&logo=render&logoColor=white)](https://food-app-backend-u3j1.onrender.com)

[Live API](https://food-app-backend-u3j1.onrender.com) · [Report Bug](https://github.com/kranthikumar-dev/food-app-backend/issues) · [Request Feature](https://github.com/kranthikumar-dev/food-app-backend/issues)

</div>

---

## 📖 Overview

A fully functional backend system for a food delivery platform supporting multi-role authentication, restaurant and menu management, and a complete order lifecycle — from placement to delivery. Designed with scalability and clean architecture in mind.

---

## ✨ Features

| Module | Capabilities |
|---|---|
| 🔐 **Auth** | JWT login/register, bcrypt password hashing, role-based access (User / Admin) |
| 👤 **User** | Profile management, password update, password reset |
| 🏪 **Restaurant** | Create (Admin), list, fetch by ID, delete |
| 🍕 **Food** | Add, list, fetch, update, delete food items |
| 🗂️ **Category** | Create, list, update, delete categories |
| 🛒 **Order** | Place order, auto price calculation, status tracking |

---

## 🔄 Order Lifecycle

```
preparing  →  prepared  →  on the way  →  delivered
```

Order status transitions are managed exclusively by Admins to ensure accurate delivery tracking.

---

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB + Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Security:** bcryptjs
- **Logging:** Morgan
- **Testing:** Postman
- **Deployment:** Render

---

## 📂 Project Structure

```
backend/
├── config/           # DB connection and environment config
├── controllers/      # Route handler logic
├── middlewares/      # Auth guards, error handlers
├── models/           # Mongoose schemas
├── routes/           # API route definitions
├── server.js         # App entry point
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account (or local MongoDB instance)

### 1. Clone the Repository

```bash
git clone https://github.com/kranthikumar-dev/food-app-backend.git
cd food-app-backend/backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `backend/` directory:

```env
PORT=8080
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Start the Development Server

```bash
npm run dev
```

The API will be available at `http://localhost:8080/api/v1`

---

## 📡 API Reference

### Base URL

```
http://localhost:8080/api/v1
```

### Authentication

All protected routes require a Bearer token in the request header:

```
Authorization: Bearer <your_jwt_token>
```

---

### 🔐 Auth Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/auth/register` | Register a new user | ❌ |
| `POST` | `/auth/login` | Login and receive JWT | ❌ |

---

### 👤 User Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `GET` | `/user/getUser` | Get current user profile | ✅ |
| `PUT` | `/user/updateUser` | Update profile details | ✅ |
| `POST` | `/user/updatePassword` | Change password | ✅ |

---

### 🏪 Restaurant Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/restaurant/create` | Create a restaurant | ✅ Admin |
| `GET` | `/restaurant/getAll` | Get all restaurants | ✅ |
| `GET` | `/restaurant/:id` | Get restaurant by ID | ✅ |
| `DELETE` | `/restaurant/:id` | Delete a restaurant | ✅ Admin |

---

### 🍕 Food Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/food/create` | Add a food item | ✅ Admin |
| `GET` | `/food/getAll` | Get all food items | ✅ |
| `GET` | `/food/:id` | Get food by ID | ✅ |
| `PUT` | `/food/:id` | Update food item | ✅ Admin |
| `DELETE` | `/food/:id` | Delete food item | ✅ Admin |

---

### 🛒 Order Endpoints

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| `POST` | `/order/placeorder` | Place a new order | ✅ |
| `PUT` | `/order/orderStatus/:id` | Update order status | ✅ Admin |

---

## 🧪 Example Requests

### Place an Order

**POST** `/api/v1/order/placeorder`

```json
{
  "cart": [
    {
      "_id": "food_id_here",
      "price": 150
    },
    {
      "_id": "another_food_id",
      "price": 200
    }
  ]
}
```

**Response**

```json
{
  "success": true,
  "message": "Order placed successfully",
  "order": {
    "_id": "order_id",
    "foods": ["food_id_here", "another_food_id"],
    "totalAmount": 350,
    "status": "preparing"
  }
}
```

---

## 🚀 Deployment

This API is deployed on **Render**. Configure the following environment variables in the Render dashboard:

```env
MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_secret_key
PORT=10000
```

**Live URL:** https://food-app-backend-u3j1.onrender.com

> **Note:** The service may take 30–60 seconds to respond on the first request due to Render's free tier cold start behaviour.

---

## 🗺️ Roadmap

- [ ] Payment integration (Stripe / Razorpay)
- [ ] Redis caching for improved performance
- [ ] Order history and tracking APIs
- [ ] CI/CD pipeline (GitHub Actions)
- [ ] Frontend client (React / Next.js)
- [ ] Email notifications for order updates
- [ ] Rate limiting and enhanced security headers

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 👨‍💻 Author

**Kranthi Kumar**  
Backend Developer · Node.js & REST APIs

[![GitHub](https://img.shields.io/badge/GitHub-kranthikumar--dev-181717?style=flat-square&logo=github)](https://github.com/kranthikumar-dev)

---

## ⭐ Support

If this project helped you or you found it useful:

- Give it a ⭐ on GitHub
- Share it with others who are learning backend development

---

<div align="center">
  <sub>Built with ❤️ by Kranthi Kumar</sub>
</div>
