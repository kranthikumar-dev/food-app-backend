# 🍔 Food App Backend API

A scalable and modular backend system for a food delivery application. Built using **Node.js, Express, MongoDB**, and follows production-level backend practices.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* JWT-based authentication
* Role-based access (User / Admin)
* Secure password hashing (bcrypt)

### 👤 User Management

* Register & Login
* Get user profile
* Update profile
* Update & Reset password

### 🏪 Restaurant Management

* Create restaurant (Admin)
* Get all restaurants
* Get restaurant by ID
* Delete restaurant

### 🗂 Category Management

* Create category
* Get all categories
* Update category
* Delete category

### 🍕 Food Management

* Create food item
* Get all foods
* Get single food
* Update food
* Delete food
* Get foods by restaurant

### 🛒 Order Management

* Place order (User)
* Update order status (Admin)
* Order workflow:

  * preparing → prepared → on the way → delivered

---

## 🧱 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose
* **Authentication:** JWT
* **Security:** bcryptjs
* **Tools:** Postman, Nodemon

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

## ⚙️ Installation

```bash
git clone https://github.com/your-username/food-app-backend.git
cd food-app-backend
npm install
```

---

## 🔑 Environment Variables

Create `.env` file:

```
PORT=8080
MONGO_URL=your_mongodb_url
JWT_SECRET=your_secret_key
```

---

## ▶️ Run Server

```bash
npm run dev
```

---

## 📡 API Base URL

```
http://localhost:8080/api/v1
```

---

## 🔒 Authorization Header

```
Authorization: Bearer <token>
```

---

## 🧪 API Testing

Use **Postman** to test all endpoints.

---

## 📈 Future Improvements

* Payment integration (Stripe)
* Order tracking (real-time)
* Reviews & ratings
* Admin dashboard
* Redis caching

---

## 👨‍💻 Author

Kranthi Kumar
Backend Developer (Node.js)
