const express = require("express");
const app = express();
const cors = require("cors");
const carsRoutes = require("./routes/carRoute");
// const logger = require("./middleware/carMiddleware");

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


//PORT
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});