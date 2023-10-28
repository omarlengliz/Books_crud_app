const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/config");
const errorHandler = require("./middleware/errorMiddleware");
const app = express();
dotenv.config();
console.log("test")

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const bookRoutes = require("./routes/BookRoutes");
const authRoutes =require("./routes/AuthRoute.js")
const categoryRoutes = require("./routes/CategoryRoutes");
const authorRoutes =require("./routes/AuthorRoutes")
app.use("/api/auth",authRoutes );
app.use("/api/category", categoryRoutes);
app.use("/api/author",authorRoutes );
app.use("/api/books", bookRoutes);
app.use(errorHandler);
port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server is running on port ${port}`));
 