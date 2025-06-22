import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoute from "./routes/user.route.js";
import messageRoute from "./routes/message.route.js";
import cookieParser from "cookie-parser";
import { app, server } from "./SocketIO/server.js";


dotenv.config();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const PORT = process.env.PORT || 5001;
const URI = process.env.MONGODB_URI;

try {
  mongoose.connect(URI);
  console.log("MongoDb Connected");
} catch (error) {
  console.log(error);
}

app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
