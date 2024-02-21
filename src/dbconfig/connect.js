import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://avinashkaur542:kr$signOP699090@cluster0.781kpom.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};
