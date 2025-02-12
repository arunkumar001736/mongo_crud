import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    // await mongoose.connect(process.env.MONGODB_URI);
    // await mongoose.connect("mongodb://localhost:27017/DB_1");
    await mongoose.connect("mongodb+srv://arunkumar2002017:Jpo8R9v97fKzPVpf@cluster0.0vhw3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

    console.log("MongoDB Connected...");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB;
