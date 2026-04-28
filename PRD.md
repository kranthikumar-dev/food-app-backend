# 📌 Product Requirement Document (PRD)

## 🍔 Food Delivery Backend System

---

## 🎯 Objective

Build a scalable backend system to support a food delivery application where users can browse restaurants, order food, and admins can manage operations.

---

## 👥 Users

### 1. Customer

* Register/Login
* Browse restaurants & foods
* Place orders
* Track order status

### 2. Admin

* Manage restaurants
* Manage categories
* Manage food items
* Update order status

---

## 🧩 Core Features

### 🔐 Authentication

* JWT-based login system
* Role-based access (admin/user)

---

### 👤 User Module

* Register user
* Login user
* Get profile
* Update profile
* Change password
* Reset password

---

### 🏪 Restaurant Module

* Create restaurant
* Get all restaurants
* Get restaurant by ID
* Delete restaurant

---

### 🗂 Category Module

* Create category
* Get all categories
* Update category
* Delete category

---

### 🍕 Food Module

* Add food item
* Get all foods
* Get food by ID
* Update food
* Delete food
* Get foods by restaurant

---

### 🛒 Order Module

* Place order
* Calculate total price
* Store food references
* Update order status (admin)

---

## 🔄 Order Workflow

```
preparing → prepared → on the way → delivered
```

---

## 📊 Database Design

### User

* name, email, password, role

### Restaurant

* title, image, foods, rating, location

### Food

* title, description, price, category, restaurant

### Order

* foods (array of IDs)
* buyer (user ID)
* payment
* status

---

## 🔐 Security

* Password hashing (bcrypt)
* JWT authentication
* Protected routes
* Role-based access

---

## ⚙️ Non-Functional Requirements

* Scalable architecture
* Clean code structure
* Error handling
* Fast response time

---

## 🚀 Future Scope

* Payment gateway
* Real-time delivery tracking
* Notifications
* Reviews & ratings
* Mobile app integration
