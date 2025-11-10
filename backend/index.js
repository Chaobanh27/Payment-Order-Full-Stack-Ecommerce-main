import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import router from "../routes/index.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:3000", // frontend local
  credentials: true
}));

app.get("/", (req, res) => res.send("Server is running"));
app.use("/api", router);

export default async function handler(req, res) {
  await connectDB();
  return app(req, res);
}
