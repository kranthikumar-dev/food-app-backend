# 🍔 Food Delivery Backend API

A **production-ready backend system** for a food delivery application built with **Node.js, Express, and MongoDB**.
Implements authentication, role-based access, and a complete order management workflow.

---

## 📌 Features

### 🔐 Authentication & Authorization

* JWT-based authentication
* Role-based access control (User / Admin)
* Secure password hashing using bcrypt

---

### 👤 User Module

* Register / Login
* Get user profile
* Update profile
* Change password
* Reset password

---

### 🏪 Restaurant Module

* Create restaurant (Admin)
* Get all restaurants
* Get restaurant by ID

---

### 🍕 Food Module

* Add food item
* Get all foods
* Get food by ID
* Update & delete food

---

### 🗂 Category Module

* Create category
* Get all categories
* Update category
* Delete category

---

### 🛒 Order Module

* Place order
* Calculate total price
* Store food references
* Update order status (Admin)

---

## 🔄 Order Workflow

```
preparing → prepared → on the way → delivered
```

---

## 🧱 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Authentication:** JWT
* **Security:** bcryptjs
* **API Testing:** Postman

---

## 📂 Project Structure

```
backend/
│
├── controllers/
├── models/
├── routes/
├── middlewares/
├── config/
├── server.js
```

---

## ⚙️ Installation & Setup

### 1. Clone Repository

```
git clone https://github.com/kranthikumar-dev/food-app-backend.git
cd food-app-backend/backend
```

### 2. Install Dependencies

```
npm install
```

### 3. Create .env file

```
PORT=8080
MONGO_URL=your_mongodb_url
JWT_SECRET=your_secret_key
```

### 4. Run Server

```
npm run dev
```

---

## 📡 API Base URL

```
http://localhost:8080/api/v1
```

---

## 🔒 Authorization

All protected routes require:

```
Authorization: Bearer <token>
```

---

## 📌 Sample API Endpoints

### Auth

```
POST /auth/register
POST /auth/login
```

### User

```
GET /user/getUser
PUT /user/updateUser
POST /user/updatePassword
```

### Orders

```
POST /order/placeorder
PUT /order/orderStatus/:id
```

---

## 🧪 Example Request (Place Order)

```
POST /api/v1/order/placeorder
```

```json
{
  "cart": [
    {
      "_id": "food_id_here",
      "price": 150
    }
  ]
}
```

---

## ⚠️ Known Improvements (Next Steps)

* Add payment integration (Stripe)
* Add order history APIs
* Add Redis caching
* Deploy to cloud (Render)

---

## 👨‍💻 Author

**Kranthi Kumar**
Backend Developer (Node.js)

---

## ⭐ Show your support

If you like this project, give it a ⭐ on GitHub!
