# 📚 BookWorms Blog

A simple full-stack Node.js + Express application for posting and managing book reviews. Built as a learning project to practice **Express routes, EJS templates, RESTful concepts, and form handling**.

---

## ✨ Features

* **Create**: Submit a book review with a post title, review text, book name, genre, and your name.
* **Read**: View all reviews on the **Reviews** page.
* **Update**: Edit a previously submitted review on a dedicated **Edit** page.
* **Delete**: Remove a review directly from the list.
* **My Reviews**: See your own submitted reviews separately.
* **Styling**: Basic Bootstrap + custom CSS for a clean layout.

---

## 🛠️ Tech Stack

* **Backend**: Node.js, Express.js
* **Frontend**: EJS templates + Bootstrap
* **Data Storage**: In-memory array (no database yet; data resets when server restarts)
* **Other**: Vanilla CSS for custom styling

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v16+ recommended)
* npm (comes with Node)

### Installation

```bash
# Clone the repo
git clone https://github.com/JimenezK10/bookworms.git
cd backend capstone

# Install dependencies
npm install
```

### Run the App

```bash
node index.js
```

Then open your browser at:
👉 `http://localhost:3000`

---

## 📂 Project Structure

```
backend-capstone/
├── index.js            # Main server
├── public/             # Static assets (main.css, images, etc.)
│   └── main.css
├── views/              # EJS templates
│   ├── index.ejs
│   ├── upost.ejs
│   ├── myreviews.ejs
│   ├── reviews.ejs
│   ├── edit.ejs
│   └── partials/       # Header/Footer
└── package.json
```

---

## 🔮 Next Steps

* Persist reviews with **Postgres** or another database.
* Add **authentication** (so users can have their own accounts).
* Build an **API layer** returning JSON, to prepare for React or other frontend frameworks.
* Deploy to **Render/Heroku/Netlify** for live access.

---

## 🙌 Acknowledgements

* Inspired by learning projects from full-stack developer course created by Dr. Angela Yu.
* Thanks to [Bootstrap](https://getbootstrap.com/) for easy styling.

