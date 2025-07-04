const envPath = process.env.NODE_ENV === 'production' ? './.env.production' : './.env.development';
require("dotenv").config({ path: envPath });

const express = require("express");
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = require("./config/db");

// Database Connection
const dbURL = process.env.DB_URL;
connectDB(dbURL);

const authRoutes = require("./routes/authRoutes");
const User = require("./models/user");

app.get("/", (req, res) => {
    return res.end("<h1>E-commerce<h1>");
});

app.use("/api/auth/", authRoutes);

app.listen(PORT, () => console.log("Server started"));