const dns = require("dns");
dns.setServers([
    "8.8.8.8",
    "8.8.4.4"
]);


const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");

require("./config/db");

const useRoute = require("./routes/authRoutes");
const productRoute = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded images
app.use(
    "/uploads",
    express.static(path.join(__dirname, "uploads"))
);

// Routes
app.use("/api/auth", useRoute);
app.use("/api/admin", productRoute);

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Images available at http://localhost:${PORT}/uploads/`);
});