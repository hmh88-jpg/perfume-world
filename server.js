const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://auzxcvbnm180_db_user:IPPbHWFhuILeEFME@cluster0.4k6ln03.mongodb.net/perfumeDB"
)
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const perfumeRoutes = require("./routes/perfumeRoutes");
app.use("/api/perfumes", perfumeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
