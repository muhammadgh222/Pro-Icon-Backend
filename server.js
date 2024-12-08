import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_NAME = process.env.DB_NAME;

mongoose
  .connect(`mongodb://localhost:27017/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));
app.listen(PORT, () => {
  console.log(`App is running in port: ${PORT}`);
});
