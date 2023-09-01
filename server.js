const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");

const port = process.env.PORT;

connectDB();
const app = express();

app.use(express.json());
app.use("/api/contacts",require("./routes/ContactRoutes"));
app.use("/api/users",require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`${port}`);
})