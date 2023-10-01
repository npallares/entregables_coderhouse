import mongoose from "mongoose";

const key = "EuZp1145a5nOjOEK";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://nicolaspallaresdg:${key}@cluster0.mbmpflt.mongodb.net/ecommerceDB?retryWrites=true&w=majority`
    );
    console.log("Base de datos conectada");
  } catch (error) {
    console.log(`Error al conectar DB: ${error.message}`);
  }
};
