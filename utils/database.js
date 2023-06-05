import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("connected to DB");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("--- data base connection success----");
  } catch (error) {
    console.log(error);
  }
};
