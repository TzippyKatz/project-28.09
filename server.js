const express = require("express");
const app = express();
const cors = require("cors");
const carsRoutes = require("./routes/carRoute");
const loginRoutes = require("./routes/loginRoute");
// const logger = require("./middleware/carMiddleware");

//.env
require("dotenv").config();

//express
app.use(express.json());

//CORS
app.use(cors({
    origin: "http://localhost:3001",
    credentials: true  
}));

//Middleware
// app.use(logger);

app.get("/", (req, res) => {
    res.send("Hello, server running 👋");
});

// Routes
app.use("/cars", carsRoutes);
app.use("/login", loginRoutes);


//PORT
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});