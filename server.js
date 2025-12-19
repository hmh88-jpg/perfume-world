const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose
  .connect(
    "mongodb+srv://auzxcvbnm180_db_user:IPPbHWFhuILeEFME@cluster0.4k6ln03.mongodb.net/perfumeDB"
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// routes
const perfumeRoutes = require("./routes/perfumeRoutes");
app.use("/api/perfumes", perfumeRoutes);

// serve frontend
app.use(express.static(path.join(__dirname, "frontend")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "index.html"));
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

