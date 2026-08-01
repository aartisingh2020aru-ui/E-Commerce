const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const app = express();

require("dotenv").config();

require("./config/db");
const useRoute = require("./routes/authRoutes");

app.use(express.json());

//Rotes
app.use("/api/auth", useRoute);

const PORT = process.env.PORT || 5000 ; 
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`);
});