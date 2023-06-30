import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();
mongoose.set("strictQuery", true);
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {user: process.env.MONGO_USER, pass: process.env.MONGO_PWD, dbName: "techfest"})
    .then((res) => console.log("Connected to MongoDB".bgBlue));
};

export default connectDB;
