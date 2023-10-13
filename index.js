const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const errorHandler = require("./middleware/errorMiddleware");
const app = express();
dotenv.config();
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const bookRoutes = require("./routes/BookRoutes");
app.use("/api/books", bookRoutes);
app.use(errorHandler);
port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));
