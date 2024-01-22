import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";

dotenv.config();
mongoose.set("strictQuery", true);
const connectDB = () => {
  mongoose
    .connect("mongodb+srv://webtechfest:Tech2024fest@techfest-24.go1b9wy.mongodb.net/?retryWrites=true&w=majority")
    .then((res) => console.log("Connected to MongoDB".bgBlue));
};

export default connectDB;
